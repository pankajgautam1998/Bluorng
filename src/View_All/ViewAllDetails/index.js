import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ViewAllDetails = () => {
  const array = [
    {
      id: 1,
      name: "W28",
    },
    {
      id: 1,
      name: "W30",
    },
    {
      id: 1,
      name: "W32",
    },
    {
      id: 1,

      discount: "W34",
    },
    {
      id: 1,
      name: "W36",
    },
    {
      id: 1,

      discount: "W38",
    },
  ];
  const { tshirtdetails } = useParams();

  const [data, setData] = useState([
    {
      id: 1,
      image1:
        "https://bluorng.com/cdn/shop/files/DSC047966.jpg?v=1682854190&width=823",
      image2:
        "https://bluorng.com/cdn/shop/files/DSC0479610.jpg?v=1682854308&width=823",
      image3:
        "https://bluorng.com/cdn/shop/files/DSC047962.jpg?v=1683346573&width=823",
      image4:
        "https://bluorng.com/cdn/shop/files/DSC047967.jpg?v=1683346573&width=823",
      image5:
        "https://bluorng.com/cdn/shop/files/DSC0479611.jpg?v=1683346573&width=823",
      image6:
        "https://bluorng.com/cdn/shop/files/DSC047969.jpg?v=1683346573&width=823",
      image7:
        "https://bluorng.com/cdn/shop/files/DSC04796.jpg?v=1683346573&width=823",
      image8:
        "https://bluorng.com/cdn/shop/files/DSC047968.jpg?v=1683346573&width=823",
    },
  ]);

  console.log(data);
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="mt-96">
          <div className="flex justify-between px-8">
            <p>OLIVE RIPSTOP CARGOS</p>
            <p>RS. 14,995</p>
          </div>

          <div className="flex justify-between px-20">
            <button>DESCRIPTION</button>
            <button>SHIPPING</button>
          </div>
          <div>
            <p className="text-xs">
              BLUORNG OLIVE RIPSTOP CARGO IS IN OLIVE COLOUR. THE DESIGN IS
              INSPIRED FROM BLUORNG’S TAKE ON CARGOS. THE MATERIAL IS PREMIUM
              QUALITY AND TEXTURED; DOESNT RIP. THE CARGOS ARE CONVERTIBLE INTO
              SHORTS AND CAN BE STYLED IN MULTIPLE WAYS. THERE ARE 2 DETACHABLE
              POCKETS, LOW HANGING SUSPENDERS ON EACH SIDE AND 12 MORE
              MULTIPURPOSE POCKETS. THE FIT IS A BLUORNG’S BAGGY FLARED FIT.
            </p>
          </div>
          <div>
            <p className="text-xs">PACKED WITHIN 24 HOURS.</p>
            <p className="text-xs">FREE DELIVERY PAN-INDIA.</p>
            <p className="text-xs">DISPATCHES NEXT DAY</p>
          </div>
        </div>

        <div className="justify-items-center overflow-scroll h-[36rem] scroll">
          {data.map((i, index) => (
            <div key={index}>
              <img src={i.image1} alt="" />
              <img src={i.image2} alt="" />
              <img src={i.image3} alt="" />
              <img src={i.image4} alt="" />
              <img src={i.image5} alt="" />
              <img src={i.image6} alt="" />
              <img src={i.image7} alt="" />
              <img src={i.image8} alt="" />
            </div>
          ))}
        </div>
        <div className="px-[2rem] mt-96">
          <div className="mb-0">
            <div className="flex flex-col items-center mb-2">
              <p>SIZE CHART</p>
              <table className="">
                <tbody>
                  <tr>
                    <th className="border border-gray-400 p-1">WAIST</th>
                    <th className="border  border-gray-400 p-1">LENGTH</th>
                    <th className="border  border-gray-400 p-1">
                      BOTTOM
                      <br />
                      WIDTH
                    </th>
                    <th className="border  border-gray-400 p-1">ROUND</th>
                    <th className="border  border-gray-400 p-1">THIGH</th>
                    <th className="border  border-gray-400 p-1">
                      SHORTS
                      <br />
                      LENGTH
                    </th>
                  </tr>
                  <tr className="border  border-gray-400">
                    <td className="border  border-gray-400 p-3">28"</td>
                    <td className="border  border-gray-400 p-3">44"</td>
                    <td className="border  border-gray-400 p-3">24"</td>
                    <td className="border  border-gray-400 p-3">25.5"</td>
                    <td className="border  border-gray-400 p-3">22"</td>
                    <td className="border  border-gray-400 p-3">21.5"</td>
                  </tr>
                  <tr className="border  border-gray-400 p-3">
                    <td className="border  border-gray-400 p-3">30"</td>
                    <td className="border  border-gray-400 p-3">44"</td>
                    <td className="border  border-gray-400 p-3">24"</td>
                    <td className="border  border-gray-400 p-3">27"</td>
                    <td className="border  border-gray-400 p-3">22"</td>
                    <td className="border  border-gray-400 p-3">21.5"</td>
                  </tr>
                  <tr className="border  border-gray-400 p-3">
                    <td className="border  border-gray-400 p-3">32"</td>
                    <td className="border  border-gray-400 p-3">44"</td>
                    <td className="border  border-gray-400 p-3">24"</td>
                    <td className="border  border-gray-400 p-3">28"</td>
                    <td className="border  border-gray-400 p-3">24"</td>
                    <td className="border  border-gray-400 p-3">21.5"</td>
                  </tr>
                  <tr className="border  border-gray-400 p-3">
                    <td className="border  border-gray-400 p-3">34"</td>
                    <td className="border  border-gray-400 p-3">44"</td>
                    <td className="border  border-gray-400 p-3">24"</td>
                    <td className="border  border-gray-400 p-3">28.5"</td>
                    <td className="border  border-gray-400 p-3">26"</td>
                    <td className="border  border-gray-400 p-3">21.5"</td>
                  </tr>
                  <tr className="border  border-gray-400 p-3">
                    <td className="border  border-gray-400 p-3">36"</td>
                    <td className="border  border-gray-400 p-3">44"</td>
                    <td className="border  border-gray-400 p-3">24"</td>
                    <td className="border  border-gray-400 p-3">29.5"</td>
                    <td className="border  border-gray-400 p-3">26"</td>
                    <td className="border  border-gray-400 p-3 ">21.5"</td>
                  </tr>
                  <tr className="border  border-gray-400 p-3">
                    <td className="border  border-gray-400 p-3">38"</td>
                    <td className="border  border-gray-400 p-3">44"</td>
                    <td className="border  border-gray-400 p-3">24"</td>
                    <td className="border  border-gray-400 p-3">31"</td>
                    <td className="border  border-gray-400 p-3">22"</td>
                    <td className="border  border-gray-400 p-3">21.5"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between ">
            <p>SIZE</p>
            <button className="bg-black text-white h-fit w-24 rounded-md p-1">
              SIZE CHART
            </button>
          </div>
          <div className="grid grid-cols-5 w-fit  gap-2 pt-5 ">
            {array.map((i) => (
              <div className="border h-fit rounded-md  p-2 w-16 hover:border-black text-gray-400 font-mono text-center">
                {i.name}
                <s>{i.discount}</s>
              </div>
            ))}
          </div>
          <div className="flex gap-2 ">
            <button className="border border-black h-fit rounded-md p-2 w-52 ">
              ADD TO CART
            </button>
            <button className=" h-fit bg-black text-white rounded-md p-2 w-52">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAllDetails;
