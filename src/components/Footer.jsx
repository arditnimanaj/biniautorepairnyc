import React from "react";

function Footer() {
  return (
    <div className="bg-zinc-900 text-white pb-4">
      <div className="gap-10 md:gap-0 grid grid-cols-1 md:grid-cols:2 lg:grid-cols-3 py-10">
        <div className="flex flex-col gap-3 md:gap-10">
          <span className="border-2 w-fit mx-auto p-2 border-rose-900">
            <h1 className="uppercase font-bold text-rose-900">Location</h1>
          </span>
          <div className="flex items-center gap-5 mx-auto">
            <div className="text-rose-900">
              <i class="fa-solid fa-location-dot fa-2xl"></i>
            </div>
            <a
              href="https://www.google.com/maps/place/BiniAutoRepairINC/@40.9515721,-73.8751458,15z/data=!4m2!3m1!1s0x0:0x58aeec725b7b64cb?sa=X&ved=1t:2428&ictx=111"
              rel="noreferrer"
              target="_blank"
              className="flex flex-col text-start"
            >
              <span>10 Eastman Pl</span>
              <span>Yonkers, NY 10701</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-10">
          <span className="border-2 w-fit mx-auto px-4 py-2 border-rose-900">
            <h1 className="uppercase font-bold text-rose-900">Contact</h1>
          </span>
          <div className="flex flex-col mx-auto gap-3">
            <a href="tel:+13475820864" className="flex items-center gap-3">
              <span className="text-rose-900">
                <i class="fa-solid fa-phone fa-xl"></i>
              </span>
              <span>+13475820864</span>
            </a>
            <a
              href="mailto:biniautorepairinc@gmail.com"
              className="flex items-center gap-3"
            >
              <span className="text-rose-900">
                <i class="fa-solid fa-envelope fa-xl"></i>
              </span>
              <span>biniautorepairinc@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col  gap-8 md:gap-10">
          <span className="border-2 w-fit mx-auto px-4 py-2 border-rose-900">
            <h1 className="uppercase font-bold text-rose-900">Social Media</h1>
          </span>
          <div className="flex justify-center gap-x-5">
            <a
              href="https://www.instagram.com/biniautorepairinc/"
              target="_blank"
              rel="noreferrer"
              className=" hover:text-rose-900"
            >
              <i class="fa-brands fa-instagram fa-2xl"></i>
            </a>
            <a
              href="https://www.tiktok.com/@biniautorepair"
              target="_blank"
              rel="noreferrer"
              className=" hover:text-rose-900"
            >
              {" "}
              <i class="fa-brands fa-tiktok fa-xl "></i>
            </a>
          </div>
        </div>
      </div>
      <span className="font-bold px-2 mt-4">
        Copyrights 2024 Bini AutoRepair INC. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
