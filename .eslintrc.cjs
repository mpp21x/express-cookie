module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard",
  ],
  plugins: ['prettier'],
  ignorePatterns: ["*.ts"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    indent: ["error", 2],
    quotes: ["off", "single"],
    "no-unused-vars": "warn",
  },
};
