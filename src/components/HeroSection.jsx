import React from "react";

const HeroSection = () => {
  return (
    <>
      {" "}
      <div className=" relative w-full h-screen herosection">
        <img
          src="/Images/Home.png"
          alt="HomeImage"
          className=" absolute w-full h-screen "
        />
        <nav className=" hidden lg:flex justify-between p-8 ">
          <h1 className=" justify-start font-bold text-xl">UniCraft</h1>
          <div className=" font-medium text-lg ">
            {" "}
            <span className=" px-4 hover:underline relative cursor-pointer">
              How it works
            </span>
            <span className=" px-4 hover:underline relative cursor-pointer">
              Pricing
            </span>
            <span className=" px-4 hover:underline relative cursor-pointer">
              FAQ
            </span>
          </div>

          <button className=" relative font-semibold border border-black text-black hover:bg-black hover:text-white rounded-md p-2 px-4">
            Contact us
          </button>
        </nav>
        <header className=" flex flex-col items-center py-8 md:py-9 lg:py-20 w-full relative">
          <h1 className=" text-4xl md:text-6xl lg:text-7xl font-bold text-center w-[95%] md:w-[80%] lg:w-[80%] py-6 md:py-4 lg:py-4">
            Elevate Your Presence with Seamless Design and Innovation.
          </h1>
          <p className=" p-2 text-center py-4 md:py-5 lg:py-5 font-medium text-gray-500">
            From strategic planning to digital presence, we're your dedicated
            partner in achieving solo success.
          </p>
          <button className=" relative border border-gray-600 bg-black hover:bg-transparent rounded-lg p-3 px-7 text-white hover:text-black font-medium">
            View Pricing
          </button>
        </header>
        <div className=" flex flex-col items-center relative ">
          <p className=" text-xs text-gray-400 font-medium">
            Trusted By 250+ Companies
          </p>
          <div className=" flex flex-wrap md:flex-row justify-center lg:flex-row p-2 md:p-6 lg:p-2 gap-7 md:gap-14 lg:gap-20 py-9 md:py-5 lg:py-5">
            <span>
              <img src="/Images/Zapier.png" alt="Zapier" />
            </span>
            <span>
              <img src="/Images/Spotify.png" alt="Zapier" />
            </span>
            <span>
              <img src="/Images/Zoom.png" alt="Zapier" />
            </span>
            <span>
              <img src="/Images/Slack.png" alt="Zapier" />
            </span>
            <span>
              <img src="/Images/Amazon.png" alt="Zapier" />
            </span>
            <span>
              <img src="/Images/Adobe.png" alt="Zapier" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
