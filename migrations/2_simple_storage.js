var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage, 42, {privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="]})
};
