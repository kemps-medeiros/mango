import type { Config } from "jest";

const config: Config = {
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  preset: 'ts-jest',
  coverageDirectory: "coverage",
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};

export default config;
