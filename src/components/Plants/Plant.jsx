import React from "react";
import plantBg from "../../assets/pexels-akilmazumder-1072824.jpg"; 
import "./plant.css"

const Plant = () => {
  return (
    <div
      className="min-h-screen w-full bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${plantBg})` }}
    >
      <h1 className="text-white text-4xl font-bold playwrite-de-sas-regular">
        Welcome to the Plants Page
      </h1>
    </div>
  );
};

export default Plant;