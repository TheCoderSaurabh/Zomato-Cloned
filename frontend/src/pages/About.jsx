import React from "react";
//import ProfileCard from "../components/Cards/CardsTemplate/ProfileCard";
import AboutUs from '../components/All/AboutPage';
import Foot from '../components/All/Foot';
import Card from  '../components/All/Card';
import Records from '../components/All/Records';
import Collabs from '../components/All/Collabs';

function About(){
  return (
    <>
    <AboutUs/>
    <Card/>
    <Collabs/>
    <Foot/>
    <Records/>
    </>
  );
};

export default About;