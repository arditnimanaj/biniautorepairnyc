import React from "react";

function Footer() {
  return (
    <div className="bg-zinc-900 pb-4 text-white">
      <div className="gap-10 md:gap-0 grid grid-cols-1 md:grid-cols:2 lg:grid-cols-3 py-10">
        <div className="flex flex-col gap-3 md:gap-10">
          <h1>Location</h1>
          <div className="flex flex-col">
            <a
              href="https://www.google.com/maps/place/BiniAutoRepairINC/@40.9515721,-73.8751458,15z/data=!4m2!3m1!1s0x0:0x58aeec725b7b64cb?sa=X&ved=1t:2428&ictx=111"
              rel="noreferrer"
              target="_blank"
              className="flex flex-col"
            >
              <span>10 Eastman Pl</span>
              <span>Yonkers, NY 10701</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-10">
          <h1>Contact</h1>
          <div className="flex flex-col">
            <a href="tel:+13475820864">
              <span>+13475820864</span>
            </a>
            <a href="mailto:biniautorepairinc@gmail.com">
              <span>biniautorepairinc@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col  gap-8 md:gap-10">
          <h1>Social Media</h1>
          <div className="flex justify-center gap-x-5">
            <a
              href="https://www.instagram.com/biniautorepairinc/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-instagram fa-2xl"></i>
            </a>
            <a
              href="https://www.tiktok.com/@biniautorepair"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i class="fa-brands fa-tiktok fa-xl "></i>
            </a>
          </div>
        </div>
      </div>
      <span className="font-bold px-2 py-6 mt-4">
        Copyrights 2024 Bini AutoRepair INC. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
