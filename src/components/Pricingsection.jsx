import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationvariants = {
  initial: { opacity: 0, x: -150 },
  animate: { opacity: 1, x: 0 },
};

const Pricingsection = () => {
  const cards = [
    {
      name: "Freebie",
      description: "Ideal for quick and basic features.",
      price: "$0",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
        "Feature 7",
      ],
    },
    {
      name: "Professional",
      description: "Ideal for businesses with advanced needs.",
      price: "$25",
      features: [
        "Premium Feature 1",
        "Premium Feature 2",
        "Premium Feature 3",
        "Premium Feature 4",
        "Premium Feature 5",
        "Premium Feature 6",
        "Premium Feature 7",
      ],
    },
    {
      name: "Enterprise",
      description: "Ideal for medium-sized businesses.",
      price: "$100",
      features: [
        "Standard Feature 1",
        "Standard Feature 2",
        "Standard Feature 3",
        "Standard Feature 4",
        "Standard Feature 5",
        "Standard Feature 6",
        "Standard Feature 7",
      ],
    },
    // Add more cards as needed
  ];

  return (
    <>
      <div className="w-full h-full md:h-full lg:h-screen py-5 md:py-4 lg:py-0">
        <img
          src="/Images/Home.png"
          alt="homepic"
          className=" hidden lg:block w-full h-screen absolute"
        />
        <div className="flex flex-col items-center py-10 md:py-10 lg:py-10">
          <h1 className="text-2xl md:text-5xl lg:text-6xl text-center font-semibold relative p-2 py-2 md:py-0 lg:py-0">
            Pricing made for collaborative support.
          </h1>
          <p className="text-gray-500 relative font-thin text-sm md:text-sm lg:text-lg md:font-medium lg:font-medium py-1 md:py-3 lg:py-1 w-[90%] md:w-[85%] lg:w-[45%%] text-center">
            Plain is made for your entire company. Only pay for users that
            actually message customers. Everyone else is free, forever.
          </p>
        </div>

        <div className="flex flex-col md:flex-wrap md:flex-row lg:flex-row lg:justify-center md:justify-center items-center gap-4 md:gap-5 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              variants={fadeInAnimationvariants}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
              key={index}
              className={`relative w-[340px] md:w-[350px] lg:w-[450px] h-fit rounded-lg p-2 md:p-5 border border-gray-300 shadow-sm hover:shadow-xl ${
                index === 1 ? "bg-gray-700 text-white" : "bg-gray-100"
              }`}
            >
              <h1 className="text-2xl py-2 md:py-2 lg:py-1 font-semibold">
                {card.name}
              </h1>
              <p
                className={`text-sm font-medium ${
                  index === 1 ? "text-gray-400" : "text-gray-500"
                } py-2`}
              >
                {card.description}
              </p>
              <h1 className="py-2 md:py-4 lg:py-4">
                <span className="text-4xl font-medium">{card.price}</span>{" "}
                <span>/ Month</span>
              </h1>
              <button
                className={`border ${
                  index === 1 ? "bg-white text-black" : "border-gray-500"
                } text-sm px-14 md:px-16 lg:px-24 rounded-md py-2 font-semibold`}
              >
                Get Started Now
              </button>
              <div className="py-3">
                {card.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex flex-row list-none py-2 gap-2"
                  >
                    {index === 1 ? (
                      <img
                        src="/Images/white-tick.png"
                        alt="whitetick"
                        className="w-5 h-5"
                      />
                    ) : (
                      <img
                        src="/Images/tick.png"
                        alt="tick"
                        className="w-5 h-5"
                      />
                    )}

                    <span>{feature}</span>
                  </li>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricingsection;
