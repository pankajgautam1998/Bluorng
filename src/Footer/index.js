import React from "react";
import footerimage from "../assests/Screenshot_2024-03-15_151803-removebg-preview.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Footer = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="slider-container  bg-black text-white pb-3">
        <Slider {...settings}>
          <div>
            <h3 className="max-lg:text-xs pt-2">SHIPPING WORLDWIDE</h3>
          </div>
          <div>
            <h3 className="max-lg:text-xs pt-2">SHIPPING WORLDWIDE</h3>
          </div>
          <div>
            <h3 className="max-lg:text-xs pt-2">SHIPPING WORLDWIDE</h3>
          </div>
          <div>
            <h3 className="max-lg:text-xs pt-2">SHIPPING WORLDWIDE</h3>
          </div>
          <div>
            <h3 className="max-lg:text-xs pt-2">SHIPPING WORLDWIDE</h3>
          </div>
        </Slider>
      </div>

      <div className="  bottom-0">
        <div className="font-sans text-white flex justify-around text-xs font-bold  bg-black"></div>
      </div>
      <div className="flex justify-between max-lg:hidden  pt-20 items-center text-center">
        <div className="items-center flex flex-col gap-16 pb-10 px-14">
          <img src={footerimage} alt="" />
          <p className="text-xs">© 2024 BLUORNG, ALL RIGHTS RESERVED.</p>
        </div>
        <div className="flex gap-40 items-center pr-56 ">
          <div className="text-xs *:p-2">
            <p className="font-bold ">HELP</p>
            <Link to={"/memberslogin"}>
              <p>MEMBERS LOGIN</p>
            </Link>
            <Link to={"/exchanges"}>
              <p>EXCHANGES/RETURNS</p>
            </Link>
            <Link to={"/faq"}>
              <p>FAQ</p>
            </Link>
            <Link to={"/terms"}>
              <p>TERMS</p>
            </Link>
            <Link to={"/shipping"}>
              <p>SHIPPING</p>
            </Link>
          </div>
          <div className="text-xs *:p-2">
            <p className="font-bold">COMPANY</p>
            <Link to={"/story"}>
              <p>STORY</p>
            </Link>
            <Link to={"/ourstores"}>
              <p>OUR STORES</p>
            </Link>
            <Link to={"/careers"}>
              <p>CAREERS</p>
            </Link>
            <Link to={"/contactus"}>
              <p>CONTACT US</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div>
          <img src={footerimage} alt="" className="max-lg:ml-6" />
        </div>
        <div className="flex justify-between p-2 font-bold">
          <p>HELP</p>

          <p>COMPANY</p>
        </div>
        <div className="flex justify-between p-2 text-xs">
          <div>
            <Link to={"/memberslogin"}>
              <p>MEMBERS LOGIN</p>
            </Link>
            <Link to={"/exchanges"}>
              <p>EXCHANGES/RETURNS</p>
            </Link>
            <Link to={"/faq"}>
              <p>FAQ</p>
            </Link>
            <Link to={"/terms"}>
              <p>TERMS</p>
            </Link>
            <Link to={"/shipping"}>
              <p>SHIPPING</p>
            </Link>
          </div>
          <div>
            <Link to={"/story"}>
              <p>STORY</p>
            </Link>
            <Link to={"/ourstores"}>
              <p>OUR STORES</p>
            </Link>
            <Link to={"/careers"}>
              <p>CAREERS</p>
            </Link>
            <Link to={"/contactus"}>
              <p>CONTACT US</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <p>@ 2024 BLUORNG, ALL RIGHTS RESERVED.</p>
        </div>

        <div></div>
      </div>
      <div className="bg-black ">
        <div className="flex text-white font-bold text-xs justify-between max-lg:p-4 p-2">
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
