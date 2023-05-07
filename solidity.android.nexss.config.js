let languageConfig = Object.assign({}, require("./solidity.win32.nexss.config"));

// let sudo = process.sudo;

languageConfig.compilers = {
    solidity: {
        install: `pkg install -y solidity`, // but this is installed already.
        command: "solc",
        args: "<file>",
        help: ``,
    },
};

const distro = process.distro;
languageConfig.dist = distro;

module.exports = languageConfig;