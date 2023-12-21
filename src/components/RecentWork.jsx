import React from "react";
import { motion } from "framer-motion";
const fadeInAnimationvariants = {
  initial: { opacity: 0, x: -150 },
  animate: { opacity: 1, x: 0 },
};

const RecentWork = () => {
  return (
    <>
      <div className=" hidden lg:block herosection bg-gray-100 w-full h-screen  py-24">
        <motion.div
          variants={fadeInAnimationvariants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex"
        >
          <div className=" flex justify-between  lg:gap-28 lg:py-12">
            <span>
              <img src="/Images/Recentwork/img1.png" alt="RecentWorkImg1" />
            </span>
            <span>
              <img src="/Images/Recentwork/im2.png" alt="RecentWorkImg1" />
            </span>
            <span>
              <img src="/Images/Recentwork/img3.png" alt="RecentWorkImg1" />
            </span>
            <span>
              <img src="/Images/Recentwork/img4.png" alt="RecentWorkImg1" />
            </span>
            <span>
              <img src="/Images/Recentwork/img5.png" alt="RecentWorkImg1" />
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInAnimationvariants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: true }}
          className=" flex justify-center"
        >
          <button className=" flex justify-center border border-black hover:bg-black hover:text-white p-2 rounded-md px-6 font-medium text-gray-600">
            View recent work
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default RecentWork;
