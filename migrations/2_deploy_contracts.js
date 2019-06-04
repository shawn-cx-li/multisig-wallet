require('dotenv').config()

const MultisigWalletWithDailyLimit = artifacts.require('MultiSigWalletWithDailyLimit.sol')
const MultisigWalletWithoutDailyLimit = artifacts.require('MultiSigWallet.sol')
const MultisigWalletFactory = artifacts.require('MultiSigWalletWithDailyLimitFactory.sol')

module.exports = deployer => {  
  // Deploy multisig wallet
  const owners = process.env.OWNER_ADDRESSES.split(',')
  const signaturesRequired = process.env.SIGNATURES_REQUIRED
  deployer.deploy(MultisigWalletWithoutDailyLimit, owners, signaturesRequired)
    .then((_instance) => {
      console.log("=========== Wallet deployed ===========")
      console.log(_instance.address)
    }).catch((err) => console.log(err))
}
