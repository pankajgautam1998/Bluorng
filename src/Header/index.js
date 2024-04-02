import React from "react";
import bluorng from "../assests/Screenshot_2024-03-22_101716-removebg-preview.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="w-full bg-white z-50 sticky top-0 max-lg:hidden">
        <div className="bg-black text-white text-center *:text-xs *:animate-bounce ">
          <p className="">BLUORNG</p>
          <p>EXTENSION OF YOUR EXPRESSION</p>
        </div>

        <div className="flex justify-between px-[3%] pt-5 items-center text-center">
          <div className=" text-center items-center">
            <Link to={"/"}>
              <img src={bluorng} alt="" />
            </Link>
          </div>
          <div className="flex gap-5 items-center pr-[20rem]">
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
                  <Link
                    target=" _blank"
                    to={
                      "https://www.google.com/maps/place/%E0%A4%AC%E0%A5%8D%E0%A4%B2%E0%A5%81%E0%A4%93%E0%A4%B0%E0%A4%82%E0%A4%97/@19.0686574,72.8330452,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c95d987918c7:0x184414d17241aaf7!8m2!3d19.0686574!4d72.8330452!16s%2Fg%2F11tmn465z6?entry=ttu"
                    }
                  >
                    <p>DELHI</p>
                  </Link>
                </div>
                <div className="cursor-pointer hover:bg-slate-50 hover:text-gray-300">
                  <Link
                    target=" _blank"
                    to={
                      "https://www.google.com/maps/place/%E0%A4%AC%E0%A5%8D%E0%A4%B2%E0%A5%81%E0%A4%93%E0%A4%B0%E0%A4%82%E0%A4%97/@19.0686574,72.8330452,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c95d987918c7:0x184414d17241aaf7!8m2!3d19.0686574!4d72.8330452!16s%2Fg%2F11tmn465z6?entry=ttu"
                    }
                  >
                    <p>MUMBAI</p>
                  </Link>
                </div>
                <div className="cursor-pointer hover:bg-slate-50 hover:text-gray-300">
                  <Link
                    target=" _blank"
                    to={
                      "https://www.google.com/maps/place/%E0%A4%AC%E0%A5%8D%E0%A4%B2%E0%A5%81%E0%A4%93%E0%A4%B0%E0%A4%82%E0%A4%97/@17.4210097,78.4429348,15z/data=!4m6!3m5!1s0x3bcb9718bd42dff9:0x7e93ffa3aeab2512!8m2!3d17.4210097!4d78.4429348!16s%2Fg%2F11vjmq91q_?entry=ttu"
                    }
                  >
                    <p>HYDERABAD</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <p>SEARCH</p>
            <Link to={"/memberslogin"}>
              <p>LOGIN</p>
            </Link>

            <p>
              <img
                className="h-24"
                src="https://cdn.shopify.com/s/files/1/0566/7192/8425/files/BO_GIF.gif?v=1704694751"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>{" "}
      {pathname !== "/" && (
        <div className="flex sticky top-[148px] z-40 bg-white gap-5 border border-black p-2  justify-between px-10 items-center pr-[25rem] cursor-pointer text-xs font-sans ">
          <div>
            <Link to={"/viewall"}>
              <p className="underline">VIEW ALL</p>
            </Link>
          </div>
          <div className="flex gap-12">
            <Link to={"/tshirt"}>
              <p>T-SHIRTS</p>
            </Link>
            <Link to={"/shirt"}>
              <p>SHIRTS</p>
            </Link>
            <Link to={"/hoodies"}>
              <p>HOODIES</p>
            </Link>
            <Link to={"/sweatshirts"}>
              <p>SWEATSHIRTS</p>
            </Link>
            <Link to={"/cargos"}>
              <p>CARGOS</p>
            </Link>
            <Link to={"/jeans"}>
              <p>JEANS</p>
            </Link>
            <Link to={"/shorts"}>
              <p>SHORTS</p>
            </Link>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center px-4 lg:hidden">
        <p>Menu</p>
        <Link to={"/"}>
          <img src={bluorng} alt="" />
        </Link>
        <img
          className="h-24"
          src="https://cdn.shopify.com/s/files/1/0566/7192/8425/files/BO_GIF.gif?v=1704694751"
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
