const { ethers } = require("ethers");
const TestJSON = require("./artifacts/contracts/Test.sol/Test.json");

const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner();

    const testFactory = ethers.ContractFactory.fromSolidity(TestJSON, signer);
    console.log("deploying test contract");
    const test = await testFactory.deploy();

    const num = 1337;
    console.log(`setting num ${num}`);
    await test.setNum(num, {value: 5566});

    const newNum = await test.num();
    console.log(`num set to ${newNum}`);
};

main()
    .then(() => {
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })