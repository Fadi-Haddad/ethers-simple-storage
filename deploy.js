const ethers = require("ethers");
const fs = require("fs");

const abi = fs.readFileSync("SimpleStorage_sol_SimpleStorage.abi","utf8");
const binary = fs.readFileSync("SimpleStorage_sol_SimpleStorage.bin","utf8");

async function main() {
  console.log("some message");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
