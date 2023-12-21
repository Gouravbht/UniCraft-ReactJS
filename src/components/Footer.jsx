import React from "react";
import { motion } from "framer-motion";
const fadeInAnimationvariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <>
      <div className=" w-full h-full">
        <img
          src="/Images/Home.png"
          alt="homePic"
          className=" w-full h-full absolute"
        />
        <motion.div
          variants={fadeInAnimationvariants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.7, duration: 0.7 }}
          viewport={{ once: true }}
          className=" flex flex-col items-center py-3 md:py-10 lg:py-12 "
        >
          <h1 className=" text-3xl md:text-5xl lg:text-6xl font-semibold relative w-[90%] md:w-[90%] lg:w-[50%] text-center py-2">
            No long-term contracts. No catches. Simple.
          </h1>
          <p className=" relative text-gray-500 py-3 md:py-4 lg:py-4 p-2 text-center">
            Start your 30-day free trial. Cancel anytime.
          </p>
          <button className=" items-center hover:bg-transparent relative text-lg font-medium border border-black text-white hover:text-black bg-black  px-8 md:px-10 lg:px-10 py-1 md:py-2 lg:py-2 rounded-md">
            Contact us
          </button>
        </motion.div>

        <motion.div
          variants={fadeInAnimationvariants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.7, duration: 0.7 }}
          viewport={{ once: true }}
          className=" flex flex-col md:flex-col lg:flex-row justify-between border border-t-gray-600 "
        >
          <div className=" p-4 md:p-7 lg:p-8  py-10 md:py-9 lg:py-32 ">
            <h1 className=" text-2xl font-semibold py-1 ">UniCraft</h1>
            <p className=" text-lg text-gray-500 font-medium py-1 relative">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
            <p className=" text-lg text-gray-500 font-medium py-3">
              © 2077 Untitled UI. All rights reserved.
            </p>
          </div>
          <div className=" relative flex gap-5 w-fit h-fit py-11 md:py-8 lg:py-48 px-5 lg:px-10">
            <img
              src="/Images/tweeeter1.png"
              alt="tweeter"
              className=" hover:scale-125"
            />
            <img
              src="/Images/linkedin2.png"
              alt="linkedin"
              className=" hover:scale-125"
            />
            <img src="/Images/Fb3.png" alt="fb" className=" hover:scale-125" />
            <img
              src="/Images/Git4.png"
              alt="github"
              className=" hover:scale-125"
            />
            <img
              src="/Images/Social5.png"
              alt="sociallink"
              className=" hover:scale-125"
            />
            <img
              src="/Images/Social6.png"
              alt="sociallink"
              className=" hover:scale-125"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
