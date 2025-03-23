import React from "react";

import { FaCanadianMapleLeaf } from "react-icons/fa6";

import { SiPaytm } from "react-icons/si";

import { TbLink } from "react-icons/tb";

import { SiHyperx } from "react-icons/si";

function Collabs() {
  const events = [
    {
      title: "Paytm Insider",
      date: "Sep 03, 2024",
      description:
        "Paytm Insider is one of India's largest platforms to discover and find tickets to exciting live events and experiences in the country. ",
      icon: <SiPaytm className="text-blue-900 text-3xl" />,
    },

    {
      title: "Blinkit",
      date: "Jun 24, 2022",
      description:
        "When we talk about the companies under Zomato, the first name that comes to mind is Blinkit.",
      icon: <TbLink className="text-yellow-600 text-3xl" />,
    },

    {
      title: "HyperPure",
      date: "Aug 12, 2018",
      description:
        "Hyperpure is Zomato’s B2B food supply platform, acquired in August 2018 through the takeover of Bengaluru-based startup WOTU.",
      icon: <SiHyperx className="text-red-900 text-3xl" />,
    },

    {
      title: "MapleGraph",
      date: "Apr 14, 2015",
      description:
        "The company is all about building cloud-based and mobile-based solutions for everyone.",
      icon: <FaCanadianMapleLeaf className="text-green-900 text-3xl" />,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 -mt-75">
      <h2 className="text-4xl font-bold text-center mb-8 font-serif">
        Our Journey
      </h2>
      <div className="relative border-l-4 border-blue-500 pl-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="mb-8 relative p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="absolute -left-12  top-4 bg-blue-500 text-white w-15 h-15 flex items-center justify-center rounded-full shadow-lg">
              {event.icon}
            </div>

            {/* Event Details */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md ml-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {event.title}
              </h3>
              <p className="text-gray-500 text-sm">{event.date}</p>
              <p className="mt-2 text-gray-700 leading-relaxed ">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collabs;
