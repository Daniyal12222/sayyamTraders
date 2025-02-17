"use client"
import Image from "next/image";
import Link from "next/link";
export default function Sidebar() {

    return(
        <div className="w-[20vw] h-[100vh]  flex flex-col " style={{backgroundColor :"#fcb80d"}}>

            <div className="w-full h-[20vh] flex flex-col justify-center mt-10 md:ps-14 ">
                <Image
                src={require("./../../public/sideIcon.png")}
                alt="Sayyam International Trader"
                width={150}
                height={150}
                className="mb-5"  />
                
            </div>
            
            <div className="w-full h-[80vh] flex flex-col justify-center md:ps-14  gap-3 overflow-y-auto">

                <Link href={"/dashboard"} className=" active:font-semibold hover:text-lg hover:font-semibold">
                Trips
                </Link>
                <Link href={"/dashboard/sources"}  className=" active:font-semibold hover:text-lg hover:font-semibold">
                Sources
                </Link>
                <Link href={"/dashboard/transporter"}  className=" active:font-semibold hover:text-lg hover:font-semibold">
                Transporter
                </Link>
                <Link href={"/dashboard/companies"}  className=" active:font-semibold hover:text-lg hover:font-semibold">
                Companies
                </Link>
                <Link href={"/login"}  className=" active:font-semibold hover:text-lg hover:font-semibold">
                Log out
                </Link>
            </div>
            
        </div>
    )
}