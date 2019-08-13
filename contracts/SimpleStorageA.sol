pragma solidity ^0.5.0;

import './SimpleStorage.sol';

contract SimpleStorageA is SimpleStorage {
  constructor(uint initVal) SimpleStorage(initVal) public {}
}
