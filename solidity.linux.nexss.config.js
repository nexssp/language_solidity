let languageConfig = Object.assign({}, require("./solidity.win32.nexss.config"));

let sudo = process.sudo;

languageConfig.compilers = {
    node: {
        install: `${sudo}apt purge --auto-remove cmake -y
${sudo}apt update
${sudo}apt install wget build-essential libssl-dev
wget https://github.com/Kitware/CMake/releases/download/v3.20.2/cmake-3.20.2.tar.gz
tar -zxf cmake-3.20.2.tar.gz
cd cmake-3.20.2
./bootstrap
make
${sudo}make install
${sudo}apt install git libboost-all-dev
${sudo}git clone --recursive https://github.com/ethereum/solidity.git --depth=1
cd solidity/
git config --global --add safe.directory ${process.cwd()}/solidity
${sudo}git submodule update --init --recursive
${sudo}./scripts/build.sh `, // but this is installed already.
        command: "solc",
        args: "<file>",
        help: ``,
    },
};

const distro = process.distro;

// This function just replace all apt-get,apt to the right distribution pkg installer.
languageConfig.compilers.node.install = process.replacePMByDistro(
    languageConfig.compilers.node.install
);

languageConfig.dist = distro;

module.exports = languageConfig;