const SimpleStorageA = artifacts.require("SimpleStorageA");
const SimpleStorageB = artifacts.require("SimpleStorageB");
const Manager = artifacts.require("Manager");
const node4pubkey = "oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=";
const node7pubkey = "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc=";

module.exports = async done => {
  const simpleStorageA = await SimpleStorageA.deployed();
  const simpleStorageB = await SimpleStorageB.deployed();
  const manager = await Manager.deployed();
  try {
    console.log(await manager.getData(simpleStorageA.address));
  } catch(e) {
    console.log('private state not found');
  }
  try {
    console.log(await manager.getData(simpleStorageB.address));
  } catch(e) {
    console.log('private state not found');
  }
  done();
};
