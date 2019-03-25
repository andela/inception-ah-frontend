const projectDir = __dirname;

module.exports = {
  moduleFileExtensions: ["jsx", "js", "json", "png"],
  setupFiles: ["<rootDir>/__tests__/setup.config.js"],
  rootDir: projectDir,
  moduleNameMapper: {
    "^<src>/(.*)$": "<rootDir>/src/$1",
    "^<actions>/(.*)$": "<rootDir>/src/actions/$1",
    "^<api>/(.*)$": "<rootDir>/src/api/$1",
    "^<assets>/(.*)$": "<rootDir>/src/assets/$1",
    "^<images>/(.*)$": "<rootDir>/src/assets/images/$1",
    "^<styles>/(.*)$": "<rootDir>/src/assets/styles/$1",
    "^<components>/(.*)$": "<rootDir>/src/components/$1",
    "^<auth>/(.*)$": "<rootDir>/src/components/auth/$1",
    "^<common>/(.*)$": "<rootDir>/src/components/common/$1",
    "^<constants>/(.*)$": "<rootDir>/src/constants/$1",
    "^<pages>/(.*)$": "<rootDir>/src/pages/$1",
    "^<reducers>/(.*)$": "<rootDir>/src/reducers/$1",
    "^<utils>/(.*)$": "<rootDir>/src/utils/$1",
    "^<mock>/(.*)$": "<rootDir>/__tests__/__mock__/$1"
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub"
  }
};
