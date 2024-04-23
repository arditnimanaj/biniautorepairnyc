import React from "react";

function Hero() {
  return (
    <div className="flex flex-col gap-10 text-white bg-black py-20 ">
      {" "}
      <h1 className="w-full text-5xl items-center justify-center px-20 ">
        WELCOME TO BINI AUTOREPAIR INC
      </h1>
      <p>We offer you quality repairs with 25+ years of experience!</p>
      {/* <button className="border-rose-900 rounded-md bg-rose-900 px-4 py-2 text-white font-bold w-fit mx-auto">
        Contact me
      </button> */}
    </div>
  );
}

export default Hero;
