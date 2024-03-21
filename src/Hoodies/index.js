import React from "react";

const Hoodies = () => {
  const array = [
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/Q16.jpg?v=1705211162&width=360",
      name: "GREEN PAISLEY HOODIE            ",
      price: "RS. 9,995            ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6218.jpg?v=1703479113&width=360",
      name: "GREY HERRINGBONE HOODIE        ",
      price: "RS. 9,995        ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6220.jpg?v=1703478951&width=360",
      name: "RED HERRINGBONE HOODIE        ",
      price: "RS. 9,995        ",
    },
    {
      id: 1,
      image: "https://bluorng.com/cdn/shop/files/w6.jpg?v=1700749714&width=360",
      name: "WHITE FAVOURITE HOODIE        ",
      price: "RS. 8,995        ",
    },
    {
      id: 1,
      image: "https://bluorng.com/cdn/shop/files/k3.jpg?v=1699165759&width=360",
      name: "BLACK FAVOURITE HOODIE        ",
      price: "RS. 8,995        ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/DSC046622.jpg?v=1699165083&width=360",
      name: "PARLIAMENT HOODIE        ",
      price: "RS. 11,995        ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/products/basic-red-hoodie-851668.jpg?v=1671744051&width=360",
      name: "BASIC RED HOODIE          ",
      discount: "RS. 7,995 ",
      price: "RS. 5,400         ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/products/red-kraken-hoodie-225509.jpg?v=1667677513&width=360",
      name: "RED KRAKEN HOODIE          ",
      discount: "RS. 8,995 ",
      price: "RS. 6,000      ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/products/green-snake-hoodie-298683.jpg?v=1668419463&width=360",
      name: "GREEN SNAKE HOODIE        ",
      discount: "RS. 8,995 ",
      price: "RS. 6,000      ",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-4">
        {array.map((i, index) => (
          <div key={index}>
            <img src={i.image} alt="" />
            <p>{i.name}</p>
            <span className="flex gap-2">
              <s>{i.discount}</s>
              <p>{i.price}</p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hoodies;
