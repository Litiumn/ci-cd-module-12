export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: true,
        document: true,
        console: true,
        alert: true,
      },
    },
    rules: {
      semi: ["error", "always"],
    },
  },
];
