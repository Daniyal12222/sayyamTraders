"use client"

import Image from "next/image";
import Link from "next/link";
import { HiCheck } from "react-icons/hi";

export default function SuccessfullSent() {
  return (
    <div className="w-full h-[86vh] md:h-[100vh] flex justify-center items-center ">
      <div className=" w-[90%]  md:w-[40%] md:h-[50vh] shadow-2xl  flex flex-col justify-around items-center">

        <div className=" w-[90%] md:w-[50%] flex flex-col justify-evenly items-center">
          <Image
            src={require("../../public/check.png")}
            alt="Sayyam International Trader"
            width={90}
            height={90}
            className="my-5"
          />
          <h1 className="text-lg font-bold   ">Successfully Sent</h1>
          <p className="text-md text-center text-neutral-500 ">Check your email for the link and then sign in.</p>
        </div>

        <button className="w-[60%] px-4 py-3 text-sm text-black bg-s-orange-300 rounded hover:bg-s-yellow-400 font-semibold bg-yellow-400 mb-2">Sing in</button>
      
      </div>
    </div>
  );
}
