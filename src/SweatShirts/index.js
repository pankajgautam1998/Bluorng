import React from "react";

const SweatShirts = () => {
  const array = [
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/products/image.heic?v=1670479696&width=360",
      name: "BLACK SHINE SWEATSHIRT",
      price: "RS. 6,995",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/products/red-shine-sweatshirt-776713.jpg?v=1670480438&width=360",
      name: "RED SHINE SWEATSHIRT        ",
      price: "RS. 6,995        ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/products/favour-green-sweatshirt-244545.jpg?v=1672130320&width=360",
      name: "FAVOR GREEN SWEATSHIR      ",
      price: "RS. 6,995      ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/products/blu-favour-sweatshirt-820408.jpg?v=1672130772&width=360",
      name: "BLU FAVOUR SWEATSHIRT      ",
      price: "RS. 6,995      ",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-4">
        {array.map((i) => (
          <div>
            <img src={i.image} alt="" />
            <p>{i.name}</p>
            <p>{i.price}</p>
          </div>
        ))}
      </div>
      ;
    </>
  );
};

export default SweatShirts;
