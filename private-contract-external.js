a = eth.accounts[0]
web3.eth.defaultAccount = a;

var simpleStorageAbi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"x","type":"uint256"}],"name":"Set","type":"event"}];
var simpleStorageByteCode = "0x608060405234801561001057600080fd5b506040516020806101bb8339810180604052602081101561003057600080fd5b81019080805190602001909291905050508060008190555050610163806100586000396000f3fe608060405260043610610051576000357c0100000000000000000000000000000000000000000000000000000000900480632a1afcd91461005657806360fe47b1146100815780636d4ce63c146100bc575b600080fd5b34801561006257600080fd5b5061006b6100e7565b6040518082815260200191505060405180910390f35b34801561008d57600080fd5b506100ba600480360360208110156100a457600080fd5b81019080803590602001909291905050506100ed565b005b3480156100c857600080fd5b506100d161012e565b6040518082815260200191505060405180910390f35b60005481565b7fdf7a95aebff315db1b7716215d602ab537373cdb769232aae6055c06e798425b816040518082815260200191505060405180910390a18060008190555050565b6000805490509056fea165627a7a723058209d076f8af02f120d7260cac9e09b7adbb3ec1ce13d70843eed80024c548b347d0029";

var managerAbi = [{"constant": true,"inputs": [{"name": "simpleStorageAddress","type": "address"}],"name": "getData","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "simpleStorageAddress","type": "address"}],"name": "register","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "simpleStorageAddress","type": "address"},{"name": "x","type": "uint256"}],"name": "setData","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "simpleStorages","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"inputs": [{"name": "storage1","type": "address"},{"name": "storage2","type": "address"}],"payable": false,"stateMutability": "nonpayable","type": "constructor"}];
var managerByteCode = "0x608060405234801561001057600080fd5b506040516040806105e08339810180604052604081101561003057600080fd5b81019080805190602001909291908051906020019092919050505061006382610082640100000000026401000000009004565b61007b81610082640100000000026401000000009004565b5050610102565b806000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6104cf806101116000396000f3fe60806040526004361061005c576000357c01000000000000000000000000000000000000000000000000000000009004806338266b22146100615780634420e486146100c65780638130872114610117578063fc91e84314610172575b600080fd5b34801561006d57600080fd5b506100b06004803603602081101561008457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610203565b6040518082815260200191505060405180910390f35b3480156100d257600080fd5b50610115600480360360208110156100e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610307565b005b34801561012357600080fd5b506101706004803603604081101561013a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610387565b005b34801561017e57600080fd5b506101c16004803603602081101561019557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610470565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636d4ce63c6040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b1580156102c557600080fd5b505afa1580156102d9573d6000803e3d6000fd5b505050506040513d60208110156102ef57600080fd5b81019080805190602001909291905050509050919050565b806000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166360fe47b1826040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15801561045457600080fd5b505af1158015610468573d6000803e3d6000fd5b505050505050565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a72305820283cc2ecaf344e4a21271da78ef7ded694cc286459beeeb052c3cd5323dc24a20029";

var node4pubkey = "oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=";
var node7pubkey = "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc=";

var simpleContract = web3.eth.contract(simpleStorageAbi);
simpleContract.new(4, {from:web3.eth.accounts[0], data: simpleStorageByteCode, gas: 5000000, privateFor: [node4pubkey]}, function(e, simpleStorage1) {
    if (e) {
    console.log("err creating contract", e);
  } else {
    if (!simpleStorage1.address) {
      console.log("Contract transaction send: simpleStorage1 TransactionHash: " + simpleStorage1.transactionHash + " waiting to be mined...");
    } else {
      console.log('var storage1Address = "' + simpleStorage1.address + '"');

      simpleContract.new(7, {from:web3.eth.accounts[0], data: simpleStorageByteCode, gas: 5000000, privateFor: [node7pubkey]}, function(e, simpleStorage2) {
        if (e) {
          console.log("err creating contract", e);
        } else {
          if (!simpleStorage2.address) {
            console.log("Contract transaction send: simpleStorage2 TransactionHash: " + simpleStorage2.transactionHash + " waiting to be mined...");
          } else {
            console.log('var storage2Address = "' + simpleStorage2.address + '"');

            var managerContract = web3.eth.contract(managerAbi);
            managerContract.new(simpleStorage1.address, simpleStorage2.address, {from:web3.eth.accounts[0], data: managerByteCode, gas: 5000000, privateFor: [node4pubkey, node7pubkey]}, function(e, manager) {
              if (e) {
                console.log("err creating contract", e);
              } else {
                if (!manager.address) {
                  console.log("Contract transaction send: manager TransactionHash: " + manager.transactionHash + " waiting to be mined...");
                } else {
                  console.log('var managerAddress = "' + manager.address + '"');
                }
              }
            })
          }
        }
      });
    }
  }
});

/**
loadScript('/examples/private-contract-external.js')
 */
