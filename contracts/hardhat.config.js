require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-solpp");
require("hardhat-contract-sizer");

const prodConfig = {
    Mainnet: true,
}

const devConfig = {
    Mainnet: false,
}

const contractDefs = {
    mainnet: prodConfig,
    devnet: devConfig
}

module.exports = {
    solidity: {
        version: "0.6.6",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    solpp: {
        defs: contractDefs[process.env.NET]
    },
    networks: {
        hardhat: {
            allowUnlimitedContractSize: true,
            accounts: {
                privateKeys: [
                    "a50e181a6e98fbd06ebef3452157c1f50d77e818abb461c88697f41623bcf1c0"
                ]
            }
        }
    }
};
