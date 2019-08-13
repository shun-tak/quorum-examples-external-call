pragma solidity ^0.5.0;

import './SimpleStorage.sol';

contract SimpleStorageB is SimpleStorage {
  constructor(uint initVal) SimpleStorage(initVal) public {}
}
