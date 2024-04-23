import React from "react";
import "../components/services.css";
import logo1 from "../resources/carLogo/carlogo (1).svg";
import logo2 from "../resources/carLogo/carlogo (2).svg";
import logo3 from "../resources/carLogo/carlogo (3).svg";
import logo4 from "../resources/carLogo/carlogo (4).svg";
import logo5 from "../resources/carLogo/carlogo (5).svg";
import logo6 from "../resources/carLogo/carlogo (6).svg";
import autorepair from "../resources/auto-repair.png";
import autotune from "../resources/autotune.png";
import preventive from "../resources/preventive.png";
import brake from "../resources/brake.png";
import engine from "../resources/engine.png";
import inspection from "../resources/inspection.png";
function Services() {
  const services = [
    {
      name: "Auto Repair",
      description:
        "Our expert technicians provide comprehensive auto repair services to address any issues with your vehicle. From engine repairs to electrical diagnostics, we've got you covered.",
      img: autorepair,
    },
    {
      name: "Auto Tune Ups",
      description:
        "Keep your vehicle running smoothly with our professional auto tune-up services. We'll inspect and optimize your engine, fluids, and components to ensure peak performance and fuel efficiency.",
      img: autotune,
    },
    {
      name: "Preventive Maintenance",
      description:
        "Stay ahead of costly repairs with our preventive maintenance services. We'll perform regular inspections and maintenance tasks to keep your vehicle in top condition and minimize the risk of breakdowns.",
      img: preventive,
    },
    {
      name: "Vehicle Inspection",
      description:
        "Ensure your vehicle meets safety and performance standards with our thorough vehicle inspection services. Our certified technicians will inspect all major components and provide detailed reports.",
      img: inspection,
    },
    {
      name: "Engine Diagnostics",
      description:
        "Identify and resolve engine problems quickly with our advanced engine diagnostics services. Using state-of-the-art equipment, we'll pinpoint issues and recommend the best course of action for repairs.",
      img: engine,
    },
    {
      name: "Brake Service",
      description:
        "Maintain optimal stopping power and safety with our professional brake services. We'll inspect, repair, and replace brake components as needed to ensure your vehicle stops smoothly and reliably.",
      img: brake,
    },
  ];

  const images = [
    {
      src: logo1,
      alt: "Car Logo",
    },
    {
      src: logo2,
      name: "Model S",
    },
    {
      src: logo3,
      alt: "Car Logo",
    },
    {
      src: logo4,
      alt: "Car Logo",
    },
    {
      src: logo5,
      alt: "Car Logo",
    },
    {
      src: logo6,
      alt: "Car Logo",
    },
  ];
  return (
    <div className="py-4">
      <h1 className="font-bold text-2xl mb-10">
        Bini Autorepair INC in New York
      </h1>

      <p className="px-32">
        <span className="font-bold text-lg">Bini Autorepair INC</span> is a
        trusted auto repair shop located in New York City. With over 25 years of
        experience, we have been serving the community with excellence and
        dedication. Our team of skilled technicians is proficient in handling
        any kind of car and tackling a wide range of problems. From minor
        repairs to major overhauls, including engine replacements, we are
        equipped to handle it all. Trust us to keep your vehicle running
        smoothly and safely on the road.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-14 pt-16 pb-8">
        {services.map((service) => {
          return (
            <div
              className="p-14 border rounded-lg justify-center gap-3 flex flex-col"
              key={service.name}
            >
              <div className="border rounded-full p-4 bg-rose-800 w-fit mx-auto">
                <img alt="" src={service.img} className="w-20 h-20 mx-auto" />
              </div>
              <h1 className="font-bold text-lg">{service.name}</h1>
              <span>{service.description}</span>
            </div>
          );
        })}
      </div>
      <button className="border-rose-900 rounded-lg px-4 py-2 bg-rose-900 text-white font-bold">
        Explore our services
      </button>
      <div className="hidden md:flex justify-around px-4 py-20 ">
        {images.map((image) => {
          return (
            <img
              src={image.src}
              alt={image.alt}
              className="w-20 h-20 opacity-40 hover:opacity-100"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
