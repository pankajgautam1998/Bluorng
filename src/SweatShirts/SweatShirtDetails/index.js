import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BasicTabs from "../../Same";
import SweatShirts from "..";

const SweatShirtDetails = () => {
  // const [page, setPage] = useState("DESCRIPTION");
  const [open, setOpen] = useState(false);
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
  const { sweatshirt_id } = useParams();

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
  console.log(open);
  return (
    <>
      <div className="grid grid-cols-3 max-lg:hidden ">
        <div className="mt-96">
          <div className="flex justify-between px-8">
            <p>OLIVE RIPSTOP CARGOS</p>
            <p>RS. 14,995</p>
          </div>

          <div className="flex justify-between px-10">
            <BasicTabs />
            {/* <button onClick={() => setPage("DESCRIPTION")}>DESCRIPTION</button>
            <button onClick={() => setPage("SHIPPING")}>SHIPPING</button> */}
          </div>
          {/* {page === "DESCRIPTION" && (
            <div>
              <p className="text-xs">
                BLUORNG OLIVE RIPSTOP CARGO IS IN OLIVE COLOUR. THE DESIGN IS
                INSPIRED FROM BLUORNG’S TAKE ON CARGOS. THE MATERIAL IS PREMIUM
                QUALITY AND TEXTURED; DOESNT RIP. THE CARGOS ARE CONVERTIBLE
                INTO SHORTS AND CAN BE STYLED IN MULTIPLE WAYS. THERE ARE 2
                DETACHABLE POCKETS, LOW HANGING SUSPENDERS ON EACH SIDE AND 12
                MORE MULTIPURPOSE POCKETS. THE FIT IS A BLUORNG’S BAGGY FLARED
                FIT.
              </p>
            </div>
          )}
          {page === "SHIPPING" && (
            <div>
              <p className="text-xs">PACKED WITHIN 24 HOURS.</p>
              <p className="text-xs">FREE DELIVERY PAN-INDIA.</p>
              <p className="text-xs">DISPATCHES NEXT DAY</p>
            </div>
          )} */}
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
        <div className="px-[2rem] ">
          <div className="h-64">
            {open && (
              <div className="">
                <div className="flex flex-col items-center mb-2">
                  <p>SIZE CHART</p>
                  <table className="">
                    <tbody>
                      <tr>
                        <th className="border border-gray-400 ">WAIST</th>
                        <th className="border  border-gray-400 ">LENGTH</th>
                        <th className="border  border-gray-400 ">
                          BOTTOM
                          <br />
                          WIDTH
                        </th>
                        <th className="border  border-gray-400 ">ROUND</th>
                        <th className="border  border-gray-400 ">THIGH</th>
                        <th className="border  border-gray-400 ">
                          SHORTS
                          <br />
                          LENGTH
                        </th>
                      </tr>
                      <tr className="border  border-gray-400">
                        <td className="border  border-gray-400 ">28"</td>
                        <td className="border  border-gray-400 ">44"</td>
                        <td className="border  border-gray-400 ">24"</td>
                        <td className="border  border-gray-400 ">25.5"</td>
                        <td className="border  border-gray-400 ">22"</td>
                        <td className="border  border-gray-400 ">21.5"</td>
                      </tr>
                      <tr className="border  border-gray-400 ">
                        <td className="border  border-gray-400 ">30"</td>
                        <td className="border  border-gray-400 ">44"</td>
                        <td className="border  border-gray-400 ">24"</td>
                        <td className="border  border-gray-400 ">27"</td>
                        <td className="border  border-gray-400 ">22"</td>
                        <td className="border  border-gray-400 ">21.5"</td>
                      </tr>
                      <tr className="border  border-gray-400 ">
                        <td className="border  border-gray-400 ">32"</td>
                        <td className="border  border-gray-400 ">44"</td>
                        <td className="border  border-gray-400 ">24"</td>
                        <td className="border  border-gray-400 ">28"</td>
                        <td className="border  border-gray-400 ">24"</td>
                        <td className="border  border-gray-400 ">21.5"</td>
                      </tr>
                      <tr className="border  border-gray-400 ">
                        <td className="border  border-gray-400 ">34"</td>
                        <td className="border  border-gray-400 ">44"</td>
                        <td className="border  border-gray-400 ">24"</td>
                        <td className="border  border-gray-400 ">28.5"</td>
                        <td className="border  border-gray-400 ">26"</td>
                        <td className="border  border-gray-400 ">21.5"</td>
                      </tr>
                      <tr className="border  border-gray-400 ">
                        <td className="border  border-gray-400 ">36"</td>
                        <td className="border  border-gray-400 ">44"</td>
                        <td className="border  border-gray-400 ">24"</td>
                        <td className="border  border-gray-400 ">29.5"</td>
                        <td className="border  border-gray-400 ">26"</td>
                        <td className="border  border-gray-400  ">21.5"</td>
                      </tr>
                      <tr className="border  border-gray-400 ">
                        <td className="border  border-gray-400 ">38"</td>
                        <td className="border  border-gray-400 ">44"</td>
                        <td className="border  border-gray-400 ">24"</td>
                        <td className="border  border-gray-400 ">31"</td>
                        <td className="border  border-gray-400 ">22"</td>
                        <td className="border  border-gray-400 ">21.5"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
          <div className="mt-10">
            <div className="flex justify-between bottom-1">
              <p>SIZE</p>
              <button
                className="bg-black text-white h-fit w-24 rounded-md p-1"
                onClick={() => setOpen(!open)}
              >
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
      </div>
      <div className="pt-[9rem] lg:hidden">
        {data.map((i, index) => (
          <div
            key={index}
            className="flex max-lg:overflow-y-scroll lg:hidden relative"
          >
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
        <div className="absolute top-52 pl-4  ">
          {open && (
            <div className="h-30 bg-white text-black fixed">
              <div className="flex flex-col items-center mb-2">
                <p>SIZE CHART</p>
                <table className="">
                  <tbody>
                    <tr>
                      <th className="border border-gray-400 ">WAIST</th>
                      <th className="border  border-gray-400 ">LENGTH</th>
                      <th className="border  border-gray-400 ">
                        BOTTOM
                        <br />
                        WIDTH
                      </th>
                      <th className="border  border-gray-400 ">ROUND</th>
                      <th className="border  border-gray-400 ">THIGH</th>
                      <th className="border  border-gray-400 ">
                        SHORTS
                        <br />
                        LENGTH
                      </th>
                    </tr>
                    <tr className="border  border-gray-400">
                      <td className="border  border-gray-400 ">28"</td>
                      <td className="border  border-gray-400 ">44"</td>
                      <td className="border  border-gray-400 ">24"</td>
                      <td className="border  border-gray-400 ">25.5"</td>
                      <td className="border  border-gray-400 ">22"</td>
                      <td className="border  border-gray-400 ">21.5"</td>
                    </tr>
                    <tr className="border  border-gray-400 ">
                      <td className="border  border-gray-400 ">30"</td>
                      <td className="border  border-gray-400 ">44"</td>
                      <td className="border  border-gray-400 ">24"</td>
                      <td className="border  border-gray-400 ">27"</td>
                      <td className="border  border-gray-400 ">22"</td>
                      <td className="border  border-gray-400 ">21.5"</td>
                    </tr>
                    <tr className="border  border-gray-400 ">
                      <td className="border  border-gray-400 ">32"</td>
                      <td className="border  border-gray-400 ">44"</td>
                      <td className="border  border-gray-400 ">24"</td>
                      <td className="border  border-gray-400 ">28"</td>
                      <td className="border  border-gray-400 ">24"</td>
                      <td className="border  border-gray-400 ">21.5"</td>
                    </tr>
                    <tr className="border  border-gray-400 ">
                      <td className="border  border-gray-400 ">34"</td>
                      <td className="border  border-gray-400 ">44"</td>
                      <td className="border  border-gray-400 ">24"</td>
                      <td className="border  border-gray-400 ">28.5"</td>
                      <td className="border  border-gray-400 ">26"</td>
                      <td className="border  border-gray-400 ">21.5"</td>
                    </tr>
                    <tr className="border  border-gray-400 ">
                      <td className="border  border-gray-400 ">36"</td>
                      <td className="border  border-gray-400 ">44"</td>
                      <td className="border  border-gray-400 ">24"</td>
                      <td className="border  border-gray-400 ">29.5"</td>
                      <td className="border  border-gray-400 ">26"</td>
                      <td className="border  border-gray-400  ">21.5"</td>
                    </tr>
                    <tr className="border  border-gray-400 ">
                      <td className="border  border-gray-400 ">38"</td>
                      <td className="border  border-gray-400 ">44"</td>
                      <td className="border  border-gray-400 ">24"</td>
                      <td className="border  border-gray-400 ">31"</td>
                      <td className="border  border-gray-400 ">22"</td>
                      <td className="border  border-gray-400 ">21.5"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <div className="p-1">
            <p>OLIVE RIPSTOP CARGOS</p>
            <p>RS. 14,995</p>
          </div>

          <div className="px-2 p-1">
            <button
              className="bg-black text-white h-fit w-24 rounded-md p-1"
              onClick={() => setOpen(!open)}
            >
              SIZE CHART
            </button>
          </div>
        </div>
        <div className="px-2 pt-1">
          <div className="grid grid-cols-5 w-fit  gap-2 pt-5 ">
            {array.map((i) => (
              <div className="border h-fit rounded-md  p-2 w-16 hover:border-black text-gray-400 font-mono text-center">
                {i.name}
                <s>{i.discount}</s>
              </div>
            ))}
          </div>
        </div>
        <div className="px-2 pt-1">
          <button className=" h-fit bg-gray-500 text-white rounded-md p-2 w-full">
            BUY NOW
          </button>
        </div>
        <div className="px-2 pt-1">
          <button className=" bg-gray-200 border border-black h-fit rounded-md p-2 w-full ">
            ADD TO CART
          </button>
        </div>
        <div className=" mx-2  mt-1 rounded-md border border-black p-2">
          <BasicTabs />
        </div>
        <div className="px-2 flex justify-between ">
          <p>YOU MAY ALSO LIKE</p>
          <p className="bg-white text-black">DISCOVER MORE</p>
        </div>
        <div>
          <SweatShirts />
        </div>
      </div>
    </>
  );
};

export default SweatShirtDetails;
