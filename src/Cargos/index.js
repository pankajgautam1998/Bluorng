import React from "react";
import { useNavigate } from "react-router-dom";

const Cargos = () => {
  const navigate = useNavigate();
  const array = [
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/DSC047966.jpg?v=1682854190&width=360",
      name: "OLIVE RIPSTOP CARGOS",

      price: "RS. 14,995",
    },
    {
      id: 2,
      image: "https://bluorng.com/cdn/shop/files/C1.jpg?v=1683615603&width=360",
      name: "BLACK RIPSTOP CARGOS        ",

      price: "RS. 14,995        ",
    },
    {
      id: 3,
      image:
        "https://bluorng.com/cdn/shop/files/DSC08597.jpg?v=1688450386&width=360",
      name: "MILITARY GREY RIPSTOP CARGOS        ",

      price: "RS. 7,995        ",
    },
    {
      id: 4,
      image:
        "https://bluorng.com/cdn/shop/files/DSC08679_48bbc864-2277-4d51-a13b-c1dd970f61aa.png?v=1688715468&width=360",
      name: "MILITARY NAVY RIPSTOP CARGOS          ",

      price: "RS. 7,995          ",
    },
    {
      id: 5,
      image:
        "https://bluorng.com/cdn/shop/files/DSC08607.png?v=1688450563&width=360",
      name: "OLIVE KHAKI RIPSTOP CARGOS        ",

      price: "RS. 7,995        ",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-4">
        {array.map((i, index) => (
          <div>
            <div
              key={i.id}
              onClick={() => navigate(`/cargos/${i.id}`)}
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
    </>
  );
};

export default Cargos;
