require('dotenv').config()
const HDWalletProvider = require("truffle-hdwallet-provider");

const getProvider = (network) => {
  switch (network) {
    case "mainnet":
      return new HDWalletProvider(process.env.MAINNET_MNEMONIC, `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`)
    case "ropsten":
      return new HDWalletProvider(process.env.ROPSTEN_MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`)
  }
}

const solcStable = {
  version: '0.4.15',
};

const solcNightly = {
  version: 'nightly',
  docker: true,
};

const useSolcNightly = process.env.SOLC_NIGHTLY === 'true';

module.exports = {
  networks: {
    mainnet: {
      provider: getProvider("mainnet"),
      gasPrice: 10 * 10 ** 9, // 10 gwei,
      gas: 4712388,
      network_id: "1",
    },
    ropsten: {
      provider: getProvider("ropsten"),
      gasPrice: 5 * 10 ** 9, // 5 gwei,
      gas: 4712388,
      network_id: "3",
    },
  },
  compilers: {
    solc: useSolcNightly ? solcNightly : solcStable,
  },
};
