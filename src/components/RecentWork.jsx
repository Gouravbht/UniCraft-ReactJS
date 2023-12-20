import React from "react";

const RecentWork = () => {
  return (
    <>
      <div className=" herosection bg-gray-100 w-full h-screen  py-24">
        <div className="flex">
          <div className=" flex justify-between gap-28 py-12">
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
        </div>
        <div className=" flex justify-center">
          <button className=" flex justify-center border border-black p-2 rounded-md px-6 font-medium text-gray-600">
            View recent work
          </button>
        </div>
      </div>
    </>
  );
};

export default RecentWork;
