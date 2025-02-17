"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";
// import { HiArrowLeft } from "react-icons/hi";
// import { useRouter } from "next/navigation";
// <button onClick={()=> router.back()} className=" absolute left-8 top-5 "><HiArrowLeft /></button>

export default function Login() {
  const router = useRouter();
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-g\ ">
      <div className="w-[40%] h-[50vh] shadow-lg   flex flex-col justify-around items-center relative">
 <button onClick={()=> router.back()} className=" absolute left-8 top-5 "><HiArrowLeft /></button>
        <p className="text-black font-bold text-2xl">Change Password</p>

        <form  className="flex flex-col justify-center items-center gap-3 mb-2  w-[80%] " >
          <input type="password" placeholder="current Password"  className="w-[70%] border  px-4 py-1 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 " required   />
          <input type="password" placeholder="New Password" className="w-[70%] border px-4 py-1  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400  " required  />
          <input type="password" placeholder="Repeat Password" className="w-[70%] border px-4 py-1  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400  " required  />
          <button type="submit" className="w-[70%] px-4 py-3 text-sm text-black bg-s-orange-300 rounded hover:bg-s-yellow-400 font-semibold bg-yellow-400 mt-3">Save changes</button>
        </form>
      </div>
    </div>
  );
}
