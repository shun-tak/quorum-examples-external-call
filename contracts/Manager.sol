pragma solidity ^0.5.0;

import './SimpleStorage.sol';

contract Manager {
    mapping (address => SimpleStorage) public simpleStorages;

    constructor(address storage1, address storage2) public {
        register(storage1);
        register(storage2);
    }

    function register(address simpleStorageAddress) public {
        simpleStorages[simpleStorageAddress] = SimpleStorage(simpleStorageAddress);
    }

    function setData(address simpleStorageAddress, uint x) public {
        simpleStorages[simpleStorageAddress].set(x);
    }

    function getData(address simpleStorageAddress) public view returns (uint) {
        return simpleStorages[simpleStorageAddress].get();
    }
}
