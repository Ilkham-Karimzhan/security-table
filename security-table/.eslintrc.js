module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/essential",
  ],
  rules: {
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          ["UNIQUE", "SLOT"],
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
        ],
        alphabetical: false,
      },
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: true,
      },
    ],
    "vue/no-irregular-whitespace": [
      "error",
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
        skipHTMLAttributeValues: false,
        skipHTMLTextContents: false,
      },
    ],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/match-component-file-name": [
      "error",
      {
        extensions: ["vue"],
        shouldMatchCase: false,
      },
    ],
  },
};
