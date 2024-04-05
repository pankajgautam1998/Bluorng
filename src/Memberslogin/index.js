import React, { useEffect } from "react";

const MembersLogin = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  }, []);
  return (
    <>
      <div className="lg: h-screen max-lg:pt-24">
        <div className=" flex justify-center pt-10">LOGIN</div>
        <div className="flex flex-col items-center pt-10 text-xs">
          <div>
            <p>EMAIL</p>
            <input
              type="text"
              className="outline-none border-b-2 border-b-gray-400 bg-gray-200 w-96"
            />
          </div>
          <div className="pt-2">
            <p>PASSWORD</p>
            <input
              type="password"
              className="outline-none border-b-2 border-b-gray-400 bg-gray-200 w-96 "
            />
          </div>
          <div className="w-96 pt-2">
            <button>FORGET YOUR PASSWORD?</button>
          </div>
          <div className="p-2">
            <p className="w-96 bg-black text-white text-center rounded-md p-3">
              SIGN IN
            </p>
          </div>
          <div className="w-96 text-center p-2">
            <button>CREATE ACCOUNT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembersLogin;
