/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "RgPwHpP2d9aH-ls-zl8x68sT1I7Yra3v";
const SEPOLIA_PRIVATE_KEY =
  "757174aa1db90055355225c655fe56c00e42bef3acc0f6b20dd4de147d238c22";
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${SEPOLIA_PRIVATE_KEY}`],
    },
  },
};
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
