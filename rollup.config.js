import resolve from "@rollup/plugin-commonjs";
import commonJS from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default {
  input: pkg.source,
  output: {
    sourcemap: true,
    file: pkg.main,
    format: "cjs",
  },
  plugins: [
    resolve(),
    commonJS({
      include: "node_modules/**",
    }),
    typescript(),
  ],
};
