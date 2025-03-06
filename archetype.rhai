let banner = `
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██▀▄▄▀█▀▄▄▀█░▄▀▄░███░▄▄█░▄▄▀█▀▄▄▀█░▄▄▀█▄░▄████░▄▄█░▄▄▀█░▄▀██
██░▀▀░█░▀▀██░█▄█░███░▄██░▀▀▄█░██░█░██░██░██▄▄█░▄▄█░██░█░█░██
██░████▄▀▀▄█▄███▄███▄███▄█▄▄██▄▄██▄██▄██▄█████▄▄▄█▄██▄█▄▄███
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
`;
display(banner);

let context = #{};

if switch_enabled("debug-answers") || switch_enabled("debug-all") {
    display("Front-End Codebase Answers:");
    display(as_yaml(ANSWERS));
}

context += render(Archetype("org-prompts"), ANSWERS);

context += prompt("Root directory: ", "project-name", #{
    defaults_with: "front-end-apps",
    cases: [
        CasedIdentityCasedValue(PROGRAMMING_CASES),
    ],
});
context += prompt("Artifactory Host:", "artifactory-host", #{
    defaults_with: "p6m.jfrog.io",
});
context += set("package-name", render("{{ org-name }}-{{ solution-name }}", context));
context += set("org-prefix", render("{{ org-name }}", context));
context += set("org-suffix", render("{{ solution-name }}", context));
context += set("prj-prefix", "front-end");
context += set("prj-suffix", "apps");
context += set("prj-suffix", "apps");
context += set("organization-name", render("{{ org-name }}-{{ solution-name }}", context), #{
    cases: [
        CasedIdentityCasedValue(PROGRAMMING_CASES),
    ],
});

context += set("root-directory", render("{{ project-name }}", context));

context += prompt("Should we run 'pnpm install' for you?", "pnpm_install", #{
    type: Bool,
    help: "y/n",
    defaults_with: true
});

context += prompt("Should we initialize a Git repository and stage the changes?:", "git_init", #{
    type: Bool,
    help: "y/n",
    defaults_with: true
});

if context.pnpm_install == true {
    context += prompt("What type of application would you like to start with?:", "app_type", #{
        type: Select(["React", "NextJS", "None"]),
        defaults_with: "React"
    });
    
    context += prompt("Enter application name:", "app_name", #{
        placeholder: "web",
        help: "Application Name",
        cases: [
            CasedIdentityCasedValue(PROGRAMMING_CASES),
        ],
    });
}

if switch_enabled("debug-context") || switch_enabled("debug-all") {
    display("Front-End Codebase Context:");
    display(as_yaml(context));
}

render(Directory("contents"), context);

display("\n✔ Rendered successfully!\n");

if context.pnpm_install == true {
    display("Installing dependencies...");
    execute("pnpm", #{
        args: [
           "install",
           "--silent"
        ],
        directory: context["root-directory"],
      });
    display("✔ Successfully installed dependencies!\n");  
}

if context.git_init == true {
    display("Initializing Git...");
    execute("git", #{
        args: [
           "init"
        ],
        directory: context["root-directory"],
      });
    execute("git", #{
        args: [
            "add",
            "."
        ],
        directory: context["root-directory"],
    });  
    display("✔ Successfully initialized and staged\n");
}

if context.pnpm_install == true && context.app_type != "None" {
    if context.app_type == "React" {
        execute("pnpm", #{
            args: [
                "exec",
                "nx",
                "generate",
                "@p6m-dev/react:application",
                "--name",
                context["app-name"],
                "--no-interactive"
            ],
            directory: context["root-directory"],
        });
    }

    if context.app_type == "NextJS" {
        execute("pnpm", #{
            args: [
                "exec",
                "nx",
                "generate",
                "@p6m-dev/next:application",
                "--name",
                context["app-name"],
                "--no-interactive"
            ],
            directory: context["root-directory"],
        });
    }

    execute("git", #{
        args: [
            "add",
            "."
        ],
        directory: context["root-directory"],
    }); 

    execute("pnpm", #{
        args: [
            "exec",
            "nx",
            "serve",
            context["app-name"],
            "--open"
        ],
        directory: context["root-directory"],
    });
} else {
    display("\nNEXT STEPS:\n");
    display(`  cd ${context["root-directory"]}`);

    if context.pnpm_intall == false {
        display("  pnpm install");
    }

    if context.git_init == true {
        display(`  git commit -m "initial commit"`);
    }
}


