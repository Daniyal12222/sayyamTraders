import Image from "next/image";
import Link from "next/link";
export default function Sidebar() {

    return(
        <div className="w-[20vw] h-[100vh] bg-yellow-400 flex flex-col">

            <div className="w-full h-[20vh] flex flex-col justify-center md:ps-14 ">
                <h1 className="text-3xl font-bold text-black font-sans">SAYYAM</h1>
                <p className="text-neutral-700 text-md  font-thin">International Trader</p>
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
                <Link href={"#"}  className=" active:font-semibold hover:text-lg hover:font-semibold">
                Log out
                </Link>
            </div>
            
        </div>
    )
}