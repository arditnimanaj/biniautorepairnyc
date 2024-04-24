import React from "react";
import hero from "../resources/download.png";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="relative h-screen z-0 overflow-hidden">
      {" "}
      {/* Apply Tailwind CSS classes */}
      <img
        src={hero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>{" "}
      {/* Add a semi-transparent gray overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white py-20 md:px-32 border w-fit h-fit mx-auto my-auto bg-rose-900 opacity-60">
        <h1 className="text-2xl md:text-5xl font-bold max-w-md">
          WELCOME TO <br></br>BINI AUTOREPAIR INC
        </h1>
        <p className="text-center pt-2 font-bold max-w-sm md:max-w-lg">
          We offer you quality repairs with 25+ years of experience!
        </p>
      </div>
    </div>
  );
}

export default Hero;
