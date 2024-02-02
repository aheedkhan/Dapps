import React, { useState, useEffect } from "react";
import Card_Gallery from "/src/components/Card_Gallery";
import { fatchAllData } from "/src/utils/firebase";
import { useSelector } from "react-redux";
import { toWei } from "web3-utils";
import Big from "big.js";
export default function Gallery({ web3Config }) {
  const isLogout = useSelector((state) => state.auth.isLogout);
  const [data, setData] = useState([]);

  useEffect(() => {
    fatchAllData(setData);
  }, []);
  const transferFunction = async (fromAccount, to, tokenId, price) => {
    try {
      console.log(web3Config);
      console.log(to);
      console.log(fromAccount);

      const priceInWei = Big(toWei(price, `ether`));
      console.log(priceInWei.toNumber());
      const receipt = await web3Config.lazyMintContract.methods
        .transferFromU(fromAccount, to, tokenId, priceInWei.toNumber()) // convert the Big object to a number
        .send({
          from: web3Config.account,
          gas: 3000000,
          value: priceInWei.toNumber(),
        });
      //  call the transferFromU function from the contract

      console.log(receipt);
      alert("Transfer successful");
    } catch (error) {
      // handle the error
      console.error(error);
      alert("Error from metamask wallet, network busy");
    }
  };

  return (
    <>
      <section>
        <h1 className="text-white text-center text-6xl font-josefin my-16 select-none">
          NFT gallery
        </h1>
        {!web3Config ? (
          <div className="bg-yellow-300 ">
            <h3 className=" text-4xl text-center ">
              Please SignIn and Connect Wallet{" "}
            </h3>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mx-4 ">
            {data?.length > 0 && // Check if the array is not empty
              data.map((item, index) => {
                return (
                  <Card_Gallery
                    index={index}
                    islisted={item.isListed}
                    image={item.image}
                    price={item.amount}
                    name={item.name}
                    desc={item.description}
                    web3Config={web3Config}
                    tokenId={item.tokenId}
                    from={item.fromAccount}
                    to={window.ethereum.selectedAddress}
                    transferFunction={transferFunction}
                  />
                );
              })}
          </div>
        )}
      </section>
    </>
  );
}
