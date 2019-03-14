const path = require("path");

const projectDir = __dirname;

module.exports = {
  rootDir: projectDir,
  moduleNameMapper: {
    "@/(.*)$": path.join(projectDir, "src/$1"),
    components: "<rootDir>/components",
    pages: "<rootDir>/src/pages",
    src: "<rootDir>/src",
    redux: "<rootDir>/src/redux",
    "^<Components>$": "<rootDir>/src/components/common/Input",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
};
