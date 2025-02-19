"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { FaLock } from "react-icons/fa6";

import { useRouter } from "next/navigation";
// import { HiArrowLeft } from "react-icons/hi";
// import { useRouter } from "next/navigation";
// <button onClick={()=> router.back()} className=" absolute left-8 top-5 "><HiArrowLeft /></button>

export default function Login() {
  const router = useRouter();
  return (
    <div className="w-full h-[100vh] flex justify-center items-center  ">
      <div className=" w-[90%] p-2 md:w-[40%]  shadow-lg  gap-3  flex flex-col justify-around items-center relative">
        <button onClick={() => router.back()} className=" absolute left-8 top-5 text-2xl "><HiArrowLeft /></button>
        <p className="text-black font-bold text-2xl my-2">Change Password</p>

        <form className="flex flex-col justify-center items-center gap-3 w-[90%]  md:w-[80%] " >
          <label className=" relative w-[85%] md:w-[70%]  ">
            <FaLock className=" absolute text-neutral-400 top-1/4  left-4 " />
            < input type="password" placeholder="Current Password" className="w-full border ps-10  pe-4 py-2 placeholder:text-md focus:outline-none focus:bg-white focus:border-yellow-400 border-s-2 border-s-yellow-400 " required />
          </label>
          <label className=" relative w-[85%] md:w-[70%] ">
            <FaLock className=" absolute text-neutral-400 top-1/4 text-lg left-4 " />
            <input type="password" placeholder="Password" className="w-full border ps-10  pe-4  py-2 focus:bg-white  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400  " required />
          </label>
          <label className=" relative w-[85%] md:w-[70%] ">
            <FaLock className=" absolute text-neutral-400 top-1/4 text-lg left-4 " />
            <input type="password" placeholder="Repeat Password" className="w-full border ps-10  pe-4  py-2 focus:bg-white  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400  " required />
          </label>
          <button type="submit" className="w-[85%] md:w-[70%] px-4 py-3 text-sm text-black bg-s-orange-300 rounded hover:bg-s-yellow-400 font-semibold bg-yellow-500 mt-3">Save Change</button>
        </form>
      </div>
    </div>
  );
}
