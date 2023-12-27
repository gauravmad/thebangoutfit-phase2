import React from "react";

export default function HomeBanner() {
  return (
    <div className="background w-[90%] mx-auto md:h-[75vh] rounded-md shadow-md bg-pink-200 flex flex-col justify-center  my-[4vh]">
      <div className="flex flex-col md:pl-[15vh] md:w-[55vw] w-[60vw] p-[2vh] justify-center items-start">
        <h1 className="md:text-[8vh] text-[3vh] font-bold text-pink-600 ">
          Discover Your Style
        </h1>
        <p className="md:text-[4vh] font-medium text-[#C68F70]  ">
          Explore the Latest Trends in Fashion
        </p>
        <p className="md:text-[2.2vh] text-[1.5vh]  text-gray-500 my-[2vh]">
          Embark on a journey of self-expression through fashion with our latest
          collection. Immerse yourself in a world where style knows no bounds,
          and individuality reigns supreme. Our carefully curated pieces are
          designed to empower and inspire, elevating your everyday wardrobe to
          extraordinary heights.
        </p>
      </div>
    </div>
  );
}
