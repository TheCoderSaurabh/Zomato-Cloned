import React from "react";
import Image from "../../Assets/AboutUs/background.jpg";

function AboutPage() {
  return (
    <div
      className="h-120 bg-cover bg-center text-white text-center rounded-8px p-45 opacity-80 flex items-center justify-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="bg-[rgba(0,0,1,0.82)] max-w-[800px] rounded-[10px] p-2 m-0,auto ">
        {" "}
        <h1 className="text-3xl"> Welcome to ZOMATO </h1>
        <p className="p-3 font-thin">
          Your go-to platform for discovering and ordering the best food around.
          We believe in 'seamless food experiences', whether you're craving a
          quick bite or fine dining. Our mission is to connect food lovers with
          top restaurants, making every meal 'convenient and delightful'.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;