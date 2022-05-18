import Web3 from 'web3';
import accessPass from "./BlackBoxCollectiveAccessPass.json"

const contractAddr = "0x4D1872a1BD1BE8335CceC4EB650b7Ed2Ed67A959";
const web3 = new Web3("https://mainnet.infura.io/v3/bad8cc770bef49dc88683bf2290205c8");
let contract = new web3.eth.Contract(accessPass.abi, contractAddr);

export { 
    contractAddr, 
    contract
};