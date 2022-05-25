let languageConfig = Object.assign({}, require("./solidity.win32.nexss.config"));

languageConfig.compilers = {
    node: {
        install: "brew install solidity",
        command: "solc",
        args: "<file>",
        help: ``,
    },
};

module.exports = languageConfig;