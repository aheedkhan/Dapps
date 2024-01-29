import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../utils/constants";

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-white text-center py-8 border-t border-double border-t-green-700 select-none">
      © {year} All rights reserved |{" "}
      <span
        onClick={() => {
          navigate(ROUTE.ABOUT);
        }}
        className="bg-green-600 cursor-pointer"
      >
        CryptoClick
      </span>{" "}
      <span className="text-red-500">❤️</span>
    </footer>
  );
};

export default Footer;
