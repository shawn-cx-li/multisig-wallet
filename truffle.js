require('dotenv').config()
const PrivateKeyProvider = require("truffle-privatekey-provider");

const deploymentProvider = () => {
  if (process.env.NODE_ENV === 'production') {
    const privKey = process.env.MAINNET_DEPLOY_KEY
    return new PrivateKeyProvider(privKey, `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`)
  } else {
    const privKey = process.env.ROPSTEN_DEPLOY_KEY
    console.log(process.env)
    return new PrivateKeyProvider(privKey, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`)
  }

}

// const privKeyrinkeby = 'B6F83638682C26058E058D1A1E1535734EE95DD18EA7359A00934AE2765BE21E'
module.exports = {
  networks: {
    development: {
      provider: deploymentProvider(),
      // provider: () => new PrivateKeyProvider(privKeyrinkeby, "https://ropsten.infura.io/v3/aef153ca537641078b3305d0f105d5ad"),
      gasPrice: 10 ** 10, // 5 gwei,
      gas: 4712388,
      network_id: "*",
    },
  },
  // solc: {
  //   optimizer: {
  //     enabled: true,
  //     runs: 200
  //   }
  // }
};
