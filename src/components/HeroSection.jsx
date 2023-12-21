import React from "react";
import { motion } from "framer-motion";

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
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            viewport={{ once: true }}
            className=" text-4xl md:text-6xl lg:text-7xl font-bold text-center w-[95%] md:w-[80%] lg:w-[80%] py-6 md:py-4 lg:py-4"
          >
            Elevate Your Presence with Seamless Design and Innovation.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            viewport={{ once: true }}
            className=" p-2 text-center py-4 md:py-5 lg:py-5 font-medium text-gray-500"
          >
            From strategic planning to digital presence, we're your dedicated
            partner in achieving solo success.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            viewport={{ once: true }}
            className=" relative border border-gray-600 bg-black hover:bg-transparent rounded-lg p-3 px-7 text-white hover:text-black font-medium"
          >
            View Pricing
          </motion.button>
        </header>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          viewport={{ once: true }}
          className=" flex flex-col items-center relative "
        >
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
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
