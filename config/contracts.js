module.exports = {
  default: {
    library: 'embarkjs', // can be also be 'web3'
    dappAutoEnable: false,

    gas: 'auto',
    gasPrice: '10000000000', // 10gwei. TODO: Set a proper gas price for deployment. See ethgasstation.info

    strategy: 'explicit',

    deploy: {
      Discover: {
        args: ['$MiniMeToken'],
      },
    },
  },

  development: {
    dappConnection: [
      '$WEB3',
      'https://ropsten.infura.io/v3/9ad2b075061f4ef9b5dd20859eeb8830',
    ],
    deploy: {
      MiniMeTokenFactory: {
        deploy: false,
      },
      MiniMeToken: {
        address: '0xc55cf4b03948d7ebc8b9e8bad92643703811d162', // Ropsten SNT address
      },
      Discover: {
        args:["$MiniMeToken"]
      },
      DiscoverKyberSwap: {
        deploy: false,
        //args: ["$Discover", "0x818E6FECD516Ecc3849DAf6845e3EC868087B755", "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "0xbF5d8683b9BE6C43fcA607eb2a6f2626A18837a6", "0x0000000000000000000000000000000000000000", 20]
      }
    },
    tracking: 'shared.development.chains.json',
  },

  testnet: {
    dappConnection: [
      '$WEB3',
      'https://ropsten.infura.io/v3/9ad2b075061f4ef9b5dd20859eeb8830',
    ],
    deploy: {
      MiniMeTokenFactory: {
        deploy: false,
      },
      MiniMeToken: {
        address: '0xc55cf4b03948d7ebc8b9e8bad92643703811d162', // Ropsten SNT address
      },
      Discover: {
        address: '0x9fb115BC152aE21ECDc81c73843673fa38e4D2dB'
      },
      DiscoverKyberSwap: {
        deploy: false
      }
    },
    tracking: 'shared.testnet.chains.json',
  },

  livenet: {
    dappConnection: [
      '$WEB3',
      'https://mainnet.infura.io/v3/9ad2b075061f4ef9b5dd20859eeb8830',
    ],
    deploy: {
      MiniMeTokenFactory: {
        deploy: false,
      },
      MiniMeToken: {
        address: '0x744d70fdbe2ba4cf95131626614a1763df805b9e', // Mainnet SNT address
      },
      Discover: {
        address: '0x5bCF2767F86f14eDd82053bfBfd5069F68C2C5F8',
      },
      DiscoverKyberSwap: {
        deploy: false,
        //args: ["$Discover", "0x818E6FECD516Ecc3849DAf6845e3EC868087B755", "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "0x744d70fdbe2ba4cf95131626614a1763df805b9e", "0x0000000000000000000000000000000000000000", 20]
      }
    },
    tracking: 'shared.mainnet.chains.json',
  },
}
