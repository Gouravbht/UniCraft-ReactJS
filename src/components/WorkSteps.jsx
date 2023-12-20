import React from "react";

const WorkSteps = () => {
  let stepsContent = [
    {
      id: 1,
      title: "Subscribe",
      description:
        "Subscribe to a plan & you'll get an instant access to your private Slack channel.",
    },
    {
      id: 2,
      title: "Request",
      description:
        "Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours",
    },
    {
      id: 3,
      title: "Review",
      description:
        "Need changes? We guarantee unlimited revisions until you're 200% satisfied.",
    },
  ];

  return (
    <>
      <div className=" herosection w-full h-screen flex justify-center bg-gray-100">
        <div className=" bg-white w-[85%] h-[750px] border border-gray-200 rounded-3xl">
          <div className=" flex flex-col items-center p-10">
            <h1 className=" text-6xl font-medium py-1">How it works</h1>
            <p className=" py-2 text-md text-gray-500 font-medium">
              Premium designs, unlimited requests, super fast delivery, for one
              flat monthly fee.
            </p>
          </div>
          <div className="flex p-5">
            {stepsContent.map((item, i) => {
              if (i === stepsContent.length - 1) {
                return (
                  <HowItWorksCard
                    index={item.id}
                    title={item.title}
                    description={item.description}
                  />
                );
              } else
                return (
                  <>
                    <HowItWorksCard
                      index={item.id}
                      title={item.title}
                      description={item.description}
                    />
                    <div>
                      <img
                        src="/Images/arrow.png"
                        alt="Arrow"
                        className=" w-32"
                      />
                    </div>
                  </>
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSteps;

const HowItWorksCard = (props) => {
  return (
    <div className=" flex flex-col items-center justify-end relative w-[400px] h-[300px]">
      <h1 className="text-[240px] font-bold absolute translate-y-2 opacity-90 gradient-number">
        {props.index}
      </h1>
      <div className="z-10 text-center">
        <h2 className=" text-2xl font-bold p-1">{props.title}</h2>
        <p className=" text-gray-500 text-sm w-full font-medium p-1">
          {props.description}
        </p>
      </div>
    </div>
  );
};
