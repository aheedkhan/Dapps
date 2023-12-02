import React from "react";

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
    <section className="bg-white">
      <h1 className="text-white text-center text-6xl font-josefin my-10">
        My NFTs
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {category.map((items, key) => (
          <a className="card--mynft relative">
            <img className="image--myft z-0" src={items.img} />
            <div className="info--mynft absolute top-0 left-0 w-full h-full flex  z-10">
              <div className="price--mynft self-start  bg-blue-800 p-1 ">
                Price ⟠{items.price}Eth
              </div>
              {items.islisted ? (
                <>
                  {" "}
                  <button className="bg-white self-end mr-auto">
                    Unlist
                  </button>{" "}
                  <div className="bg-white self-end ml-auto">
                    already Listed
                  </div>
                </>
              ) : (
                <button className="bg-white self-end">Sell</button>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
