/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["\\\\node_modules\\\\", "<rootDir>/cypress/"],
  transformIgnorePatterns: [
    "<rootDir>/node_modules",
    "node_modules/(?!antd/es/card)",
    "node_modules/(?!antd)",
    "<rootDir>/node_modules/antd",
  ],
};
