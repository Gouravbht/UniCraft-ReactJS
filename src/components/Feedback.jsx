import React from "react";
import { motion } from "framer-motion";
const fadeInAnimationvariants = {
  initial: { opacity: 0, y: 150 },
  animate: { opacity: 1, y: 0 },
};

const Feedback = () => {
  return (
    <>
      <div className=" bg-gray-100  md:py-16 lg:py-20 w-full h-screen">
        <div className=" bg-gray-200 w-full h-[830px] md:h-[750px] lg:h-[600px] py-20 md:py-16 lg:py-20 ">
          <motion.div
            variants={fadeInAnimationvariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
            className=" flex justify-center gap-2 h-4 md:h-5 lg:h-7"
          >
            <img src="/Images/logo.png" alt="logo" />
            <img src="/Images/logotype.png" alt="logotype" />
          </motion.div>
          <motion.div
            variants={fadeInAnimationvariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
            className=" flex flex-col items-center"
          >
            <h1 className=" py-8 md:py-10 lg:py-10 text-3xl md:text-5xl lg:text-5xl w-[90%] md:w-[80%] lg:w-[80%] font-medium text-center">
              We've been with unicraft to kick start every new project and can't
              imagine working without it.
            </h1>
            <img
              src="/Images/Avatar.png"
              alt="avatar"
              className=" w-14 lg:w-16 py-2"
            />
            <h2 className=" text-md font-medium">Candice Wu</h2>
            <p className=" text-gray-500">Product Manager, Sisyphus</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
