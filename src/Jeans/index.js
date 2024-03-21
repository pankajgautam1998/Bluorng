import React from "react";

const Jeans = () => {
  const array = [
    {
      id: 1,
      image: "https://bluorng.com/cdn/shop/files/i3.jpg?v=1710502328&width=360",
      name: "NOT SO BLACK DENIMS            ",
      price: "RS. 9,995            ",
    },
    {
      id: 1,
      image: "https://bluorng.com/cdn/shop/files/i7.jpg?v=1710504495&width=360",
      name: "OVER DYE DENIMS      ",
      price: "RS. 9,995      ",
    },
    {
      id: 1,
      image: "https://bluorng.com/cdn/shop/files/i8.jpg?v=1710501118&width=360",
      name: "GREEN CAST DENIMS        ",
      price: "RS. 9,995        ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/i6x_350ed334-d7b9-4206-b64a-5640b09d8962.jpg?v=1710505460&width=360",
      name: "STARFLOWER DENIMS        ",
      price: "RS. 9,995        ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/i2b.jpg?v=1710504391&width=360",
      name: "BLU DENIMS        ",
      price: "RS. 9,995        ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/products/DSC037599.jpg?v=1680850210&width=360",
      name: "FLORAL DENIMS        ",
      price: "RS. 9,995        ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/products/DSC03759.jpg?v=1680850718&width=360",
      name: "LIGHT WASH DENIMS        ",
      price: "RS. 8,995        ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/products/DSC0375915.jpg?v=1680850839&width=360",
      name: "DARK WASH DENIMS        ",
      price: "RS. 8,995        ",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-4">
        {array.map((i, index) => (
          <div key={index}>
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

export default Jeans;
