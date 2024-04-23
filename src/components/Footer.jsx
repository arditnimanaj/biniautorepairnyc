import React from "react";

function Footer() {
  return (
    <div className="bg-zinc-900 pb-4 text-white">
      <div className="gap-10 md:gap-0 grid grid-cols-1 md:grid-cols:2 lg:grid-cols-3 py-10">
        <div className="flex flex-col gap-3 md:gap-10">
          <h1>Location</h1>
          <div className="flex flex-col">
            <span>10 Eastman Pl</span>
            <span>Yonkers, NY 10701</span>
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
            <i class="fa-brands fa-instagram fa-2xl"></i>
            <i class="fa-brands fa-tiktok fa-xl "></i>
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
