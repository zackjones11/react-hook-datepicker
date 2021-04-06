import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default {
  input: pkg.source,
  output: {
    sourcemap: true,
    file: pkg.main,
    format: "cjs",
  },
  plugins: [typescript()],
};
