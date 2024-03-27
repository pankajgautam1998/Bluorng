import React from "react";
import burgundy from "../assests/BURGUNDY INK T-SHIRT.webp";
import bluink from "../assests/BLU INK T-SHIRT.webp";
import dutch from "../assests/DUTCH BLU GARLAND T-SHIRT.webp";
import greendragonfly from "../assests/GREEN DRAGONFLY T-SHIRT.webp";
import blind from "../assests/BLIND DROP 7.2.webp";
import whitegarland from "../assests/WHITE GARLAND T-SHIRT.webp";
import darkshenron from "../assests/DARK SHENRON T-SHIRT.webp";
import bluracing from "../assests/BLU RACING T-SHIRT.webp";
import blackaffection from "../assests/BLACK AFFECTION T-SHIRT.webp";
import redaffection from "../assests/RED AFFECTION T-SHIRT.webp";
import blackracing from "../assests/BLACK RACING T-SHIRT.webp";
import fireshenron from "../assests/FIRE SHENRON T-SHIRT.webp";
import redaffection2 from "../assests/RED AFFECTION SHORTS.webp";
import mustardshizen from "../assests/MUSTARD SHIZEN T-SHIRT.webp";
import greencast from "../assests/GREEN CAST DENIMS.webp";
import notsoblack from "../assests/NOT SO BLACK DENIMS.webp";
import blind7 from "../assests/BLIND DROP 7.webp";
import blackaffection2 from "../assests/BLACK AFFECTION SHORTS.webp";
import offwhite from "../assests/OFF WHITE SHIZEN T-SHIRT.webp";
import overdry from "../assests/OVER DYE DENIMS.webp";
import lilacsnake from "../assests/LILAC SNAKE T-SHIRT.webp";
import starflower from "../assests/STARFLOWER DENIMS.webp";
import pinksnake from "../assests/pink snake  t shirt.webp";
import marblegrey from "../assests/MARBLE GREY WAFFLE SHIRT.jpg";
import bludenims from "../assests/BLU DENIMS.webp";
import bluwaffle from "../assests/BLU WAFFLE SHIRT.webp";
import { Link } from "react-router-dom";

const New = () => {
  const imagearray = [
    {
      id: 1,
      image: burgundy,
      title: "BURGUNDY INK T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 2,
      image: bluink,
      title: "BLU INK T-SHIRT INK T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 3,
      image: dutch,
      title: "DUTCH BLU GARLAND T-SHIRT",
      price: "RS. 4,495  ",
    },
    {
      id: 4,
      image: greendragonfly,
      title: "GREEN DRAGONFLY T-SHIRT",
      price: "RS. 4,495  ",
    },
    {
      id: 5,
      image: blind,
      title: "BLIND DROP 7.2",
      price: "RS. 4,495",
    },
    {
      id: 6,
      image: whitegarland,
      title: "WHITE GARLAND T-SHIRT",
      price: "RS. 4,495",
    },
    {
      id: 7,
      image: darkshenron,
      title: "DARK SHENRON T-SHIRT",
      price: "RS. 4,995",
    },
    {
      id: 8,
      image: bluracing,
      title: "BLU RACING T-SHIRT",
      price: "RS. 4,995",
    },
    {
      id: 9,
      image: blackaffection,
      title: "BLACK AFFECTION T-SHIRT",
      price: "RS. 4,495",
    },
    {
      id: 10,
      image: redaffection,
      title: "RED AFFECTION T-SHIRT",
      price: "RS. 4,495",
    },
    {
      id: 11,
      image: blackracing,
      title: "BLACK RACING T-SHIRT",
      price: "RS. 4,995",
    },
    {
      id: 12,
      image: fireshenron,
      title: "FIRE SHENRON T-SHIRT",
      price: "RS. 4,995  ",
    },
    {
      id: 13,
      image: redaffection2,
      title: "RED AFFECTION SHORTS",
      price: "RS. 4,995",
    },
    {
      id: 14,
      image: mustardshizen,
      title: "MUSTARD SHIZEN T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 15,
      image: greencast,
      title: "GREEN CAST DENIMS",
      price: "RS. 9,995  ",
    },
    {
      id: 16,
      image: notsoblack,
      title: "NOT SO BLACK DENIMS",
      price: "RS. 9,995  ",
    },
    {
      id: 17,
      image: blind7,
      title: "BLIND DROP 7",
      price: "RS. 4,495",
    },
    {
      id: 18,
      image: blackaffection2,

      title: "BLACK AFFECTION SHORTS",
      price: "RS. 4,995 ",
    },
    {
      id: 19,
      image: offwhite,
      title: "OFF WHITE SHIZEN T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 20,
      image: overdry,
      title: "OVER DYE DENIMS",
      price: "RS. 9,995",
    },
    {
      id: 21,
      image: lilacsnake,
      title: "LILAC SNAKE T-SHIRT",
      price: "RS. 3,995   ",
    },
    {
      id: 22,
      image: starflower,
      title: "STARFLOWER DENIMS",
      price: "RS. 9,995",
    },
    {
      id: 23,
      image: pinksnake,
      title: "pink snake  t shirt",
      price: "RS. 3,995",
    },
    {
      id: 24,
      image: marblegrey,
      title: "MARBLE GREY WAFFLE SHIRT",
      price: "RS. 5,995",
    },
    {
      id: 25,
      image: bludenims,
      title: "BLU DENIMS",
      price: "RS. 9,995 ",
    },
    {
      id: 26,
      image: bluwaffle,
      title: "BLU WAFFLE SHIRT",
      price: "RS. 5,995",
    },
  ];
  return (
    <>
      <div className="flex justify-between px-10 text-xs">
        <div className="flex ">
          <div className="flex  gap-5 justify-between">
            <div>FILTER:</div>
            <div>
              SIZE <select name="" id=""></select>
            </div>
            <div>
              AVAILABILITY
              <select name="" id="">
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            SORT BY:{"  "}
            <select name="" id="">
              <option value="">FEATURED</option>
              <option value="">BEST SELLING</option>
              <option value="">ALPHABETICALLY,A-Z</option>
              <option value="">ALPHABETICALLY,Z-A</option>
              <option value="">PRICE,LOW TO HIGH</option>
              <option value="">PRICE,HIGH TO LOW </option>
              <option value="">DATE,OLD TO NEW</option>
              <option value="">DATE,NEW TO OLD</option>
            </select>
          </div>
          <div>24 PRODUCTS</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 ">
        {imagearray.map((i, index) => (
          <div>
            <div key={index} className="overflow-hidden">
              <img
                src={i.image}
                alt=""
                className="size-[30rem] hover:scale-110 transition-all "
              />
            </div>
            <p>{i.title}</p>
            <p>{i.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default New;
