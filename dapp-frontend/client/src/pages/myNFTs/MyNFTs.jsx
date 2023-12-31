import React from "react";
import Card from "/src/components/Card_MYNFTs";
import { myNFTsData } from "/src/Data";
import Image from "/src/assets/images/sunflower.jpg";
import { app, auth, db, storage, signinWithGoogle } from "/src/utils/firebase";
import { useSelector } from "react-redux";

export default function MyNFTs() {
  const isLogout = useSelector((state) => state.auth.isLogout);
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      {isLogout ? (
        <div
          id="loggedOutView"
          class=" flex items-center justify-center h-screen w-screen bg-white font-josefin  "
        >
          <div className="flex flex-row">
            <img src={Image} className="h-40 w-40" />

            <button
              onClick={() => signinWithGoogle()}
              className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                ...
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      ) : (
        <section id="loggedInView " className="font-josefin ">
          <div className="w-full flex justify-between p-3 ">
            <button className="text-white"> SignOut </button>
            <div className="p-2 hover:bg-white  flex rounded-lg hover:scale-105 duration-700 group ">
              {" "}
              <p className="group-hover:text-black duration-700 text-white select-none text-lg self-center">
                {user ? user.name : "Loading..."}
              </p>{" "}
              <img
                className=" rounded-full h-12 self-center ml-3 hover:animate-spin"
                src={user.photoURL}
              />
            </div>
          </div>
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
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
