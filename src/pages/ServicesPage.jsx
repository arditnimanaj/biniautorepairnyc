import React from "react";
import headgasket from "../resources/headgasket.png";
import axle from "../resources/axle.png";
import brakes from "../resources/brakes.png";
import alternator from "../resources/alternator.png";
import ac from "../resources/ac.png";
import tires from "../resources/tires.png";
import oilchange from "../resources/oilchange.png";
import cardiagnostic from "../resources/cardiagnostic.png";
import clutch from "../resources/clutch.png";
import turbo from "../resources/turbo.png";
import transmission from "../resources/transmission.png";
import carengine from "../resources/carengine.png";
import logo from "../resources/blacklogo.png";
function ServicesPage() {
  const services = [
    {
      title: "Head Gasket",
      img: headgasket,
    },
    {
      title: "Axle",
      img: axle,
    },
    {
      title: "Brakes",
      img: brakes,
    },
    {
      title: "Alternator",
      img: alternator,
    },
    {
      title: "AC",
      img: ac,
    },
    {
      title: "Tires",
      img: tires,
    },
    {
      title: "Oil Change",
      img: oilchange,
    },
    {
      title: "Car Diagnostic",
      img: cardiagnostic,
    },
    {
      title: "Clutch",
      img: clutch,
    },
    {
      title: "Turbo",
      img: turbo,
    },
    {
      title: "Transmission",
      img: transmission,
    },
    {
      title: "Car Engine",
      img: carengine,
    },
  ];
  return (
    <div>
      <div className="block md:flex px-6 md:px-40 py-20 gap-10">
        <div className="w-full md:w-[50%] mx-auto flex flex-col gap-4">
          <h1 className="font-bold text-xl font-montserrat text-rose-900">
            Services you can trust us
          </h1>
          <div className="grid grid-cols-2 border-4 bg-zinc-200 rounded-md ">
            {services.map((service) => {
              return (
                <div className="items-center flex gap-1 px-1 py-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-10 h-10 grayscale"
                  ></img>
                  <h1 className="uppercase font-chivo text-sm">
                    {service.title}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-10 md:pt-0 md:w-[50%] mx-auto">
          <div className="flex flex-col gap-4 font-montserrat">
            <h1 className="font-bold text-xl font-chivo text-rose-900">
              Your Trusted Auto Repair Destination in NYC
            </h1>
            <span>
              Welcome to Bini Autorepair INC, your premier destination for
              automotive services in New York City.
            </span>
            <span>
              {" "}
              Located at 10 Eastman Pl, Yonkers, NY 10701, we bring over 25
              years of expertise and dedication to every vehicle we service. At
              Bini Autorepair INC, we pride ourselves on delivering top-quality
              automotive solutions tailored to your needs.{" "}
            </span>
            <span>
              From routine maintenance to complex repairs, our team of
              experienced technicians is committed to providing exceptional
              service and ensuring your vehicle operates at its best. From oil
              changes to engine and transmission swaps, we offer a comprehensive
              range of services designed to meet all your automotive needs. With
              our attention to detail and commitment to excellence, you can
              trust us to keep your vehicle running smoothly and reliably on the
              road.{" "}
            </span>
            <span className="text-rose-900 font-bold">
              {" "}
              Book your appointment with Bini Autorepair INC today and
              experience the difference of our unparalleled service and
              expertise.
            </span>
          </div>
        </div>
      </div>
      <span className="mx-auto flex justify-center text-gray-600 font-dancing text-2xl">
        and many more...
      </span>
      <a
        href="tel:+13475820864"
        className="flex flex-col gap-2 pb-4 font-chivo"
      >
        <p className=" font-bold text-3xl text-rose-900">CALL US NOW !! </p>
        <span className=" font-bold text-3xl text-rose-900">+13475820864</span>
      </a>
      <h1 className="mx-auto flex justify-center text-gray-600 font-dancing text-2xl">
        or visit us
      </h1>
      <div className="px-10 md:px-20 py-10">
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          title="map"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BiniAutoRepairINC,%2010%20Eastman%20Pl,%20Yonkers,%20NY%2010701,%20United%20States+(Bini%20Autorepair%20INC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
      <img
        src={logo}
        alt=""
        className="w-30 h-20 object-contain opacity-80 mx-auto"
      ></img>
    </div>
  );
}

export default ServicesPage;
