const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async done => {
  console.log("Getting deployed version of SimpleStorage...");
  const simpleStorage = await SimpleStorage.deployed();
  console.log("Setting value to 65...");
  const result = await simpleStorage.set(65, {privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="]});
  console.log("Transaction:", result);
  console.log("Finished!");
  done();
};
