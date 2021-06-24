pragma solidity 0.8.6;

contract Test {
    uint256 public num = 0;

    function setNum(uint256 value) external {
        num = value;
    }
}
