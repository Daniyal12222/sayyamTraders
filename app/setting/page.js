"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default function Settings() {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center  ">
            <div className="w-[40%] h-[50vh] shadow-lg  flex flex-col justify-evenly items-center relative border">
                <button  className=" absolute left-8 top-9 "><HiArrowLeft /></button>
                <div className="rounded-full bg-gray-300 absolute bottom-56">
                    <Image
                    src={require("./../../public/people.png")}
                    alt="people"
                    width={100} 
                    height={100} 
                    className=""
                    />
                </div>
                <div>
                    <p className="text-center text-2xl text-neutral-700 mt-4">Admin</p>
                    <p className="text-center text-sm text-neutral-500">daniyal@gmail.com</p>
                </div>

        <button className="w-[60%] px-4 py-3 text-sm text-black bg-s-orange-300 rounded hover:bg-s-yellow-400 font-semibold bg-yellow-400 ">Change password</button>

                
                </div>
        </div>
    );
}
