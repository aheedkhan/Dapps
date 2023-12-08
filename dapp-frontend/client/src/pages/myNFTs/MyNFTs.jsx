import React from "react";
import { myNFTsData } from "/src/Data";
import Card from "/src/components/Card_MYNFTs";

export default function MyNFTs() {
  return (
    <section>
      <h1 className="text-white text-center text-6xl font-josefin my-10 select-none">
        My NFTs
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {myNFTsData.map((data, key) => {
          return (
            <Card
              image={data.img}
              price={data.price}
              listed={data.islisted}
              key={key}
            />
          );
        })}
      </div>
    </section>
  );
}
