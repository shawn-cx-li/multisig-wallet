const MultisigWalletWithDailyLimit = artifacts.require('MultiSigWalletWithDailyLimit.sol')
const MultisigWalletWithoutDailyLimit = artifacts.require('MultiSigWallet.sol')
const MultisigWalletFactory = artifacts.require('MultiSigWalletWithDailyLimitFactory.sol')

const deployArgs = { gas: 6721975, from: "0x59749b0D34BaC5603B0E592cfdA665Da2c62dfea" }
module.exports = deployer => {
  const args = process.argv.slice()
  console.log(args.length)
  if (process.env.DEPLOY_FACTORY) {
    deployer.deploy(MultisigWalletFactory, deployArgs)
    console.log("Factory with Daily Limit deployed")
  } else if (args.length < 5) {
    console.error("Multisig with daily limit requires to pass owner " +
      "list, required confirmations and daily limit")
  } else if (args.length < 6) {
    deployer.deploy(MultisigWalletWithoutDailyLimit, args[3].split(","), args[4])
      .then((_instance) => {
        console.log(_instance)
        console.log("Wallet deployed")
        console.log(_instance.address)
      }).catch((err) => console.log(err))
  } else {
    deployer.deploy(MultisigWalletWithDailyLimit, args[3].split(","), args[4], args[5], deployArgs)
    console.log("Wallet with Daily Limit deployed")
  }
}
