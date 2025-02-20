"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Trips", path: "/dashboard" },
    { name: "Sources", path: "/dashboard/sources" },
    { name: "Transporter", path: "/dashboard/transporter" },
    { name: "Companies", path: "/dashboard/companies" },
    { name: "Log out", path: "/login" },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen)
console.log(isOpen);

  };

  return (

    <div className={`w-[100vw] sm:absolute lg:relative z-10 md:w-[20vw] ${isOpen? "h-[100vh]" : "h-[11vh]"} md:h-[100vh] overflow-hidden   flex flex-col` } style={{ backgroundColor: "#fcb80d" }}>
      {/* Logo Section */}
      <div className="w-full  flex lg:flex-col justify-between sm:items-center ps-4 lg:ps-0 lg:mt-10 ">
        <Image
          src={require("./../../public/sideIcon.png")}
          alt="Sayyam International Trader"
          width={150}
          height={150}
          className=""
        />
        <button onClick={toggleMenu} className=" justify-center items-center pe-7 md:hidden flex flex-col space-y-1">
        <span className={`block h-0.5 w-6 bg-black transition-transform ${isOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block h-0.5 w-6 bg-black transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-6 bg-black transition-transform ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>

      </div>

      {/* Links Section */}
      <div className="w-full h-[80vh] flex flex-col justify-start md:ps-14 ps-8  gap-3 mt-10 overflow-y-auto">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => setIsOpen(false) }
            className={` hover:font-semibold text-lg ${pathname === link.path ? "font-bold text-black" : "font-thin text-gray-800"
              }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
