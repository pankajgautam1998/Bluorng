import React from "react";
import bluorng from "../assests/Screenshot 2024-03-15 121027.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-white z-50 sticky top-0">
      <div className="bg-black text-white text-center *:text-xs *:animate-bounce">
        <p className="">BLUORNG</p>
        <p>EXTENSION OF YOUR EXPRESSION</p>
      </div>

      <div className="flex justify-between px-[3%] pt-5 items-center text-center">
        <div className=" text-center items-center">
          <img src={bluorng} alt="" />
        </div>
        <div className="flex gap-5 items-center">
          <Link to={"/newin"}>
            <div className="hover:text-gray-300 cursor-pointer">NEW IN</div>
          </Link>
          <div className="flex flex-col relative py-5 group">
            <div className="cursor-pointer hover:text-gray-300">APPAREL</div>
            <div className="absolute top-16 text-left z-50 p-4 *:p-2 !text-xs  !text-black border shadow bg-white hidden group-hover:block">
              <Link to={"/tshirt"}>
                <div className="cursor-pointer hover:bg-slate-50 hover:rounded-xl hover:text-gray-300 ">
                  <p>T-SHIRTS</p>
                </div>
              </Link>
              <Link to={"/shirt"}>
                <div className="cursor-pointer hover:bg-slate-50 hover:rounded-xl  hover:text-gray-300">
                  <p>SHIRTS</p>
                </div>
              </Link>
              <Link to={"/hoodies"}>
                <div className="cursor-pointer hover:bg-slate-50 hover:rounded-xl hover:text-gray-300">
                  <p>HOODIES</p>
                </div>
              </Link>
              <Link to={"/sweatshirts"}>
                <div className="cursor-pointer hover:bg-slate-50 hover:rounded-xl hover:text-gray-300">
                  <p>SWEATSHIRTS</p>
                </div>
              </Link>
              <Link to={"/cargos"}>
                <div className="cursor-pointer hover:bg-slate-50 hover:rounded-xl hover:text-gray-300">
                  <p>CARGOS</p>
                </div>
              </Link>
              <Link to={"/jeans"}>
                <div className="cursor-pointer hover:bg-slate-50 hover:rounded-xl hover:text-gray-300">
                  <p>JEANS</p>
                </div>
              </Link>
              <Link to={"/shorts"}>
                <div className="cursor-pointer hover:bg-slate-50 hover:rounded-xl hover:text-gray-300">
                  <p>SHORTS</p>
                </div>
              </Link>
            </div>
          </div>
          <div className=" flex flex-col relative group cursor-pointer py-5">
            <div className="cursor-pointer hover:text-gray-300">STORES</div>
            <div className="absolute top-16 bg-white text-xs *:p-2 text-black shadow hidden  z-50 group-hover:block border">
              <div className="cursor-pointer hover:bg-slate-50 hover:text-gray-300">
                <p>DELHI</p>
              </div>
              <div className="cursor-pointer hover:bg-slate-50 hover:text-gray-300">
                <p>MUMBAI</p>
              </div>
              <div className="cursor-pointer hover:bg-slate-50 hover:text-gray-300">
                <p>HYDERABAD</p>
              </div>
            </div>
          </div>
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
