import React from "react";

function Card() {
  return (
    <div className="flex justify-around items-start mt-15 h-[80vh] ">
      {/* First Box */}
      <div className="h-[30vh] w-[40vw] border-2 rounded-3xl border-solid text-center flex flex-col justify-center items-center shadow-lg transition-transform transform hover:scale-101 hover:shadow-2xl hover:shadow-red-200">
        <h1 className="flex items-center font-mono font-bold text-2xl text-red-900">
          Our Mission
        </h1>
        <p className="mt-2 justify-center text-center flex p-5">
          At Zomato, our mission is to connect food lovers with their favorite
          restaurants effortlessly. We strive to create a seamless platform that
          makes ordering food, discovering new places, and enjoying great meals
          easier than ever.
        </p>
      </div>

      {/* Second Box (Copy) */}
      <div className="h-[30vh] w-[40vw] border-2 rounded-3xl border-solid text-center flex flex-col justify-center items-center shadow-lg transition-transform transform hover:scale-101 hover:shadow-2xl  hover:shadow-red-200">
        <h1 className=" flex items-center font-mono font-bold text-2xl text-red-900">
          Our Story
        </h1>
        <p className=" mt-2 justify-center flex text-center px-5 py-3 ">
          Born out of a passion for food and technology, Zomato was created to
          bring the best dining experiences to your fingertips. We are committed
          to innovation, quality, and customer satisfaction, making every meal a
          delightful experience. 🍽 Would you like any specific branding elements
          added? 🚀
        </p>
      </div>
    </div>
  );
}

export default Card;
