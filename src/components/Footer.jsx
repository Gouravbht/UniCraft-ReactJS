import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" w-full h-full">
        <img
          src="/Images/Home.png"
          alt="homePic"
          className=" w-full h-full absolute"
        />
        <div className=" flex flex-col items-center py-12 ">
          <h1 className=" text-6xl font-semibold relative w-[50%] text-center py-2">
            No long-term contracts. No catches. Simple.
          </h1>
          <p className=" relative text-gray-500 py-4">
            Start your 30-day free trial. Cancel anytime.
          </p>
          <button className=" items-center relative text-lg font-medium border border-black text-white bg-black px-10 py-2 rounded-md">
            Contact us
          </button>
        </div>

        <div className=" flex justify-between border border-t-gray-600 ">
          <div className=" p-8 py-32 ">
            <h1 className=" text-2xl font-semibold py-1 ">UniCraft</h1>
            <p className=" text-lg text-gray-500 font-medium py-1 relative">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
            <p className=" text-lg text-gray-500 font-medium py-3">
              © 2077 Untitled UI. All rights reserved.
            </p>
          </div>
          <div className=" relative flex gap-5 w-fit h-fit py-48 px-10">
            <img src="/Images/tweeeter1.png" alt="tweeter" />
            <img src="/Images/linkedin2.png" alt="linkedin" />
            <img src="/Images/Fb3.png" alt="fb" />
            <img src="/Images/Git4.png" alt="github" />
            <img src="/Images/Social5.png" alt="sociallink" />
            <img src="/Images/Social6.png" alt="sociallink" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
