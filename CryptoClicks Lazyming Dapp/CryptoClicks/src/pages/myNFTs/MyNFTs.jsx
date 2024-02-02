import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDB, toggle } from "/src/utils/firebase";
import Card from "/src/components/Card_MYNFTs";
import { signinWithGoogle, signOutt } from "/src/utils/firebase";
import loginImage from "/src/assets/icons/signOutt.png";
import signoutLogo from "/src/assets/icons/signOut.png";
import googleLogo from "/src/assets/icons/google_536453.png";
import sunflowerImage from "/src/assets/images/sunflower.webp";
import butterflyImage from "/src/assets/images/butterfly.webp";
//import { fetchNFTsDB } from "../../redux/actions/myNFTdataAction";

export default function MyNFTs() {
  const isLogout = useSelector((state) => state.auth.isLogout);
  const user = useSelector((state) => state.auth.user);
  const [data, setData] = useState([]);
  // const [inde, setInde] = useState(true);
  // const [check, setCheck] = useState(data[0].array[inde].isListed);
  // const myNFTsData = useSelector((state) => state.myNfts);
  // const dispatch = useDispatch();
  function refresh() {
    // Set a timeout of 2 seconds (2000 milliseconds)
    setTimeout(function () {
      // Reload the current web page
      window.location.reload();
    }, 2000);
  }
  // Use a useEffect hook to call the fetchDB function when the component mounts
  useEffect(() => {
    if (isLogout == false) {
      fetchDB(setData);
    }
  }, [isLogout]);
  console.log(data);
  function toggleList(index) {
    toggle(index);
    refresh();
  }
  return (
    <>
      {isLogout ? (
        <div
          id="loggedOutView"
          class=" flex items-center select-none justify-center h-screen w-screen  font-josefin  "
        >
          <div className="group grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3">
              <img
                className="group-hover:translate-x-1 h-loginn w-72 duration-700 rounded-md grayscale group-hover:grayscale-0 "
                src={sunflowerImage}
              />
            </div>

            <div className="row-span-2 col-span-2">
              <img
                className="group-hover:-translate-x-1 h-260 w-80 duration-700 rounded-md grayscale  group-hover:grayscale-0"
                src={butterflyImage}
              />
            </div>
            <div className="group-hover:-translate-x-1 col-span-2">
              <button
                onClick={() => signinWithGoogle()}
                className="group w-full inline-flex items-center justify-center  px-3 py-2 bg-white rounded-lg hover:bg-gray-50 duration-500 active:scale-90 active:text-white active:bg-gray-500 select-none"
              >
                <span className=" inline-flex self-center visible group-hover:invisible absolute duration-700 transition-transform group-hover:translate-y-11">
                  <span>
                    <img
                      className="h-8 duration-700 transition-transform group-hover:-translate-x-11"
                      src={loginImage}
                    />
                  </span>
                  <span className=" self-center mt-2 ml-3">
                    {" "}
                    Click for SignIn/SignUp
                  </span>
                </span>

                <span>
                  <img
                    className="mx-5 h-12 group-hover:translate-x-3 rounded-full invisible group-hover:visible transition-transform duration-1000"
                    src={googleLogo}
                  />
                </span>
                <span className=" select-none mb-6 mx-5 group-hover:-translate-x-4 group-hover:translate-y-3 duration-1000 invisible group-hover:visible transition-transform">
                  Continue with Google
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <section id="loggedInView " className="font-josefin ">
          <div className="w-full flex justify-between p-3  ">
            <button
              onClick={() => signOutt()}
              className="group ml-2 inline-flex border select-none  px-3 py-2 h-8 mt-4 rounded-lg bg-white border-black text-black active:scale-90 hover:scale-105 duration-700"
            >
              {" "}
              SignOut
              <span>
                {" "}
                <img
                  src={signoutLogo}
                  className=" h-6 ml-2 group-hover:translate-x-2 duration-500  "
                />
              </span>
            </button>
            <div className="p-2 hover:bg-white  flex rounded-lg hover:scale-105 duration-700 group ">
              {" "}
              <p className="group-hover:text-black duration-700 text-white select-none text-lg self-center ">
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
            {data?.length > 0 && // Check if the array is not empty
              data[0].array.map((item, index) => {
                return (
                  <>
                    <Card
                      index={index}
                      image={item.image}
                      price={item.amount}
                      listed={item.isListed}
                      onclick={toggleList}
                    />
                  </>
                );
              })}
          </div>
        </section>
      )}
    </>
  );
}
