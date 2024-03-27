import React from "react";
import footerimage from "../assests/Screenshot_2024-03-15_151803-removebg-preview.png";

const Footer = () => {
  return (
    <>
      <div className="  bottom-0">
        <div className="font-sans text-white flex justify-around text-xs font-bold *:animate-pulse bg-black">
          <p>SHIPPING WORLDWIDE</p>
          <p>SHIPPING WORLDWIDE</p>
          <p>SHIPPING WORLDWIDE</p>
          <p>SHIPPING WORLDWIDE</p>
          <p>SHIPPING WORLDWIDE</p>
        </div>
      </div>
      <div className="flex justify-between  pt-20 items-center text-center">
        <div className="items-center flex flex-col gap-16 pb-10 px-14">
          <img src={footerimage} alt="" />
          <p className="text-xs">© 2024 BLUORNG, ALL RIGHTS RESERVED.</p>
        </div>
        <div className="flex gap-40 items-center pr-56 ">
          <div className="text-xs *:p-2">
            <p className="font-bold ">HELP</p>
            <p>MEMBERS LOGIN</p>
            <p>EXCHANGES/RETURNS</p>
            <p>FAQ</p>
            <p>TERMS</p>
            <p>SHIPPING</p>
          </div>
          <div className="text-xs *:p-2">
            <p className="font-bold">COMPANY</p>
            <p>STORY</p>
            <p>OUR STORES</p>
            <p>CAREERS</p>
            <p>CONTACT US</p>
          </div>
        </div>
      </div>
      <div className="bg-black ">
        <div className="flex text-white font-bold text-xs justify-between">
          <div>
            <p>CONNECT</p>
          </div>
          <p>INSTAGRAM</p>
          <p>YOUTUBE</p>
          <p>LINKEDIN</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
