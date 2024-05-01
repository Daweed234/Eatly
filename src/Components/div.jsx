import React from "react";

const Div = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <div className="bg-gray-200 shadow-lg w-[1200px] h-72 mt-64 rounded-lg">
            <div className="bg-purple-400 w-[1150px] h-64 ml-7 mt-4 rounded-lg">
              <div className="flex flex-row gap-12">
                <div className="flex flex-col">
                 <div className="flex flex-col text-center justify-center items-center ml-[410px]">
                 <p className="text-white font-semibold text-2xl mt-14 mb-4">
                    Get Started With <span className="text-[#FFA500]">Eatly</span>
                  </p>
                  <p className="text-sm mb-6 text-white">
                    Discover tips & news for your health form experts <br />
                    and get the best discounts by getting started.
                  </p>
                  <button className="bg-[#FFA500] px-4  py-3 mt-2 text-sm rounded-lg">Get Started</button>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Div;