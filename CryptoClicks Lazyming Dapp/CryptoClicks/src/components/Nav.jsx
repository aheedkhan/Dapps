// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ROUTE } from "../utils/constants";
// import Logo from "/src/assets/logos/crypto_clicks_logo.webp";

// import { useSelector } from "react-redux";

// export default (props) => {
//   const isLogout = useSelector((state) => state.auth.isLogout);

//   const navigate = useNavigate();
//   return (
//     <nav className="bg-black w-full border-b md:border-0 md:static font-josefin select-none">
//       <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:py-2">
//         <div className="flex items-center py-1 justify-between  md:py-3 md:block">
//           <img
//             onClick={() => {
//               navigate(ROUTE.ABOUT);
//             }}
//             className=" sm:w-1/2 sm:h-32 md:h-16 md:w-full lg:h-16 lg:w-full "
//             src={Logo}
//           />
//         </div>
//         <div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ">
//           <ul className="justify-center items-center  md:flex  md:space-y-0">
//             <li
//               onClick={() => {
//                 navigate(ROUTE.HOME);
//               }}
//               className="text-gray-600 active:scale-90 text-lg hover:text-green-700 hover:cursor-pointer"
//             >
//               Home
//             </li>

//             <li
//               onClick={() => {
//                 navigate(ROUTE.CREATE);
//               }}
//               className="text-gray-600 ml-10 active:scale-90 text-lg hover:text-green-700 hover:cursor-pointer"
//             >
//               Create
//             </li>
//             <li
//               onClick={() => {
//                 navigate(ROUTE.MYNFTS);
//               }}
//               className="text-gray-600 ml-10 active:scale-90 text-lg hover:text-green-700 hover:cursor-pointer"
//             >
//               MyNfts
//             </li>
//             {/* <li className="text-gray-600 ml-10 text-lg hover:text-green-700">
//              Account
//             </li> */}
//           </ul>
//         </div>
//         <div className="hidden md:inline-block active:scale-90 duration-700">
//           {!isLogout ? (
//             <button onClick={props.walletConnect}>
//               <a
//                 href="javascript:void(0)"
//                 className="py-3 px-4 text-white bg-green-700 active:bg-green-800  rounded-md shadow"
//               >
//                 Connect Wallet
//               </a>
//             </button>
//           ) : (
//             <button
//               className="py-3 px-4 text-white bg-red-600 active:bg-red-900 hover:bg-red-500 rounded-md shadow"
//               onClick={() => {
//                 navigate(ROUTE.MYNFTS);
//               }}
//             >
//               SignIn/SignUp
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };
