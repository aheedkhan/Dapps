import Create from "./pages/create/Create";
import Footer from "./components/Footer";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
//import Nav from "./components/Nav";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import MyNFTs from "./pages/myNFTs/MyNFTs";
import About from "./pages/about/About";
//import NotFound from "./pages/not_found/NotFound";
import Web3 from "web3";
import Constants from "/src/components/Constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "/src/utils/constants";
import Logo from "/src/assets/logos/crypto_clicks_logo.webp";

export default function App() {
  const [web3Config, setWeb3Config] = useState(null);
  const isLogout = useSelector((state) => state.auth.isLogout);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [onSepoliaChain, setOnSepoliaChain] = useState(null);
  const navigate = useNavigate();

  const connectWeb3 = async () => {
    try {
      // Define the chain ID of sepoliachain
      const sepoliaChainID = 11155111n;

      // Get the web3 provider from window.ethereum
      const provider = window.ethereum;

      // Check if the provider is available
      if (provider) {
        // Create a web3 instance with the provider
        const web3 = new Web3(provider);

        // Request the user to enable the web3 provider
        await provider.request({ method: "eth_requestAccounts" });

        // Get the user's account
        let account = await web3.eth.getAccounts();
        account = account[0];

        // Log the user's account
        console.log(`Selected account is ${account}`);
        let acc = window.ethereum.selectedAddress;
        setSelectedAddress(acc);
        // Create a contract instance
        const lazyMintContract = new web3.eth.Contract(
          Constants.lazyMintABI,
          Constants.lazyMintContract
        );

        // Set the web3 config

        // Get the chain ID of the current provider
        const chainID = await web3.eth.getChainId();
        //Compare the chain ID with the sepolia chain ID
        if (chainID == sepoliaChainID) {
          // Alert the user that they are not on sepoliachain
          setOnSepoliaChain(true);
        }

        setWeb3Config({
          web3,
          account,
          lazyMintContract,
        });

        console.log(web3Config);
        // Listen for network changes
        window.ethereum.on("chainChanged", async (chainId) => {
          // Compare the new chain ID with the sepolia chain ID
          if (chainId !== sepoliaChainID) {
            // Alert the user that they are not on sepoliachain
            setOnSepoliaChain(false);
          }
        });
      } else {
        // Alert the user that the web3 provider is not found
        alert("Web3 Provider not found ,Please Install Metamask or any Other!");
      }
    } catch (error) {
      // Log the error
      console.error(error);
    }
  };
  useEffect(() => {
    // Check if the web3 provider is available
    if (window.ethereum) {
      // Get the current account selected by the user
      let acc = window.ethereum.selectedAddress;

      // Set the selected address state
      setSelectedAddress(acc);
    }
  }, []);

  useEffect(() => {
    // Check if the web3 provider is available
    if (window.ethereum) {
      // Listen for account changes
      window.ethereum.on("accountsChanged", (accounts) => {
        // Update the selected address state
        setSelectedAddress(accounts[0]);
      });
    }
  }, [selectedAddress]);
  useEffect(() => {
    const sepoliaChainID = 11155111n;

    window.ethereum.on("chainChanged", async (chainId) => {
      // Compare the new chain ID with the sepolia chain ID
      if (chainId == sepoliaChainID) {
        // Alert the user that they are not on sepoliachain
        setOnSepoliaChain(true);
      } else {
        setOnSepoliaChain(false);
      }
    });
  }, [onSepoliaChain, selectedAddress]);

  return (
    <>
      {" "}
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
          </div>
          <div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ">
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
            {!isLogout ? (
              <button onClick={connectWeb3}>
                {!selectedAddress ? (
                  <a
                    href="javascript:void(0)"
                    className="py-3 px-4 text-white  bg-green-700 active:bg-green-800  rounded-md shadow"
                  >
                    Connect Wallet
                  </a>
                ) : !onSepoliaChain ? (
                  <a
                    href="javascript:void(0)"
                    className="py-3 px-4 text-white  bg-red-700 active:bg-green-800  rounded-md shadow"
                  >
                    Connect to Sepolia Chain
                  </a>
                ) : (
                  <a
                    href="javascript:void(0)"
                    className="py-3 px-4 text-white  bg-green-700 active:bg-green-800  rounded-md shadow"
                  >
                    Wallet Connected
                  </a>
                )}
              </button>
            ) : (
              <button
                className="py-3 px-4 text-white bg-yellow-400 active:bg-yellow-900 hover:bg-yellow-500 rounded-md shadow"
                onClick={() => {
                  navigate(ROUTE.MYNFTS);
                }}
              >
                SignIn/SignUp
              </button>
            )}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route
          path={ROUTE.CREATE}
          element={
            <Create web3Config={web3Config} nullweb3confing={connectWeb3} />
          }
        />
        <Route
          path={ROUTE.GALLERY}
          element={<Gallery web3Config={web3Config} />}
        />
        <Route path={ROUTE.MYNFTS} element={<MyNFTs />} />
        <Route path={ROUTE.ABOUT} element={<About />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />,
    </>
  );
}
