import React from "react";
import pinkt from "../assests/pink snake  t shirt.webp";
import lilakt from "../assests/LILAC SNAKE T-SHIRT.webp";
import mustardt from "../assests/MUSTARD SHIZEN T-SHIRT.webp";
import offwhitet from "../assests/OFF WHITE SHIZEN T-SHIRT.webp";

const New = () => {
  const imagearray = [
    {
      id: 1,
      image: pinkt,
      title: "PINK SNAKE T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 2,
      image: lilakt,
      title: "LILAC SNAKE T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 3,
      image: mustardt,
      title: "MUSTARD SHIZEN T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 4,
      image: offwhitet,
      title: "OFF WHITE SHIZEN T-SHIRT ",
      price: "RS. 3,995",
    },
    {
      id: 1,
      image: pinkt,
      title: "PINK SNAKE T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 2,
      image: lilakt,
      title: "LILAC SNAKE T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 3,
      image: mustardt,
      title: "MUSTARD SHIZEN T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 4,
      image: offwhitet,
      title: "OFF WHITE SHIZEN T-SHIRT ",
      price: "RS. 3,995",
    },
    {
      id: 1,
      image: pinkt,
      title: "PINK SNAKE T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 2,
      image: lilakt,
      title: "LILAC SNAKE T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 3,
      image: mustardt,
      title: "MUSTARD SHIZEN T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 4,
      image: offwhitet,
      title: "OFF WHITE SHIZEN T-SHIRT ",
      price: "RS. 3,995",
    },
    {
      id: 1,
      image: pinkt,
      title: "PINK SNAKE T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 2,
      image: lilakt,
      title: "LILAC SNAKE T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 3,
      image: mustardt,
      title: "MUSTARD SHIZEN T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 4,
      image: offwhitet,
      title: "OFF WHITE SHIZEN T-SHIRT ",
      price: "RS. 3,995",
    },
    {
      id: 1,
      image: pinkt,
      title: "PINK SNAKE T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 2,
      image: lilakt,
      title: "LILAC SNAKE T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 3,
      image: mustardt,
      title: "MUSTARD SHIZEN T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 4,
      image: offwhitet,
      title: "OFF WHITE SHIZEN T-SHIRT ",
      price: "RS. 3,995",
    },
    {
      id: 1,
      image: pinkt,
      title: "PINK SNAKE T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 2,
      image: lilakt,
      title: "LILAC SNAKE T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 3,
      image: mustardt,
      title: "MUSTARD SHIZEN T-SHIRT",
      price: "RS. 3,995",
    },
    {
      id: 4,
      image: offwhitet,
      title: "OFF WHITE SHIZEN T-SHIRT ",
      price: "RS. 3,995",
    },
  ];
  return (
    <>
      <div className="flex gap-5 border border-black p-2  justify-between px-10 items-center pr-[25rem] cursor-pointer text-xs font-sans">
        <div>
          <p className="underline">VIEW ALL</p>
        </div>
        <div className="flex gap-12">
          <p>T-SHIRTS</p>
          <p>SHIRTS</p>
          <p>HOODIES</p>
          <p>SWEATSHIRTS</p>
          <p>CARGOS</p>
          <p>JEANS</p>
          <p>SHORTS</p>
        </div>
      </div>
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
      <div className="grid grid-cols-4 gap-2 hover:scale-110">
        {imagearray.map((i) => (
          <div>
            <img src={i.image} alt="" className="size-[30rem]" />
            <p>{i.title}</p>
            <p>{i.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default New;
