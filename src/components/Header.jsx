import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../resources/logo.png";
function Header() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="sticky z-10">
      <div className=" font-chivo text-xs md:text-sm flex justify-between px-10 py-2 bg-zinc-900  text-rose-900 font-bold">
        <div className="items-center gap-2 flex">
          <i class="fa-solid fa-location-dot" style={{ color: "#ffffff" }}></i>
          <a href="https://www.google.com/maps/place/BiniAutoRepairINC/@40.9515721,-73.8751458,15z/data=!4m2!3m1!1s0x0:0x58aeec725b7b64cb?sa=X&ved=1t:2428&ictx=111">
            <span>10 Eastman Pl, Yonkers, NY</span>
          </a>
        </div>
        <div className="items-center gap-2 flex">
          <i class="fa-solid fa-phone" style={{ color: "#ffffff" }}></i>
          <a href="tel:+13475820864">
            <span>(347)582-0864</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-2 ">
          <i class="fa-solid fa-envelope" style={{ color: "#ffffff" }}></i>
          <a href="mailto:biniautorepairinc@gmail.com">
            <span>biniautorepairinc@gmail.com</span>
          </a>
        </div>
      </div>

      <nav className=" font-chivo w-full flex justify-between items-center px-3 md:px-12 py-3 bg-black text-white font-bold">
        <button
          onClick={() => setToggleSidebar(!toggleSidebar)}
          className="block md:hidden"
        >
          <div className="block md:hidden border px-3 py-1 rounded-md">
            <i class="fa-solid fa-bars"></i>
          </div>
        </button>
        <div
          className={`fixed inset-0 bg-black z-0 md:hidden transition-transform ${
            toggleSidebar ? "transform-none" : "-translate-x-full"
          }`}
          onClick={() => setToggleSidebar(!toggleSidebar)}
        >
          <button
            className="md:hidden absolute right-4 top-4"
            onClick={() => setToggleSidebar(!toggleSidebar)}
          >
            <i class="fa-solid fa-x fa-xl"></i>
          </button>
          <div className="flex flex-col mt-14 gap-4 px-6  uppercase">
            <Link
              to={"/"}
              className="flex items-center justify-between md:hidden border p-2 bg-black rounded-lg"
            >
              <span>Home</span> <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <Link
              to={"/aboutus"}
              className="flex items-center justify-between md:hidden border p-2 bg-black rounded-lg"
            >
              <span>About Us</span> <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <Link
              to={"/services"}
              className="flex items-center justify-between md:hidden border p-2 bg-black rounded-lg"
            >
              <span>Services</span>

              <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <Link
              to={"/contact"}
              className="flex items-center justify-between md:hidden border p-2 bg-black rounded-lg"
            >
              <span>Contact</span> <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <div>
              <img src={logo} alt="" className="bottom-0 absolute" />
            </div>
          </div>
        </div>
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            className="w-[180px] md:w-[200px] h-20 object-cover"
          />
        </Link>
        <ul className="hidden md:flex justify-center gap-24 uppercase font-chivo">
          <Link to={"/"} className="hover:text-rose-900">
            Home
          </Link>
          <Link to={"/services"} className="hover:text-rose-900">
            Services
          </Link>
          <Link to={"/aboutus"} className="hover:text-rose-900">
            About Us
          </Link>
        </ul>
        <Link to={"/contact"} className="hover:text-black">
          <button className="font-chivo border-rose-900 rounded-lg px-4 py-2 bg-rose-900 text-sm md:text-md">
            Contact Me
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
