const SimpleStorageA = artifacts.require("SimpleStorageA");
const SimpleStorageB = artifacts.require("SimpleStorageB");
const Manager = artifacts.require("Manager");
const node4pubkey = "oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=";
const node7pubkey = "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc=";

module.exports = async deployer => {
  await deployer.deploy(SimpleStorageA, 4, {privateFor: [node4pubkey]});
  await deployer.deploy(SimpleStorageB, 7, {privateFor: [node7pubkey]});
  const simpleStorageA = await SimpleStorageA.deployed();
  const simpleStorageB = await SimpleStorageB.deployed();
  await deployer.deploy(Manager, simpleStorageA.address, simpleStorageB.address, {privateFor: [node4pubkey, node7pubkey]});
  const manager = await Manager.deployed();
};
