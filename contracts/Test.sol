pragma solidity 0.6.12;

contract Test {
    uint256 public num = 0;

    function setNum(uint256 value) external payable {
        num = value;
    }
}
