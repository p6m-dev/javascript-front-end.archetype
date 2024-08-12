let context = #{};

if switch_enabled("debug-answers") || switch_enabled("debug-all") {
    display("Front-End Codebase Answers:");
    display(as_yaml(ANSWERS));
}

context += render(Archetype("org-prompts"), ANSWERS);

context += prompt("Root directory: ", "project-name", #{
    defaults_with: "front-end-apps",
});
context += set("package-name", render("{{ org-name }}-{{ venture-name }}", context));
context += set("org-prefix", render("{{ org-name }}", context));
context += set("org-suffix", render("{{ venture-name }}", context));
context += set("prj-prefix", "front-end");
context += set("prj-suffix", "apps");
context += set("prj-suffix", "apps");
context += set("organization-name", render("{{ org-name }}-{{ venture-name }}", context), #{
    cases: [
        CasedIdentityCasedValue(PROGRAMMING_CASES),
    ],
});
context += set("root-directory", render("{{ project-name }}", context));

if switch_enabled("debug-context") || switch_enabled("debug-all") {
    display("Front-End Codebase Context:");
    display(as_yaml(context));
}

render(Directory("contents"), context);
