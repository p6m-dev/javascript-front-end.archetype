let banner = `                           
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██▀▄▄▀█▀▄▄▀█░▄▀▄░███░▄▄█░▄▄▀█▀▄▄▀█░▄▄▀█▄░▄████░▄▄█░▄▄▀█░▄▀██
██░▀▀░█░▀▀██░█▄█░███░▄██░▀▀▄█░██░█░██░██░██▄▄█░▄▄█░██░█░█░██
██░████▄▀▀▄█▄███▄███▄███▄█▄▄██▄▄██▄██▄██▄█████▄▄▄█▄██▄█▄▄███
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀                                                                                                                                                                                                  
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

context += set("root-directory", render("{{ project-name }}", context));

// context += prompt("Should we initialize a Git repository and stage the changes?:", "git_init", #{
//     help: "Y/N",
//     placeholder: "Y",
// });

// context += prompt("Should we run 'pnpm install' for you?", "pnpm_intall", #{
//     help: "Y/N",
//     placeholder: "Y",
// });

display("\n");

// if context.git_init == 'Y' || context.git_init == 'y' {
//     display("EXECUTE git init && git add . HERE");
// }

// if context.pnpm_intall == 'Y' || context.pnpm_intall == 'y' {
//     display("EXECUTE pnpm install HERE");
// }

if switch_enabled("debug-context") || switch_enabled("debug-all") {
    display("Front-End Codebase Context:");
    display(as_yaml(context));
}

render(Directory("contents"), context);

display("✔ Rendered successfully!");

// DISPLAY NEXT STEPS
display("\nNEXT STEPS:\n");
display(`  cd ${context["root-directory"]}`);

if context.pnpm_intall != 'Y' || context.pnpm_intall != 'y' {
    display("  pnpm install");
}

// display(`  git commit -m "initial commit"`);
