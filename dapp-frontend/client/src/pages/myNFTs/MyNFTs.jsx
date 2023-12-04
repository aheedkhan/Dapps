import React from "react";
import Unlist_emoji from "/src/assets/red porhibited emoji/favicon.ico";
export default function MyNFTs() {
  const category = [
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_9.jpg.webp",
      categ: "Nature",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
      islisted: true,
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_8.jpg.webp",
      categ: "Architecture",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
      islisted: false,
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_7.jpg.webp",
      categ: "People",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
      islisted: true,
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_6.jpg.webp",
      categ: "Travel",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
      islisted: true,
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_5.jpg.webp",
      categ: "Sport",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
      islisted: false,
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_4.jpg.webp",
      categ: "Portrait",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
      islisted: true,
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_1.jpg.webp",
      categ: "Portrait",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
      islisted: true,
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_3.jpg.webp",
      categ: "Portrait",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
      islisted: true,
    },
  ];

  return (
    <section>
      <h1 className="text-white text-center text-6xl font-josefin my-10 select-none">
        My NFTs
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {category.map((items, key) => (
          <a className="card--mynft relative select-none p-3 font-josefin group">
            <img
              className="image--myft group-hover:scale-95 duration-500 rounded-md"
              src={items.img}
            />
            <div className="info--mynft absolute top-0 left-0 w-full h-full flex flex-col z-10 p-2">
              <div className="price--mynft self-start  bg-blue-800 p-1 rounded-lg text-white group-hover:m-5 duration-300">
                Price ⟠{items.price}Eth
              </div>
              {items.islisted ? (
                <>
                  {" "}
                  <div className=" text-white rounded-md bg-gray-500 self-end absolute mt-2 mr-2 px-1 duration-500 group-hover:m-4 ">
                    Already Listed
                  </div>
                  <button className=" invisible group-hover:visible flex py-1 active:bg-gray-700 bg-gray-100  active:text-white self-start mt-auto mr-auto z-20 px-4 rounded-lg  group-hover:mb-2 group-hover:ml-1 active:scale-90 active:duration-1000 ">
                    <span className="select-none">
                      <img className="mr-1 h-5" src={Unlist_emoji} />
                    </span>
                    Unlist
                  </button>{" "}
                  <button className="text-white self-end mt-275 mr-5 underline-offset-4 absolute duration-300 invisible group-hover:visible m-auto">
                    Details
                  </button>
                </>
              ) : (
                <>
                  <button className="flex py-1 active:bg-gray-700 bg-gray-100  active:text-white self-start mt-auto mr-auto z-20 px-5 rounded-lg duration-700 group-hover:mb-2 group-hover:ml-1 active:scale-90 active:duration-700  ">
                    <img
                      src="https://cryptologos.cc/logos/versions/ethereum-eth-logo-diamond-purple.svg?v=029"
                      alt="Ethereum Logo"
                      className=" h-5 mr-2 "
                    />
                    <span> Sell NFT</span>
                  </button>
                  <button className="text-white self-end mt-275 mr-5 underline-offset-4 absolute duration-300 invisible group-hover:visible m-auto">
                    Details
                  </button>
                </>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
