let context = #{};

const PROGRAMMING_CASES = [PascalCase, CamelCase, KebabCase, SnakeCase, TrainCase, ConstantCase];

context += prompt("Org Prefix:", "org-prefix", #{
    help: "Joint Venture Name",
    cased_as: [
       CasedIdentityCasedValue(PROGRAMMING_CASES),
       CasedKeyCasedValue("organization-prefix", PROGRAMMING_CASES),
    ],
});

context += prompt("Org Suffix:", "org-suffix", #{
    help: "Joint Venture Project Name",
    cased_as: [
       CasedIdentityCasedValue(PROGRAMMING_CASES),
       FixedKeyCasedValue("organization-title", TitleCase),
       FixedKeyCasedValue("OrganizationTitle", TitleCase),
    ],
});

context += set("organization-name", render("{{org-prefix}}-{{org-suffix}}",context), #{
    cased_as: [
        CasedIdentityCasedValue(PROGRAMMING_CASES),
    ],
});

context += set("project-name", render("{{org-prefix}}-{{org-suffix}}", context), #{
    cased_as: [
        CasedIdentityCasedValue(PROGRAMMING_CASES),
    ],
});

context += set("package-name", context["project-name"]);
context += set("base-name", context["project-suffix"]);

context += set("root-directory", context["project-name"]);

context += set("prj-prefix", "front-end", #{
    cased_as: [
        CasedIdentityCasedValue(PROGRAMMING_CASES),
        CasedKeyCasedValue("project-suffix", PROGRAMMING_CASES),
    ],
});

context += set("prj-suffix", "apps", #{
    cased_as: [
        CasedIdentityCasedValue(PROGRAMMING_CASES),
        CasedKeyCasedValue("project-suffix", PROGRAMMING_CASES),
    ],
});

context += prompt("Front-end application:", "default-app", #{
  type: Select([
    "React.js",
    "Next.js",
    "React Native",
    "None",
  ]),
  default_with: "None",
});

let destination = context["root-directory"];
render(Directory("layouts_base"), destination, context);
