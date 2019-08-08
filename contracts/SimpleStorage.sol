pragma solidity ^0.5.0;

contract SimpleStorage {
  uint public storedData;

  event Set (uint x);

  constructor(uint initVal) public {
    storedData = initVal;
  }

  function set(uint x) public {
    emit Set(x);
    storedData = x;
  }

  function get() public view returns (uint retVal) {
    return storedData;
  }
}
