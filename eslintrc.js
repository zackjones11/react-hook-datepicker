module.exports = {
  root: true,
  env: {
    jest: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
  },
  rules: {
    "react/prop-types": 0,
    "@typescript-eslint/no-explicit-any": 2,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
