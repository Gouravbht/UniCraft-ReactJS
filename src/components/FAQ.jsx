import React, { useState } from "react";
import { motion } from "framer-motion";
const fadeInAnimationvariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};
const FAQ = () => {
  const [accordion, setAccordion] = useState([]);

  const toggleAccordion = (index) => {
    setAccordion((prevAccordion) => {
      const newAccordion = [...prevAccordion];
      newAccordion[index] = !newAccordion[index];
      return newAccordion;
    });
  };

  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "According to our policy you can change your plan",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Once a service is canceled, refunds are not provided. The cancellation will take effect at the end of the current billing cycle.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Additional information can be added to an invoice by contacting our customer support and providing the necessary details. Customizations may be subject to applicable fees.",
    },
    {
      question: "How does billing work??",
      answer:
        "Billing occurs on a monthly basis, starting from the date of subscription. Charges are automatically processed using the payment method on file. Detailed billing statements are accessible through your account.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "To change your account email, log in and go to account settings. Select the option to update email and follow the prompts to complete the change. Ensure the new email is verified for security purposes.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <>
      <div className="w-full h-full bg-slate-100 py-6">
        <div className="flex flex-col items-center py-6 md:py-10 lg:py-12">
          <motion.h1
            variants={fadeInAnimationvariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className=" text-4xl text-center md:text-5xllg:text-6xl font-semibold py-3"
          >
            Frequently asked questions
          </motion.h1>
          <motion.p
            variants={fadeInAnimationvariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.7, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-sm font-medium p-2 text-center text-gray-500"
          >
            Everything you need to know about the product and billing.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInAnimationvariants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.9, duration: 0.9 }}
          viewport={{ once: true }}
          className=" flex flex-col items-center py-2 px-2"
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-3xl my-5 border-b border-gray-400 p-1 "
            >
              <div
                className="flex items-center justify-between py-2 px-4 bg-gray-100 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <p className="text-lg font-medium">{item.question}</p>
                <span className=" text-lg font-medium">
                  {accordion[index] ? "-" : "+"}
                </span>
              </div>
              {accordion[index] && (
                <div className="bg-gray-100 border border-gray-100 p-4">
                  <p className="text-gray-500 font-medium">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default FAQ;
