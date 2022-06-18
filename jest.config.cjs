/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.css$": "<rootDir>/src/__mocks__/styleMock.js",
    "^\\$app(.*)$": "<rootDir>/src/app$1",
    "^\\$assets(.*)$": "<rootDir>/src/assets$1",
    "^\\$lib(.*)$": "<rootDir>/src/lib$1",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": "svelte-jester",
  },
  transformIgnorePatterns: ["node_modules/(?!svelte-simple-modal)"],
  moduleFileExtensions: ["js", "svelte"],
};

module.exports = config;
