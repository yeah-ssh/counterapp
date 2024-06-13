// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint256 public count = 0;

    function increment() public {
        count += 1;
    }

    function decrement() public {
        require(count > 0, "Count is less tahn 0");
        count -= 1;
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}
