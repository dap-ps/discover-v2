if (!process.env.WALLET_MNEMONIC) {
  throw Error('Env variable WALLET_MNEMONIC not defined!')
}

module.exports = {
  default: {
    enabled: true,
    accounts: [
      {
        mnemonic: process.env.WALLET_MNEMONIC,
        hdpath: process.env.HD_PATH, // If undefined, it will default to the default hd path
        balance: '1534983463450 ether',
      },
    ],
  },

  development: {
    networkType: 'testnet',
    endpoint: `https://ropsten.infura.io/v3/9ad2b075061f4ef9b5dd20859eeb8830`,
  },

  testnet: {
    networkType: 'testnet',
    endpoint: `https://ropsten.infura.io/v3/9ad2b075061f4ef9b5dd20859eeb8830`,
  },

  livenet: {
    endpoint: `https://mainnet.infura.io/v3/9ad2b075061f4ef9b5dd20859eeb8830`,
  },
}
