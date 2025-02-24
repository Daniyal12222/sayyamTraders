"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";


export default function ForgotPassword() {
    const router = useRouter();
    return (
        <div className="w-full h-[100vh] flex justify-center items-center flex-col " style={{ backgroundColor: "#f5f5f5" }}>
            <div className="w-[90%]   md:w-[40%]">

                <Image
                    src={require("../../public/icon-T.png")}
                    alt="Sayyam International Trader"
                    width={120}
                    height={120}
                    className="mb-10" />
            </div>
            <div className="w-[90%] h-[30vh] md:w-[40%] md:h-[50vh]  shadow-lg  flex flex-col justify-evenly items-center bg-white relative">
                <button onClick={()=>router.back()} className=" absolute left-[4%] top-[9%] text-2xl "><HiArrowLeft /></button>


                <div className=" w-[60%] md:w-[60%] ">
                    <p className="text-neutral-500 text-sm text-center ">Forgotten your password? just enter the email associated with it to reset it.</p>
                </div>
                <form className="flex flex-col justify-center items-center gap-3  w-[80%]   mb-5" >
                    <label className=" relative w-[70%] ">
                        <MdEmail className=" absolute text-neutral-600 top-1/4 text-xl left-4 placeholder:text-lg" />
                        < input type="email" placeholder="Email" className="w-full border ps-10  pe-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 " required />
                    </label>
                    <button type="submit" className="w-[70%] px-4 py-3 text-sm text-black bg-s-orange-300 rounded hover:bg-s-yellow-400 font-semibold bg-yellow-400 mt-3">Sand reset link</button>

                </form>
            </div>
        </div>
    );
}
