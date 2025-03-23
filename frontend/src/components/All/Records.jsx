import React from "react";
import ProfileCard from "../Cards/CardsTemplate/ProfileCard"
//import Image from '../../Assets/AboutUs/profile.jpg';
function Records() {
  return (
    <div>
      <div className="container mx-auto p-6">
        {/* Team Section */}
        <div><h1 className="text-center font-mono font-black text-4xl p-3 mb-6">Our Team Members</h1></div>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 -mb-50">
          <ProfileCard name="Ashutosh Anand" designation="Full-Stack Web Developer" description="Passionate Full Stack Developer building scalable, efficient web solutions. Eager to learn, grow, and apply skills to real-world challenges."/>

          <ProfileCard name="Ayushman Ghatuary" designation="Front-End Web Developer" description="Eager to learn and grow by applying my skills to real world challenges. Passionate about front-end development and actively exploring."/>

          <ProfileCard name="Barun Kumar Kuiry" designation="Full-Stack Web Developer" description="Full Stack Developer creating seamless, high-performance web applications. Passionate about learning, growing, and solving real-world challenges efficiently."/>

          <ProfileCard name="Kunal Kumar Choubey" designation="Front-End Web Developer" description="Passionate Front-End Developer crafting responsive, user-friendly interfaces. Eager to learn, grow, and apply skills to real-world challenges."/>

          <ProfileCard name="Saurabh Prasad" designation="Full-Stack Web Developer" description="Skilled Full Stack Developer building user-friendly, scalable solutions. Continuously learning, tackling real-world development challenges with passion."/>
        </section>

        {/* Values Section */}
        <section className="-mt-60 mb-10">
          <h2 className="text-4xl font-mono text-center p-3 font-black ">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-2xl">
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="text-gray-700 leading-relaxed">
                "Our customers are at the heart of everything we do. We go the extra mile to understand their needs and deliver solutions that exceed expectations."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-2xl">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                "We embrace change and creativity, constantly pushing boundaries to drive progress and deliver cutting-edge solutions."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-2xl">
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-700 leading-relaxed">
                "Honesty and transparency guide us. We uphold the highest ethical standards in every decision we make."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Records;
