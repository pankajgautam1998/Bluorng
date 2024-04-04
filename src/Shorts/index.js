import React from "react";
import { useNavigate } from "react-router-dom";

const Shorts = () => {
  const navigate = useNavigate();
  const array = [
    {
      id: 1,
      image: "https://bluorng.com/cdn/shop/files/s8.jpg?v=1707119051&width=360",
      name: "RED AFFECTION SHORTS            ",
      price: "RS. 4,995            ",
    },
    {
      id: 1,
      image: "https://bluorng.com/cdn/shop/files/s1.jpg?v=1708613587&width=360",
      name: "BLACK AFFECTION SHORTS        ",
      price: "RS. 4,995        ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/products/red-shorts-455277.jpg?v=1671700691&width=360",
      name: "RED SHORTS        ",
      price: "RS. 3,495        ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/products/black-shorts-658348.jpg?v=1671700692&width=360",
      name: "BLACK SHORTS      ",
      price: "RS. 3,495      ",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 max-lg:pt-[9rem]">
        {array.map((i, index) => (
          <div>
            <div
              key={i.id}
              onClick={() => navigate(`/shorts/${i.id}`)}
              className="overflow-hidden"
            >
              <img
                src={i.image}
                alt=""
                className="hover:scale-110 transition-all"
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

export default Shorts;
