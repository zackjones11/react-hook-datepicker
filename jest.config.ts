import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  roots: ["src"],
};

export default config;
