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
    <section>
      <h1 className="text-white text-center text-6xl font-josefin my-10">
        My NFTs
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {category.map((items, key) => (
          <a className="">
            <img className="" src={items.img} />
            <div className="">
              <div className="text-white bg-red-700 rounded-lg p-1">
                Price ⟠{items.price}Eth
              </div>
              {items.islisted ? (
                <>
                  {" "}
                  <div className="p-2 bg-gray-600 font-semibold rounded-lg text">
                    already Listed
                  </div>{" "}
                  <button className="card-button">Unlist</button>
                </>
              ) : (
                <button className="card-button">Sell</button>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
