const PrivateKeyProvider = require("truffle-privatekey-provider");

const privKeyrinkeby = "B6F83638682C26058E058D1A1E1535734EE95DD18EA7359A00934AE2765BE21E"
const contractAddress = "0x285fd8b4af3d2f33fed3965d6107bbf879681b3d"

module.exports = {
  networks: {
    // development: {
    //   host: "localhost",
    //   port: 8545,
    //   network_id: "*", // Match any network id
    //   gas: 4000000,
    //   gasPrice: 10000000000, // 10 gwei
    // },
    // ropsten: {
    //   host: "https://ropsten.infura.io",
    //   port: 433,
    //   network_id: 3
    // },
    development: {
      //provider: () => new HDWalletProvider(privKeyrinkeby, "https://rinkeby.infura.io/" + process.env.INFURA_API_KEY),
      provider: () => new PrivateKeyProvider(privKeyrinkeby, "https://ropsten.infura.io/v3/aef153ca537641078b3305d0f105d5ad"),
      gasPrice: 10 ** 10, // 10 gwei,
      gas: 4712388,
      network_id: "*",
    },
  }
};
