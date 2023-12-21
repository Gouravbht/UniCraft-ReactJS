import React, { Children } from "react";
import { motion, AnimatePresence } from "framer-motion";
const PageWrapper = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div>{children}</motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
