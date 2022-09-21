import Web3 from 'web3';
import boardingPass from "./BlackBoxCollectiveBoardingPass.json"


const contractAddr = "0x8dA95FC89626182eC5C36EFE9dF9D96f7BFE82AE";
const web3 = new Web3("https://mainnet.infura.io/v3/bad8cc770bef49dc88683bf2290205c8");
let contract = new web3.eth.Contract(boardingPass.abi, contractAddr);

export { 
    contractAddr, 
    contract
};