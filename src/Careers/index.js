import React, { useEffect } from "react";

const Careers = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
      left: 0,
    });
  }, []);
  return (
    <>
      <div className="bg-gray-200 ">
        <div className="flex flex-col items-center pt-32">
          <p className="text-xl text-gray-400 font-mono max-lg:pt-5">CAREERS</p>
          <p className="text-xs pt-20  lg:w-[45rem] max-lg:w-[24rem] text-gray-500 font-sans ">
            IF YOU SEE YOURSELF WORKING WITH BLUORNG AND WANT TO GROW WITH US;
            THEN WE ARE INTERESTED IN HEARING FROM YOU. SEND IN YOUR RESUME TO:
            APPLY@BLUORNG.COM AND WE’LL GET IN TOUCH WITH YOU.
          </p>
        </div>
        <div className="max-lg:px-1">
          <div className="flex  justify-between *:rounded-md lg:px-[25rem]   gap-5 pt-7">
            <div className="p-1 bg-white  lg:w-[60rem] max-lg:w-[20rem]">
              <p className="text-xs lg:p-3  max-lg:p-1">NAME</p>
              <input type="text" className="outline-none" />
            </div>
            <div className="p-1 bg-white lg:w-[60rem] max-lg:w-[20rem]">
              <p className="text-xs lg:p-3 max-lg:p-1 ">EMAIL *</p>
              <input type="text" className="outline-none" />
            </div>
          </div>
          <div className="flex justify-center lg:px-[25rem] pt-5 ">
            <div className="p-1 bg-white w-[60rem] rounded-md">
              <input
                type="text"
                placeholder="ENTER YOUR DESIGNATION"
                className="outline-none p-2"
              />
            </div>
          </div>
          <div className="flex justify-center lg:px-[25rem] pt-5 ">
            <div className="p-1  w-[60rem] rounded-md ">
              <p className="text-xs ">ATTACH PDF:</p>
              <div className="border border-gray-400 rounded-md">
                <input type="file" className="p-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pl-[25rem] max-lg:pl-[1rem] pt-5 max-lg:mb-5 mb-5 ">
          <button className="bg-black p-4  text-white h-fit w-48 rounded-md text-xs">
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Careers;
