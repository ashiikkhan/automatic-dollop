import React from "react";

const Footer = () => {
  return (
    <div className="p-4 text-white " style={{ backgroundColor: "#2D3748" }}>
      <div className="container d-sm-flex justify-content-between ">
        <p>
          © 2016 - 2023 Auth Lab - some geeks and nerds who forgot to sleep last
          night
        </p>
        <a href="#" className="text-white text-decoration-none">
          <p>24/A Shah Farid Road, Jalalabad R/A, Sylhet</p>
        </a>
      </div>
      <div className="container d-sm-flex justify-content-center p-2 text-center">
        <a href="#" className="text-secondary text-decoration-none pe-4">
          <p>Privacy Policy</p>
        </a>
        <a href="#" className="text-secondary text-decoration-none ps-4">
          <p>Terms and Conditions</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
