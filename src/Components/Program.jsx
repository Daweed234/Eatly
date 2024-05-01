import React from "react";
import Image from "../Img/image.jpeg";

const Program = () => {
  return (
    <div className="h-screen ml-20 mt-48">
      <div>
        <div>
          <p className="text-4xl font-semibold mb-10">Our Programs</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-gray-200 shadow-lg w-[1000px] h-48 mt-7 rounded-lg">
            <div className="bg-purple-400 w-[950px] h-40 mt-3 ml-7 rounded-lg">
              <div className="flex flex-row gap-12">
                <div className="flex flex-col">
                  <p className="text-white text-lg font-medium px-4 py-8">
                    Healthy recipe
                  </p>
                  <p className="text-white text-sm px-4 py-">
                    Healthier Recipes, from <br />
                    food & nutrition experts
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white text-lg font-medium px-4 py-8">
                    Healthy Meals
                  </p>
                  <p className="text-white text-sm px-4 py-">
                    Learn how to become <br />a meal-planning pro
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-black text-lg font-medium px-4 py-8">
                    Healthy Eating
                  </p>
                  <p className="text-black text-sm px-4 py-">
                    Eat healthy with our <br />
                    expert & inspiration tips
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white text-lg font-medium px-4 py-8">
                    Healthy Lives
                  </p>
                  <p className="text-white text-sm px-4 py-">
                    Your life is your choice <br />
                    make yourself healthier.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-orange-500 w-[200px] h-52 -mt-52 ml-[500px] rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-24 gap-32 justify-center items-center">
        <div>
          <img src={Image} alt="" />
        </div>
        <div className="flex flex-col ">
          <p className="font-medium text-lg">Our Values To help you</p>
          <p className="font-light text-sm mt-2">
            We always want to provide the best value for you <br />
            and your health, join us to maximize the benefits.
          </p>
          <div>
            <div className="flex flow-row gap-5">
            <div className="bg-white border-gray-900 rounded-md shadow-md px-4 w-44 py-2 mt-5">
              <p className="text-lg font-medium mt-5">Thrive Better</p>
              <p className="text-xs mt-3">Immune will stronger if <br />the body is healthier</p>
            </div>
            <div className="bg-white border-gray-900 rounded-md shadow-md px-4 w-44 py-2 mt-5">
              <p className="text-lg font-medium mt-5">Thrive Better</p>
              <p className="text-xs mt-3">Immune will stronger if <br />the body is healthier</p>
            </div>
            </div>
            <div className="flex flow-row gap-5">
            <div className="bg-white border-gray-900 rounded-md shadow-md px-4 w-44 py-2 mt-5">
              <p className="text-lg font-medium mt-5">Thrive Better</p>
              <p className="text-xs mt-3">Immune will stronger if <br />the body is healthier</p>
            </div>
            <div className="bg-white border-gray-900 rounded-md shadow-md px-4 w-44 py-2 mt-5">
              <p className="text-lg font-medium mt-5">Thrive Better</p>
              <p className="text-xs mt-3">Immune will stronger if <br />the body is healthier</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;