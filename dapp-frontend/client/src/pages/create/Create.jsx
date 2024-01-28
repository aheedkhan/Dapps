import React, { useState, useEffect } from "react";
import Modal from "react-modal";

// set the root element of your app
Modal.setAppElement("#root");
import "/src/init";
import axios from "axios";
import { addMetaDataToDB } from "../../utils/firebase";

export default function Create() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageHash, setImageHash] = useState(null);
  const [metadataHash, setMetadataHash] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); // state for modal

  function retirveData(newLink) {
    const ipfsLink = `https://salmon-main-antlion-827.mypinata.cloud/ipfs/${newLink}`;
    fetch(ipfsLink)
      .then((response) => {
        // Check if the response is ok
        if (!response.ok) {
          // Throw an error if the response is not ok
          throw new Error(response.statusText);
        }
        // Return the response as a JSON object
        return response.json();
      })
      .then((data) => {
        // Store the JSON object in a variable
        const jsonObject = data;
        const inde = jsonObject.imageURI.lastIndexOf("/");
        const imagehash = jsonObject.imageURI.substring(inde + 1);

        // Use the JSON object for your project
        // For example, console.log it
        const index = ipfsLink.lastIndexOf("/");
        const metahash = ipfsLink.substring(index + 1);

        addMetaDataToDB(jsonObject, metahash, imagehash);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }
  const sendFileToIPFS = async (e) => {
    if (file) {
      try {
        // create a new form data object
        const formData = new FormData();
        // append the file to the form data
        formData.append("file", file);

        // upload the file to IPFS using the Pinata SDK
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `${import.meta.env.VITE_APP_PINATA_API_KEY}`,
            pinata_secret_api_key: `${
              import.meta.env.VITE_APP_PINATA_API_SECRET
            }`,
            "Content-Type": "multipart/form-data",
          },
        });

        // get the IPFS hash of the file from the response
        const ipfsHash = resFile.data.IpfsHash;

        // set the image hash state
        setImageHash(ipfsHash);
        console.log(imageHash);

        // create a metadata object with the required fields
        const metadata = {
          name: title,
          description: description,
          amount: amount,
          category: category,
          imageURI: `https://salmon-main-antlion-827.mypinata.cloud/ipfs/${ipfsHash}`,
        };

        // upload the metadata as a JSON file to IPFS using the Pinata SDK
        const resMeta = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
          data: metadata,
          headers: {
            pinata_api_key: `${import.meta.env.VITE_APP_PINATA_API_KEY}`,
            pinata_secret_api_key: `${
              import.meta.env.VITE_APP_PINATA_API_SECRET
            }`,
            "Content-Type": "application/json",
          },
        });

        // get the IPFS hash of the metadata from the response
        const metadataHash = resMeta.data.IpfsHash;

        // set the metadata hash state
        setMetadataHash(metadataHash);

        retirveData(metadataHash);
        console.log(metadataHash);

        //Take a look at your Pinata Pinned section, you will see a new file and a new JSON added to your list.
      } catch (error) {
        console.log("Error sending File and Metadata to IPFS: ");
        console.log(error);
      }
    }
  };
  const showImage = (e) => {
    setFile(e.target.files[0]);
    if (e.target.files.length != 0) {
      setImageURL(URL.createObjectURL(e.target.files[0]));
    }
  };
  // call the upload function and wait for it to finish

  async function handleSubmit(e) {
    e.preventDefault();

    if (!file || description.length <= 120) {
      setModalIsOpen(true);
      return;
    }
    alert("Please wait a while we are uploading your data!");
    await sendFileToIPFS()
      .then(() => {
        // reset the file state and the other states
        setFile(null);
        setTitle("");
        setAmount("");
        setCategory("");
        setDescription("");

        console.log("Data Submitted");
      })
      .catch((error) => {
        // handle any errors
        console.error(error);
      });
  }

  useEffect(() => {
    console.log(
      `Successful upload! your image hash for NFT is ${imageHash} and metadata hash for NFT is ${metadataHash} `
    );
  }, [file]);

  function closeModal() {
    // close the modal
    setModalIsOpen(false);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Assume you have an IPFS gateway link like this

  // Use fetch to get the response from the IPFS gateway link

  return (
    <section className="">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 px-12 mb-20 mt-10 font-josefin">
          <div className=" select-none max-w-md  h-96 rounded-lg border-2 border-dashed flex items-center justify-center mt-8 my-4 hover:border-[#20c997] hover:scale-105 duration-300 ">
            {!file ? (
              <label
                htmlFor="file"
                className="cursor-pointer text-center p-4 md:p-8 "
              >
                <svg
                  className="w-10 h-10 mx-auto"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667"
                    stroke="#20c997"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="mt-3 text-green-700 max-w-xs mx-auto">
                  Click to{" "}
                  <span className="font-medium text-green-700">
                    Upload your file
                  </span>{" "}
                  or drag and drop your file here
                </p>
                <input
                  //required
                  id="file"
                  type="file"
                  accept="image/*"
                  onChange={showImage}
                  className="hidden caret-green-700"
                />
              </label>
            ) : (
              <img className="h-60 w-60 " src={imageURL} />
            )}
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-2">
              <div>
                <label className="text-white font-medium">NFT Title</label>
                <div className="relative mt-2 max-w-xs text-white">
                  <input
                    required
                    type="text"
                    value={title} // Set the value to the name state
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title of your NFT"
                    className="hover:scale-105 duration-300  caret-green-700 w-full pl-4 pr-16 py-2 appearance-none bg-transparent border-white outline-none border focus:border-green-700 shadow-sm rounded-lg hover:border-green-700"
                  />
                </div>
              </div>
              {/*option */}
              <div className="relative w-60 bottom-15 max-w-full mx-auto mt-12 hover:scale-105 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-5 h-5 my-auto text-green-700 right-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <select
                  required
                  value={category} // Set the value to the category state
                  onChange={(e) => setCategory(e.target.value)}
                  className=" w-full px-3 py-2 text-sm text-white bg-transparent border border-white rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-green700 focus:ring-2 font-medium "
                >
                  <option className="text-green-700 ">
                    Choose Your Category
                  </option>
                  <option className="text-green-700  ">Nature</option>
                  <option className="text-green-700 ">Architecure</option>
                  <option className="text-green-700 ">Culture</option>
                  <option className="text-green-700 ">Travel</option>
                  <option className="text-green-700 ">Sports</option>
                  <option className="text-green-700 ">Wildlife</option>
                  <option className="text-green-700 ">Fashion</option>
                  <option className="text-green-700 ">Automobiles</option>
                  <option className="text-green-700 ">Life Style</option>
                  <option className="text-green-700 ">Long Exposure</option>
                  <option className="text-green-700 ">Pets</option>
                  <option className="text-green-700 ">Creativity</option>
                </select>
              </div>
            </div>
            {/* descriptiion */}
            <div className="mt-4">
              <label className="font-medium text-white">Description</label>
              <textarea
                required
                maxLength="200"
                value={description} // Set the value to the description state
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tell everyone about your nft and how cool it is!!!"
                className="hover:scale-105 duration-300  w-full caret-green-700 text-white mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-green-700 shadow-sm rounded-lg"
              ></textarea>
            </div>

            <div className="grid grid-cols-2 mt-2">
              {/* amount */}
              <div className="w-30 mt-999">
                <label className="text-white font-medium">Amount</label>
                <div className="relative mt-2 max-w-xs text-green-700 hover:scale-105 duration-300 ">
                  <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                    ⟠
                  </span>
                  <input
                    required
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    min="0.00"
                    value={amount} // Set the value to the description state
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-green-700 shadow-sm rounded-lg"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    Eth
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="hover:scale-105 duration-300  w-40 h-12 mt-8 lg:ml-20 bg-transparent cursor-pointer border-2 border-[#fff] shadow-[inset_0px_-2px_0px_1px_#fff] group hover:bg-green-700 transition ease-in-out active:scale-95"
              >
                <span class="font-medium text-[#fff] group-hover:text-white">
                  Create
                </span>
              </button>
            </div>
            {/* 
      /////////////////////////button////////////////////// */}
          </div>
        </div>
      </form>
      {/* add the modal component here */}
      <Modal
        // add tailwind classes here
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            margin: "auto",
            width: "40%",
            height: "30%",
            textAlign: "center",
            padding: 0,
          },
        }}
      >
        <div className="group bg-green-700 w-full h-full p-6 font-josefin select-none border border-spacing-7 hover:border-red-500">
          {" "}
          <h2 className=" flex flex-col mb-2 font-bold group-hover:text-red-500 group-hover:scale-105 duration-700">
            Error
          </h2>
          <p className=" duration-700 group-hover:scale-95 ">
            {description.length <= 100
              ? `Add more to description current descrption isnt enough, must be atleast 2 lines`
              : `Please Upload Image for NFT.`}
          </p>
          <button
            className="border border-black px-3 py-2 hover:bg-black hover:text-white duration-500 hover:scale-105 active:scale-90 rounded-md mt-5"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
}
//import pinataSDK from "@pinata/sdk";

