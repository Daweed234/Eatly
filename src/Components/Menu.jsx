import React from "react";
import Image from "../Img/image.jpeg";

const Menu = () => {
  return (
    <>
      <div className=" flex flex-row ml-20 gap-32 ">
        {/* right side  */}
        <div className="mt-20">
          <p className="font-bold text-xl">Try Our Free Menu</p>
          <p className="mt-3 text-sm">
            We provide a variety of healthy recipes that have <br />
            been curated by our best nutritionists for you
          </p>
          <div className="bg-purple-400 h-20 w-56 rounded-lg shadow-lg border-4 mt-4">
            <p className="text-center font-bold mt-5">Breakfast Recipes</p>
          </div>
          <div className="bg-purple-400 h-20 w-56 rounded-lg shadow-lg border-4 mt-4">
            <p className="text-center font-bold mt-5">Low-Calorie Recipes</p>
          </div>
          <div className="bg-purple-400 h-20 w-56 rounded-lg shadow-lg border-4 mt-4">
            <p className="text-center font-bold mt-5">Holiday Recipes</p>
          </div>
           <div className="bg-purple-400 h-20 w-56 rounded-lg shadow-lg border-4 mt-4">
            <p className="text-center font-bold mt-5">Restriction Recipes</p>
          </div>
        </div>
        {/* left side  */}
        <div className="mt-20 flex flex-row gap-10">
        <div className=" bg-gray-300 w-80 h-[475px]  rounded-t-full border-8 border-white shadow-custom text-center">
            <div className="flex justify-center">
              <img className="rounded-t-full h-64 w-64 mt-5" src={Image} alt="" />
            </div>
            <p className="mt-10">Red Onions With <br />Chopped Cabbage</p>
            <button className="px-2 py-2 bg-[#FFA500] rounded-md mt-5">Try Now</button>
          </div>
          <div className=" bg-gray-300 w-80 h-[475px]  rounded-t-full border-8 border-white shadow-custom text-center">
            <div className="flex justify-center">
              <img className="rounded-t-full h-64 w-64 mt-5" src={Image} alt="" />
            </div>
            <p className="mt-10">Red Onions With <br />Chopped Cabbage</p>
            <button className="px-2 py-2 bg-[#FFA500] rounded-md mt-5">Try Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
