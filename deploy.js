const ethers = require("ethers");
const fs = require("fs");

const abi = fs.readFileSync("SimpleStorage_sol_SimpleStorage.abi","utf8");
const binary = fs.readFileSync("SimpleStorage_sol_SimpleStorage.bin","utf8");
// HTTP://127.0.0.1:7545  : RPC URL provided by Ganache

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");  // this code connects our script with our blockchain


async function main() {
  console.log("some message");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
