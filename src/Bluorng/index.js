import React from "react";

import firstimage from "../assests/1.webp";
import secondimage from "../assests/2.webp";
import thirdimage from "../assests/3.webp";
import fourthimage from "../assests/4.webp";
import expression from "../assests/expression.jpg";
import d1 from "../assests/D1.webp";
import d2 from "../assests/D2.webp";
import d3 from "../assests/D3.webp";
import d4 from "../assests/D4.webp";
import b1 from "../assests/b1.webp";
import b2 from "../assests/b2.webp";
import b3 from "../assests/b3.webp";
import b4 from "../assests/b4.webp";

const Bluorng = () => {
  return (
    <>
      <div className="cursor-pointer pt-20 ">
        {/* <div className="bg-black text-white text-center *:text-xs fixed w-full ">
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
        </div> */}
        <div className="lg:hidden">
          <video controls={false} autoPlay muted loop>
            <source src="  https://cdn.shopify.com/videos/c/o/v/f2a4632c26694825a23f161bac33dc00.mp4" />
          </video>
        </div>
        <div>
          <div className="text-center ">SHOP ALL</div>
          <div className="flex justify-between lg:px-[1%] px-3 p-3 ">
            <p>LATEST DROP</p>
            <p className="bg-slate-100 w-fit">DISCOVER MORE</p>
          </div>
        </div>
        <div className="lg:flex grid grid-cols-2 px-[1%] gap-1 ">
          <div>
            <div className="overflow-hidden">
              <img
                src={firstimage}
                alt=""
                className=" transition-all duration-700 hover:scale-110"
              />
            </div>
            <p>DUTCH BLU GARLAND T-SHIRT</p>
            <p>RS. 4,495</p>
          </div>
          <div>
            <div className="overflow-hidden">
              <img
                src={secondimage}
                alt=""
                className=" transition-all duration-700 hover:scale-110"
              />
            </div>
            <p>GREEN DRAGONFLY T-SHIRT</p>
            <p>RS. 4,495</p>
          </div>
          <div>
            <div className="overflow-hidden">
              <img
                src={thirdimage}
                alt=""
                className=" transition-all duration-700 hover:scale-110"
              />
            </div>
            <p>BLIND DROP 7</p>
            <p>RS. 4,495</p>
          </div>
          <div>
            <div className="overflow-hidden">
              <img
                src={fourthimage}
                alt=""
                className=" transition-all duration-700 hover:scale-110"
              />
            </div>
            <p>BLIND DROP 7.2</p>
            <p>RS. 4,495</p>
          </div>
        </div>
        <button className="text-center border border-black  p-2 lg:ml-[45%] ml-[30%] m-4 hover:bg-black hover:text-white hover:rounded-full">
          DISCOVER MORE
        </button>
        <div className="p-5 overflow-hidden">
          <img src={expression} alt="" />
        </div>
        <div className="flex justify-between p-3">
          <p>MORE FROM BLUORNG</p>
          <p className="bg-slate-100 w-fit">DISCOVER MORE</p>
        </div>
        <div className="lg:flex grid grid-cols-2 gap-1 ">
          <div>
            <div className="overflow-hidden">
              <img
                src={d1}
                alt=""
                className=" transition-all duration-700 hover:scale-110"
              />
            </div>
            <p>DARK SHENRON T-SHIRT</p>
            <p>RS. 4,995</p>
          </div>
          <div>
            <div className="overflow-hidden">
              <img
                src={d2}
                alt=""
                className=" transition-all duration-700 hover:scale-110"
              />
            </div>
            <p>LILAC SNAKE T-SHIRT</p>
            <p>RS. 3,995</p>
          </div>
          <div>
            <div className="overflow-hidden">
              <img
                src={d3}
                alt=""
                className=" transition-all duration-700 hover:scale-110"
              />
            </div>
            <p>MUSTARD SHIZEN T-SHIRT</p>
            <p>RS. 3,995</p>
          </div>
          <div>
            <div className="overflow-hidden">
              <img
                src={d4}
                alt=""
                className=" transition-all duration-700 hover:scale-110"
              />
            </div>
            <p>BLU RACING T-SHIRT</p>
            <p>RS. 4,995</p>
          </div>
        </div>
        <div className=" lg:flex grid grid-cols-2 gap-1">
          <div>
            <div className="overflow-hidden">
              <img
                src={b1}
                alt=""
                className=" transition-all duration-700 hover:scale-110"
              />
            </div>
            <p>BLACK AFFECTION T-SHIRT</p>
            <p>RS. 4,495</p>
          </div>

          <div>
            <div className="overflow-hidden">
              <img
                src={b2}
                alt=""
                className=" transition-all duration-700 hover:scale-110 "
              />
            </div>
            <p>DUTCH BLU GARLAND T-SHIRT</p>
            <p>RS. 4,495</p>
          </div>

          <div>
            <div className="overflow-hidden">
              <img
                src={b3}
                alt=""
                className=" transition-all duration-700 hover:scale-110"
              />
            </div>
            <p>RED AFFECTION T-SHIRT</p>
            <p>RS. 4,495</p>
          </div>
          <div>
            <div className="overflow-hidden">
              <img
                src={b4}
                alt=""
                className=" transition-all duration-700 hover:scale-110"
              />
            </div>
            <p>BLIND DROP 7.2</p>
            <p>RS. 4,495</p>
          </div>
        </div>
        <button className=" text-center border border-black p-2  w-fit lg:ml-[45%] ml-[30%] m-4 hover:bg-black hover:text-white hover:rounded-full text-xs font-sans">
          DISCOVER MORE
        </button>
        <div className="flex max-lg:overflow-scroll gap-2 px-[3%] p-5">
          <div className="w-[33%]">
            <video autoPlay controls={false} muted loop>
              <source src="https://cdn.shopify.com/videos/c/o/v/cd5529a970f5492fb7c37efb012e98d5.mp4" />
            </video>
          </div>
          <div className="w-[33%]">
            <video autoPlay controls={false} muted loop>
              <source src="https://cdn.shopify.com/videos/c/o/v/803365b8a7834c88990167877b2984e8.mp4" />
            </video>
          </div>
          <div className="w-[33%]">
            <video autoPlay controls={false} muted loop>
              <source src="https://cdn.shopify.com/videos/c/o/v/085c1562ae6c41899dc03a26bf916065.mp4" />
            </video>
          </div>
        </div>
        {/* <div className="bg-black">
          <div className="font-sans text-white flex justify-around text-xs font-bold">
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
        </div> */}
      </div>
    </>
  );
};

export default Bluorng;
