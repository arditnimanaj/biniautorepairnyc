import React from "react";

function ContactPage() {
  return (
    <div className="grid gap-12 grid-cols-1 md:grid-cols-2 bg-black h-full text-white">
      <div className="flex flex-col gap-8">
        <h1 className=" border-2 border-rose-900 w-fit mx-auto px-4 py-2">
          Contact
        </h1>
        <a
          href="https://www.google.com/maps/place/BiniAutoRepairINC/@40.9515721,-73.8751458,15z/data=!4m2!3m1!1s0x0:0x58aeec725b7b64cb?sa=X&ved=1t:2428&ictx=111"
          className="flex mx-auto items-center gap-4"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <div className="text-rose-900">
            <i class="fa-solid fa-location-dot fa-2xl"></i>
          </div>
          <div className="flex flex-col">
            <span>10 Eastman Pl</span>
            <span>Yonkers, NY 10701</span>
          </div>
        </a>
        <a href="tel:+13475820864" className="flex mx-auto gap-4 items-center">
          {" "}
          <div className="text-rose-900">
            <i class="fa-solid fa-phone fa-xl"></i>
          </div>
          <span>(347)582-0864</span>
        </a>
        <a
          href="mailto:biniautorepairinc@gmail.com"
          className="flex items-center gap-3 mx-auto"
        >
          <span className="text-rose-900">
            <i class="fa-solid fa-envelope fa-xl"></i>
          </span>
          <span>biniautorepairinc@gmail.com</span>
        </a>
        <div className="flex justify-center gap-x-5 text-rose-900">
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
      <div>
        <h1 className="border-2 border-rose-900 w-fit mx-auto px-4 py-2">
          Location
        </h1>
        <div className="px-2 md:px-4 py-10">
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
      </div>
    </div>
  );
}

export default ContactPage;
