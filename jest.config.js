const path = require("path");

const projectDir = __dirname;

module.exports = {
  rootDir: projectDir,
  moduleNameMapper: {
    "@/(.*)$": path.join(projectDir, "src/$1"),
    components: "<rootDir>/src/components",
    pages: "<rootDir>/src/pages",
    src: "<rootDir>/src",
    redux: "<rootDir>/src/redux",
    "^<Components>(.*)$": "<rootDir>/src/components$1",
    "^<Assets>(.*)": "<rootDir>/src/assets$1",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  },
};
