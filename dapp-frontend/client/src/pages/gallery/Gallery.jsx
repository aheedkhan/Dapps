import React from "react";
import Card_Gallery from "/src/components/Card_Gallery";
import { myNFTsData } from "/src/Data";

export default function Gallery() {
  return (
    <>
      <section>
        <h1 className="text-white text-center text-6xl font-josefin my-16 select-none">
          Portrait gallery
        </h1>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mx-4 ">
          {myNFTsData.map((data, key) => {
            return (
              <Card_Gallery
                image={data.img}
                price={data.price}
                name={data.Name}
                desc={data.Desc}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
