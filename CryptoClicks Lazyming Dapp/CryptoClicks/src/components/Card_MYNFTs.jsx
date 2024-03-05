import React from "react";
import Unlist_emoji from "/src/assets/icons/Unlist_button_icon.png";
import nftLogo from "/src/assets/icons/nft_sell_button_icon.png";
import deleteIcon from "/src/assets/icons/delete.png";

export default function Card_MYNFTs(props) {
  return (
    <a className="card--mynft relative select-none p-3 font-josefin group">
      <img
        className="image--myft group-hover:scale-95 duration-500 rounded-md"
        src={props.image}
      />
      <div className="info--mynft absolute top-0 left-0 w-full h-full flex flex-col z-10 p-2">
        <div className="price--mynft self-start  bg-blue-800 p-1 rounded-lg text-white group-hover:m-5 duration-300">
          Price ⟠{props.price}Eth
        </div>
        {props.listed ? (
          <>
            {" "}
            <div className=" text-white rounded-md bg-gray-500 self-end absolute mt-2 mr-2 px-1 duration-500 group-hover:m-4 ">
              Already Listed
            </div>
            <button
              onClick={() => props.onclick(props.index)}
              className="flex py-1 active:bg-gray-700 bg-gray-100  active:text-white self-start mt-auto mr-auto z-20 px-4 rounded-lg  group-hover:mb-2 group-hover:ml-1 active:scale-90 translate-y-5 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <img className=" h-6" src={Unlist_emoji} />{" "}
              <span className="">Unlist</span>
              <span className="mt-1"> NFT</span>
            </button>{" "}
            <button className="text-white self-end mt-275 mr-5 underline-offset-4 absolute duration-300 invisible group-hover:visible m-auto"></button>
          </>
        ) : (
          <>
            <button className="py-2 active:bg-gray-700 bg-gray-100 absolute mt-3 active:text-white self-end z-20 px-2 rounded-sm mr-5   group-hover:mt-5 group-hover:ml-2 active:scale-90 -translate-y-5 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <img className="h-5" src={deleteIcon} />
            </button>
            <button
              onClick={() => props.onclick(props.index)}
              className="flex py-1 active:bg-gray-700 bg-gray-100  active:text-white self-start mt-auto mr-auto z-20 px-5 rounded-lg duration-700 group-hover:mb-2 group-hover:ml-1 active:scale-90 active:duration-700  "
            >
              <img src={nftLogo} alt="Ethereum Logo" className=" h-7" />
              <span className=""> List</span>
              <span className="mt-1"> NFT </span>
            </button>
          </>
        )}
      </div>
    </a>
  );
}
