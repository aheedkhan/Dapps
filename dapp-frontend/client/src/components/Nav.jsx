import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../utils/constants";
import Logo from "/src/assets/logos/crypto_clicks_logo.png";
export default () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-black w-full border-b md:border-0 md:static font-josefin select-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:py-2">
        <div className="flex items-center py-1 justify-between  md:py-3 md:block">
          <img
            onClick={() => {
              navigate(ROUTE.ABOUT);
            }}
            className=" sm:w-1/2 sm:h-32 md:h-16 md:w-full lg:h-16 lg:w-full "
            src={Logo}
          />
          <div className="md:hidden">
            <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border">
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center  md:flex  md:space-y-0">
            <li
              onClick={() => {
                navigate(ROUTE.HOME);
              }}
              className="text-gray-600 active:scale-90 text-lg hover:text-green-700 hover:cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() => {
                navigate(ROUTE.CREATE);
              }}
              className="text-gray-600 ml-10 active:scale-90 text-lg hover:text-green-700 hover:cursor-pointer"
            >
              Create
            </li>
            <li
              onClick={() => {
                navigate(ROUTE.MYNFTS);
              }}
              className="text-gray-600 ml-10 active:scale-90 text-lg hover:text-green-700 hover:cursor-pointer"
            >
              MyNfts
            </li>
            {/* <li className="text-gray-600 ml-10 text-lg hover:text-green-700">
             Account
            </li> */}
          </ul>
        </div>
        <div className="hidden md:inline-block active:scale-90 duration-700">
          <a
            href="javascript:void(0)"
            className="py-3 px-4 text-white bg-green-700 active:bg-green-800  rounded-md shadow"
          >
            Connect Wallet
          </a>
        </div>
      </div>
    </nav>
  );
};
