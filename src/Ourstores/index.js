import React, { useEffect } from "react";

const Ourstore = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  }, []);
  return (
    <>
      <div className="flex gap-2 px-[3%] p-5 bg-gray-200 max-lg:pt-36">
        <div className="w-[33%]">
          <video autoPlay controls={false} muted loop>
            <source src="https://cdn.shopify.com/videos/c/o/v/cd5529a970f5492fb7c37efb012e98d5.mp4" />
          </video>
        </div>
        <div className="w-[33%]">
          <video autoPlay controls={false} muted loop>
            <source src="https://cdn.shopify.com/videos/c/o/v/803365b8a7834c88990167877b2984e8.mp4" />
          </video>
        </div>
        <div className="w-[33%]">
          <video autoPlay controls={false} muted loop>
            <source src="https://cdn.shopify.com/videos/c/o/v/085c1562ae6c41899dc03a26bf916065.mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Ourstore;
