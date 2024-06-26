import React from "react";
import service1 from "../resources/service1.png";
import service2 from "../resources/service2.png";
import service3 from "../resources/service3.png";
import service4 from "../resources/service4.png";
function AboutPage() {
  const info = [
    {
      title: "full auto service",
      description: "We work with quality and attention to detail.",
      image: service1,
    },
    {
      title: "customer service",
      description: "We offer an excellent customer service.",
      image: service2,
    },
    {
      title: "Efficiency",
      description: "We work fast and efficiently.",
      image: service3,
    },
    {
      title: "Affordable",
      description: "Best bang for the buck.",
      image: service4,
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="py-4">
        <span className="text-gray-500 font-bold font-dancing text-3xl">
          About
        </span>
        <h1 className="font-bold text-3xl font-chivo text-rose-900">
          Bini Autorepair INC
        </h1>
      </div>
      <span className="px-10 py-2 font-montserrat">
        Welcome to{" "}
        <span className="font-bold text-lg text-rose-900">
          Bini Autorepair INC
        </span>
        , your trusted auto repair shop in New York City. With over{" "}
        <span className="font-bold text-lg text-rose-900">25</span> years of
        experience, we have been providing exceptional service to our customers.
        Our team of skilled technicians is dedicated to delivering prompt,
        efficient, and high-quality workmanship on every job. At Bini Autorepair
        INC , we prioritize customer satisfaction and strive to exceed your
        expectations with personalized service tailored to your needs. With
        extensive experience across all areas of the auto industry, we have
        earned a reputation as the go-to destination for automotive services.
        Customers from all boroughs choose us for our outstanding service and
        attention to detail. Conveniently located at{" "}
        <span className="font-bold text-lg text-rose-900">
          10 Eastman Pl, Yonkers, NY 10701
        </span>
        , Bini Autorepair INC is your one-stop shop for all your auto repair
        needs. Trust us to provide top-notch service and get you back on the
        road safely.
      </span>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 py-12">
        {info.map((info) => {
          return (
            <div className="justify-center items-center flex flex-col">
              <div className="border rounded-full p-3 items-center bg-gray-200">
                <img
                  src={info.image}
                  alt={info.title}
                  className="w-8 h-8 opacity-50"
                ></img>
              </div>
              <h1 className="uppercase font-bold font-chivo"> {info.title}</h1>
              <span className="text-gray-500 font-montserrat">
                {info.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutPage;
