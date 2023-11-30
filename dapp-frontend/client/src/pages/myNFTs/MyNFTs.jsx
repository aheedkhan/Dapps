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
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_8.jpg.webp",
      categ: "Architecture",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_7.jpg.webp",
      categ: "People",
      Name: "Lorem Ipsum is simply dummy text of the printing",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_6.jpg.webp",
      categ: "Travel",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_5.jpg.webp",
      categ: "Sport",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_4.jpg.webp",
      categ: "Portrait",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_1.jpg.webp",
      categ: "Portrait",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
    },
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_3.jpg.webp",
      categ: "Portrait",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
    },
  ];

  return (
    <section>
      <h1 className="text-white text-center text-6xl font-josefin my-10">
        My NFTs
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {category.map((items, key) => (
          <a className="card1 group">
            <img
              className=" group-hover:brightness-50 p-2 card-img hover:scale-105 hover:duration-300 "
              src={items.img}
            />
            <div className="card-info">
              <span className="text-white">Price ⟠{items.price}Eth</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
