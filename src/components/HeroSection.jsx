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
        <nav className=" flex justify-between p-8">
          <h1 className=" justify-start font-bold text-xl">UniCraft</h1>
          <div className=" font-medium text-lg">
            {" "}
            <span className=" px-4">How it works</span>
            <span className=" px-4">Pricing</span>
            <span className=" px-4">FAQ</span>
          </div>

          <button className=" font-semibold border border-black rounded-md p-2 px-4">
            Contact us
          </button>
        </nav>
        <header className=" flex flex-col items-center py-20 w-full relative">
          <h1 className=" text-7xl font-bold text-center w-[80%] py-4">
            Elevate Your Presence with Seamless Design and Innovation.
          </h1>
          <p className=" py-5 font-medium text-gray-500">
            From strategic planning to digital presence, we're your dedicated
            partner in achieving solo success.
          </p>
          <button className=" border bg-black rounded-lg p-3 px-7 text-white font-medium">
            View Pricing
          </button>
        </header>
        <div className=" flex flex-col items-center relative ">
          <p className=" text-xs text-gray-400 font-medium">
            Trusted By 250+ Companies
          </p>
          <div className=" flex gap-20 py-5">
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
