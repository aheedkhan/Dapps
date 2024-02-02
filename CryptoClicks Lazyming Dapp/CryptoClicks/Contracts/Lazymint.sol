// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract LazyMintNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address public owner;
    uint256 public constant MINT_PRICE = 0.1 ether;

    constructor() ERC721("LazyMintNFT", "LMNFT") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    // Function to mint a token and assign it to an address
    function mintToken(address to, string memory tokenURI)
        private // Changed from public to private to restrict access
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(to, newItemId);
        _setTokenURI(newItemId, tokenURI);

        // Approve the contract to transfer the token on behalf of the owner
        _approve(address(this), newItemId, msg.sender, true);


        return newItemId;
    }

    // Function to create a token and become the owner
    function createToken(string memory tokenURI)
        public
        returns (uint256)
    {
        // Call the mintToken function with the sender's address
        uint256 newItemId = mintToken(msg.sender, tokenURI);
        return newItemId;
    }

    // Function to withdraw collected funds
    function withdraw() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    // Function to transfer a token to another address and pay the owner
// Function to transfer a token to another address and pay the owner with a custom price
function transferFromU(address from, address to, uint256 tokenId, uint256 price)
    public
    payable
{
    // Check if the amount sent is equal to the price
   require(msg.value == price && msg.value >= MINT_PRICE, "Invalid amount of ETH sent");


    // Transfer the token from the owner to the buyer
    _transfer(from, to, tokenId);

    // Pay the owner of the token
    payable(from).transfer(msg.value);
}




    // function transferFromU(address from, address to, uint256 tokenId)
    //     public
    //     payable
    // {
    //     // Check if the amount sent is equal to the mint price
    //     require(msg.value == MINT_PRICE, "Incorrect amount of ETH sent");

    //     // Transfer the token from the owner to the buyer
    //     _transfer(from, to, tokenId);

    //     // Pay the owner of the token
    //     payable(from).transfer(msg.value);
    // }
}
