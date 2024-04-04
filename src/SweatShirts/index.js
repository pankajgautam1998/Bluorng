import React from "react";
import { useNavigate } from "react-router-dom";

const SweatShirts = () => {
  const navigate = useNavigate();
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
      <div className="grid lg:grid-cols-4 grid-cols-2 max-lg:pt-[9rem]">
        {array.map((i) => (
          <div>
            <div
              key={i.id}
              onClick={() => navigate(`/sweatshirt/${i.id}`)}
              className="overflow-hidden"
            >
              <img
                src={i.image}
                alt=""
                className="transition-all hover:scale-110"
              />
            </div>
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
