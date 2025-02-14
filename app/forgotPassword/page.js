"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default function ForgotPassword() {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center flex-col " style={{ backgroundColor: "#f5f5f5" }}>
            <div className=" w-[40%]">

                <Image
                    src={require("../../public/icon-T.png")}
                    alt="Sayyam International Trader"
                    width={100}
                    height={100}
                    className="mb-5" />
            </div>
            <div className="w-[40%] h-[50vh] shadow-lg  flex flex-col justify-evenly items-center bg-white relative">
                <button className=" absolute left-8 top-9 "><HiArrowLeft /></button>


                <div className="w-[60%] ">
                    <p className="text-neutral-500 text-sm text-center ">Forgotten your password? just enter the email associated with it to reset it.</p>
                </div>
                <form className="flex flex-col justify-center items-center gap-3  w-[80%]   mb-5" >
                    <input type="email" placeholder="Email" className="w-[70%] border  px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 " required />
                    <button type="submit" className="w-[70%] px-4 py-3 text-sm text-black bg-s-orange-300 rounded hover:bg-s-yellow-400 font-semibold bg-yellow-400 mt-3">Sand reset link</button>

                </form>
            </div>
        </div>
    );
}
