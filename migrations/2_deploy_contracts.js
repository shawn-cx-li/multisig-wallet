require('dotenv').config()

const MultisigWalletWithDailyLimit = artifacts.require('MultiSigWalletWithDailyLimit.sol')
const MultisigWalletWithoutDailyLimit = artifacts.require('MultiSigWallet.sol')
const MultisigWalletFactory = artifacts.require('MultiSigWalletWithDailyLimitFactory.sol')

module.exports = deployer => {
  const deloyFrom = process.env.NODE_ENV === 'prod' ? process.env.MAINNET_DEPLOY_ADDRESS : process.env.ROPSTEN_DEPLOY_ADDRESS
  const args = process.argv.slice()
  
  // Deploy multisig wallet
  const owners = process.env.OWNER_ADDRESSES.split(',')
  const signatureRequired = process.env.SIGNATURE_REQUIRED
  deployer.deploy(MultisigWalletWithoutDailyLimit, owners, signatureRequired)
    .then((_instance) => {
      console.log("=========== Wallet deployed ===========")
      console.log(_instance.address)
    }).catch((err) => console.log(err))
}
