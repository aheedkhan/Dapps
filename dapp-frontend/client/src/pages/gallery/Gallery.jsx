import React from "react";
import Cart from "/src/assets/favicon_io (6)/favicon.ico";
import { useState } from "react";
export default function Gallery() {
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
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_4.jpg.webp",
      categ: "Portrait",
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
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_4.jpg.webp",
      categ: "Portrait",
      price: 23,
      Name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      seller: "i am seller :)",
    },
  ];

  return (
    <>
      <section>
        <h1 className="text-white text-center text-6xl font-josefin my-16 select-none">
          Portrait gallery
        </h1>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {category.map((items, key) => (
            <a className="card group">
              {" "}
              <img
                className="group-hover:brightness-50 p-2 card-img "
                src={items.img}
              />
              <div class="card-info flex flex-col h-full w-full ">
                <div className="text-white font-medium bg-blue-800 p-1 rounded-lg card-price-gallery select-none absolute place-self-start">
                  Price: ⟠{items.price}Eth
                </div>

                <p class="text-title mt-9 select-none">{items.Name}</p>
                <p class="text-body overscroll-contain select-none">
                  {items.Desc}
                </p>

                <button class="card-button select-none self-start mt-auto p-2 rounded-md">
                  <span className="select-none">
                    <img className=" mr-1 h-6" src={Cart} />
                  </span>
                  Buy Now
                </button>
              </div>
            </a>
          ))}
        </div>
        <div></div>
      </section>
    </>
  );
}
