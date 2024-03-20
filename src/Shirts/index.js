import React from "react";

const Shirts = () => {
  const array = [
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0576014.jpg?v=1707823794&width=360",
      name: "MARBLE GREY WAFFLE SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0576010.jpg?v=1707823818&width=360",
      name: "BLU WAFFLE SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0576014.jpg?v=1707823794&width=360",
      name: "MARBLE GREY WAFFLE SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6208.jpg?v=1703479221&width=360",
      name: "BLU FLANNEL SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6210.jpg?v=1703478155&width=360",
      name: "OCHRE FLANNEL SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6205.jpg?v=1703478219&width=360",
      name: "ORNG FLANNEL SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork847.jpg?v=1700924704&width=360",
      name: "BLU STONE SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork834_d70d1042-37b1-4091-9944-3b214668f543.jpg?v=1700924823&width=360",
      name: "BLACK STONE SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork831.jpg?v=1700923944&width=360",
      name: "VIVID SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork843.jpg?v=1700924040&width=360",
      name: "BONE SHIRT      ",
      price: "RS. 4,995      ",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-4 gap-1">
        {array.map((img, index) => {
          return (
            <div key={index}>
              <img src={img.image} alt="" />
              <p>{img.name}</p>
              <p>{img.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shirts;
