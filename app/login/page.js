"use client";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col " style={{backgroundColor : "#f5f5f5"}}>
      <div className=" w-[40%]">
      
      <Image
      src={require("../../public/icon-T.png")}
      alt="Sayyam International Trader"
      width={100}
      height={100}
      className="mb-5"   />
      </div>
      
      <div className="w-[40%] h-[50vh] shadow-md shadow-gray-700  bg-white  flex flex-col justify-around items-center mb-5 pt-5">

        <p className="text-neutral-700 text-md">Please enter your login details</p>

        <form  className="flex flex-col justify-center items-center gap-3  w-[80%] " >
          <label className=" relative w-[70%] ">
          <MdEmail className=" absolute text-neutral-600 top-1/4 text-xl left-4 placeholder:text-lg" />
          < input type="email" placeholder="Email"  className="w-full border ps-10  pe-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 " required   />
          </label>
          <label className=" relative w-[70%] ">
          <FaLock  className=" absolute text-neutral-600 top-1/4 text-lg left-4 placeholder:text-lg" />
          <input type="password" placeholder="Password" className="w-full border placeholder:text-lg ps-10  pe-4  py-2  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400  " required  />
          </label>
          <button type="submit" className="w-[70%] px-4 py-3 text-sm text-black bg-s-orange-300 rounded hover:bg-s-yellow-400 font-semibold bg-yellow-500 mt-3">Login</button>
          
        </form>

        <Link href="./forgotPassword" className="text-sm text-blue-500 hover:text-s-orange-500  hover:underline mb-3 ">Forgot Password?</Link>


      </div>
    </div>
  );
}
