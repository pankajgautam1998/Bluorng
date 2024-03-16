import React from "react";
import bluorng from "../assests/Screenshot 2024-03-15 121027.png";

const Header = () => {
  return (
    <div>
      <div className="bg-black text-white text-center *:text-xs fixed w-full ">
        <p className="">BLUORNG</p>
        <p>EXTENSION OF YOUR EXPRESSION</p>
      </div>

      <div className="flex justify-between px-[3%] pt-5 items-center text-center">
        <div className=" text-center items-center">
          <img src={bluorng} alt="" />
        </div>
        <div className="flex gap-10 ">
          <p>NEW IN</p>
          <p>APPAREL</p>
          <p>STORES</p>
        </div>
        <div className="flex gap-10 items-center">
          <p>SEARCH</p>
          <p>LOGIN</p>
          <p>
            <img
              className="h-24"
              src="https://cdn.shopify.com/s/files/1/0566/7192/8425/files/BO_GIF.gif?v=1704694751"
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
