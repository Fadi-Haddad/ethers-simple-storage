const { ethers } = require("ethers");
const fs = require("fs");

async function main() {
  const abi = fs.readFileSync("SimpleStorage_sol_SimpleStorage.abi","utf8");
  const binary = fs.readFileSync("SimpleStorage_sol_SimpleStorage.bin","utf8");
  // HTTP://127.0.0.1:7545  : RPC URL provided by Ganache

  let provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");  // this code connects our script with our blockchain
  const wallet  = new ethers.Wallet(
  "0x73eed09c2137aa5ae8e06df7366d924277212457d0487e6c17520a35453caf1d",
  provider); // a private key obtained from Ganache.

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

  console.log("deploying please wait");

  const contract = await contractFactory.deploy();

  console.log(contract);

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
