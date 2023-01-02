import { Config } from "@jest/types";
import { defaults as tsjPreset } from "ts-jest/presets";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  transform: {
    ...(tsjPreset.transform as any),
  },
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  roots: ["src"],
  globalSetup: "./jest.global-setup.ts",
};

export default config;
