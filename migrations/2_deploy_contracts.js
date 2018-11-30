require('dotenv').config()

const MultisigWalletWithDailyLimit = artifacts.require('MultiSigWalletWithDailyLimit.sol')
const MultisigWalletWithoutDailyLimit = artifacts.require('MultiSigWallet.sol')
const MultisigWalletFactory = artifacts.require('MultiSigWalletWithDailyLimitFactory.sol')

const ERC20 = artifacts.require('TokenERC20.sol')

const owners = ["0xeD24247fBE8B6Bd97d2d4cbd32110b99b10ca0c7", "0xD8797665Ff3571d6d76E988809075C81f45a0b46", "0x26700E7973C60dB27B16fCdd24512Fa6Faa5fB98", "0x0F547Fe57450632194A316dDFE1388Cb978bFdaa"]
const signatureNeeded = 3

module.exports = deployer => {
  const deloyFrom = process.env.NODE_ENV === 'production' ? process.env.MAINNET_DEPLOY_ADDRESS : process.env.ROPSTEN_DEPLOY_ADDRESS
  // const args = process.argv.slice()

  // Deploy multisig wallet
  deployer.deploy(MultisigWalletWithoutDailyLimit, owners, signatureNeeded)
    .then((_instance) => {
      console.log("Wallet deployed")
      console.log(_instance.address)
    }).catch((err) => console.log(err))
  
  // deployer.deploy(ERC20, '10000', 'Demo coin', 'DMC')
  //   .then((_instance) => {
  //     console.log("ERC20 deployed")
  //     console.log(_instance.address)
  //   }).catch((err) => console.log(err))

}
