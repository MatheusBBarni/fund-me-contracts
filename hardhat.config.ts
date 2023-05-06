import dotenv from 'dotenv'
dotenv.config()

import '@nomiclabs/hardhat-etherscan'
import '@nomicfoundation/hardhat-toolbox'

import { HardhatUserConfig } from 'hardhat/config'

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || ''
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY || ''
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ''

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: '0.8.8',
            },
            {
                version: '0.6.6',
            },
        ],
    },
    defaultNetwork: 'hardhat',
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [GOERLI_PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            url: 'http://127.0.0.1:8545/',
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    // @ts-ignore
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
}

export default config
