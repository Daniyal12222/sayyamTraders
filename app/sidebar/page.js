"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Trips", path: "/dashboard" },
    { name: "Sources", path: "/dashboard/sources" },
    { name: "Transporter", path: "/dashboard/transporter" },
    { name: "Companies", path: "/dashboard/companies" },
    { name: "Log out", path: "/login" },
  ];

  return (
    <div className="w-[20vw] h-[100vh] flex flex-col" style={{ backgroundColor: "#fcb80d" }}>
      {/* Logo Section */}
      <div className="w-full h-[20vh] flex flex-col justify-center mt-10 md:ps-14">
        <Image
          src={require("./../../public/sideIcon.png")}
          alt="Sayyam International Trader"
          width={180}
          height={180}
          className="mb-10"
        />
      </div>

      {/* Links Section */}
      <div className="w-full h-[80vh] flex flex-col justify-start md:ps-14 gap-3 mt-10 overflow-y-auto">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={` hover:font-semibold ${
              pathname === link.path ? "font-bold text-black" : "font-normal text-gray-800"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
