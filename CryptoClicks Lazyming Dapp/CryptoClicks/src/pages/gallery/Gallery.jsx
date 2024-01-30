import React, { useState, useEffect } from "react";
import Card_Gallery from "/src/components/Card_Gallery";
import { fatchAllData } from "/src/utils/firebase";
import { useSelector } from "react-redux";

export default function Gallery() {
  const isLogout = useSelector((state) => state.auth.isLogout);
  const [data, setData] = useState([]);
  useEffect(() => {
    // if (isLogout == false) {
    fatchAllData(setData);
    //}
  }, []);

  return (
    <>
      <section>
        <h1 className="text-white text-center text-6xl font-josefin my-16 select-none">
          NFT gallery
        </h1>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mx-4 ">
          {data?.length > 0 && // Check if the array is not empty
            data.map((item, index) => {
              return (
                <Card_Gallery
                  index={index}
                  islisted={item.isListed}
                  image={item.imageURI}
                  price={item.amount}
                  name={item.name}
                  desc={item.description}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}
