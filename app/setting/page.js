"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";



export default function Settings() {
    const router = useRouter();
 
    return (
        <div className="w-full h-[100vh] flex justify-center items-center  ">
            <div className="w-[40%] h-[50vh] shadow-lg  flex flex-col justify-evenly items-center relative border">
                <button onClick={()=>{router.back()}} className=" absolute left-8 top-9  text-xl"><HiArrowLeft /></button>
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

                <Link href={"../changPassword"} className="w-[60%] px-4 py-3 text-sm text-black bg-s-orange-300 text-center hover:bg-s-yellow-400 font-semibold bg-yellow-400 ">Change password</Link>


            </div>
        </div>
    );
}
