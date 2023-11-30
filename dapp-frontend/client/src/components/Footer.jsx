import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white text-center py-8 border-t border-double border-t-green-700 select-none">
      © {year} All rights reserved |{" "}
      <span className="bg-green-600">CryptoClick</span>{" "}
      <span className="text-red-500">❤️</span>
    </footer>
  );
};

export default Footer;
