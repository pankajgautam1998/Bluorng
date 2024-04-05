import React, { useEffect } from "react";

const Contactus = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  }, []);
  return (
    <>
      <div className="bg-gray-200  ">
        <div className="flex flex-col items-center pt-32">
          <p className="text-xl text-gray-400 font-mono max-lg:pt-10">
            CONNECT WITH THE BRAND
          </p>
          <p className="text-xs pt-5 font-mono max-lg:px-2">
            WE WOULD LOVE TO HEAR ABOUT YOUR FEEDBACK, INTERESTS AND FUTURE
            COLLABORATIONS EMAIL AT CONTACT@BLUORNG.COM
          </p>
        </div>
        <div className="max-lg:px-[1rem]">
          <div className="flex justify-center lg:px-[25rem]  pt-5 ">
            <div className="p-1 bg-white w-[60rem]  rounded-md">
              <p className="text-xs ">NAME</p>
              <input type="text" className="outline-none" />
            </div>
          </div>
          <div className="flex justify-center lg:px-[25rem]  pt-5 ">
            <div className="p-1 bg-white w-[60rem]  rounded-md">
              <p className="text-xs ">EMAIL *</p>
              <input type="text" className="outline-none" />
            </div>
          </div>
          <div className="flex justify-center lg:px-[25rem]  pt-5 ">
            <div className="p-1 bg-white w-[60rem]  rounded-md">
              <p className="text-xs ">PHONE NUMBER</p>
              <input type="text" className="outline-none" />
            </div>
          </div>
          <div className="flex justify-center lg:px-[25rem]  pt-5 ">
            <div className="p-1 bg-white w-[60rem] rounded-md h-28">
              <p className="text-xs ">COMMENT</p>
              <input type="text" className="outline-none" />
            </div>
          </div>
          <div className="flex justify-center pt-10 mb-10">
            <button className="bg-black p-4  text-white h-fit w-48 rounded-md text-xs">
              SEND
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
