let languageConfig = Object.assign({},
    require(`../config.${process.platform}`)
);
languageConfig.title = "Solidity";
languageConfig.description =
    "Solidity is an object-oriented, high-level language for implementing smart contracts.";
languageConfig.url = "https://soliditylang.org";
languageConfig.founders = ["Gavin Wood"];
languageConfig.developers = ["Ethereum project's Solidity team"];
languageConfig.years = ["2014"];
languageConfig.extensions = [".sol"];
languageConfig.licenses = [
    "GNU General Public License v3.0 https://github.com/ethereum/solidity/blob/develop/LICENSE.txt",
];

languageConfig.editors = {
    vscode: {
        extensions: ["ms-vscode.node-debug2"],
    },
}; // defined in \.nexss\languages\config.win32.js (copy from .nexssCli\nexss-language\languages\)
languageConfig.run = "";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "";
languageConfig.builders = {};
languageConfig.compilers = {
    node: {
        install: "scoop install solidity",
        command: "solc",
        args: "<file>",
        help: ``,
    },
};
languageConfig.errors = require("./nexss.solidity.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;