import React from "react";
import Cart from "/src/assets/cart favicons/favicon.ico";

export default function Card_Gallery({
  index,
  islisted,
  image,
  price,
  name,
  desc,

  tokenId,
  from,
  to,
  transferFunction,
}) {
  return (
    <>
      {islisted ? (
        <div className="flex  group relative m-2">
          {" "}
          <img
            className="h-92 w-92 group-hover:scale-95 group-hover:brightness-50 duration-700 rounded-md z-0"
            src={image}
          />
          <div className="z-10 absolute flex flex-col ">
            <div className="font-josefin text-white font-medium bg-blue-800 p-1 rounded-lg card-price-gallery select-none absolute place-self-start group-hover:m-3 duration-700 -mt-1 -ml-1">
              Price: ⟠{price}Eth
            </div>
            <div className="mt-10 p-2 -translate-y-5 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100  max-w-92">
              <p className="text-white text-2xl font-josefin p-2 font-bold mt-3">
                {name}
              </p>
              <p className="text-white w-92 pr-5 text-sm font-josefin mt-3 p-2 break-words">
                {desc}
              </p>
            </div>

            <button
              onClick={() => transferFunction(from, to, tokenId, price)}
              class="active:bg-gray-700 active:text-white flex ml-260 font-josefin select-none p-2 rounded-md bg-gray-100 duration-700 group-hover:mb-2 group-hover:mt-270 active:scale-90 active:duration-700  absolute mt-275"
            >
              <span className="select-none">
                <img className=" mr-1 h-6" src={Cart} />
              </span>
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