// const pinata = pinataSDK(
//   import.meta.env.VITE_APP_PINATA_API_KEY,
//   import.meta.env.VITE_APP_PINATA_API_SECRET
// );

//   // upload the file and the metadata to IPFS using the Pinata SDK
//   async function uploadToIPFS() {
//     if (file) {
//       try {
//         // upload the file to IPFS using the Pinata SDK
//         const response = await pinata.pinFileToIPFS(file);

//         // get the IPFS hash of the file from the response
//         const ipfsHash = response.IpfsHash;

//         // set the image hash state
//         setImageHash(ipfsHash);

//         // upload the metadata as a JSON file to IPFS using the Pinata SDK
//         const metadata = {
//           name: title,
//           description: description,
//           amount: amount,
//           category: category,
//           imageURI: `https://salmon-main-antlion-827.mypinata.cloud/ipfs/${ipfsHash}`,
//         };
//         const res = await pinata.pinJSONToIPFS(metadata);

//         // get the IPFS hash of the metadata from the response
//         const metadataHash = res.IpfsHash;

//         // set the metadata hash state
//         setMetadataHash(metadataHash);
//       } catch (error) {
//         // handle any errors
//         console.error(error);
//       }
//     }
//   }

//   // call the upload function and wait for it to finish
//   await uploadToIPFS()
//     .then(() => {
//       // reset the file state and the other states
//       setFile(null);
//       setTitle("");
//       setAmount("");
//       setCategory("");
//       setDescription("");
//     })
//     .catch((error) => {
//       // handle any errors
//       console.error(error);
//     });
