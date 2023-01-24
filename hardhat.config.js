require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-chai-matchers")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("dotenv").config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const GOERLI_RPC_URL =process.env.GOERLI_RPC_URL || "https://eth-goerli.alchemyapi.io/v2/WYOliBKqM5eHQJS3ljMfH4cabssSFyao"

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
    solidity: "0.8.17",
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 5,
        },
        localhost: {
            url: "http://127.0.01:8545/",
            // accounts: hardhad already imported accounts
            chainId: 31337,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
    etherscan: {
      // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
      apiKey: {
          goerli: ETHERSCAN_API_KEY,
      },
      customChains: [
          {
              network: "goerli",
              chainId: 5,
              urls: {
                  apiURL: "https://api-goerli.etherscan.io/api",
                  browserURL: "https://goerli.etherscan.io",
              },
          },
      ],
  },
    
}
