"use client";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdAdd  } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "@/app/loader/page";
import { FaCaretDown } from "react-icons/fa";


export default function Companies() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    
    return (
        isLoading ? <Loader /> : <div className="w-full min-h-[86vh] md:h-100   flex flex-col overflow-y-auto relative px-4 sm:px-6 md:px-8">
            {/* setting */}
            <div className="w-full flex justify-end items-center mt-4">
                <Link href={"./../setting"} className="p-2 rounded flex justify-center items-center gap-2 text-neutral-500 text-md">
                    <p className="text-lg"><IoSettingsSharp /></p> Settings
                </Link>
            </div>
            {/* heading */}
            <div className="w-full mt-5 flex justify-between flex-col sm:flex-row">
                <h1 className="font-bold text-3xl sm:text-4xl">Companies</h1>
                <button onClick={() => router.push("./companies/companiBill")} className="w-full md:w-[12vw]  rounded bg-stone-400 text-center pt-1 text-white px-3  mt-3 sm:mt-0">
                    Release money
                </button>
            </div>
            {/* dropdown */}
            <div className="w-full flex gap-2 pt-2 mt-4 flex-col sm:flex-row">
            <label htmlFor="an" className=" outline-none relative ">
                <FaCaretDown className=" absolute right-0 top-2 pb-[4px] text-xl " />
                    <select id="an" className="border border-gray-300 bg-white rounded-md p-2 text-sm w-full sm:w-auto">
                        <option>Sort By: Ascending</option>
                        <option>Sort By: Descending</option>
                    </select>
                </label>
            </div>
            {/* table */}
            <div className="w-full overflow-x-auto mt-8">
                <table className="w-full min-w-[600px]">
                    <thead>
                        <tr className="border text-center px-3 bg-white py-4 h-[8vh]">
                            <th className="p-3">S#</th>
                            <th className="p-3">NAME</th>
                            <th className="p-3">LOCATION</th>
                            <th className="p-3">PRICE</th>
                            <th className="p-3">CURR BILL</th>
                            <th className="p-3">TOT. PENDING</th>
                            <th className="p-3">TRAVEL EXP.</th>
                            <th className="p-3">CONTACT</th>
                            <th className="p-3">LAST TRIP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        <tr onClick={()=>{router.push("/dashboard/companies/companiD")}} className="border text-center px-3 py-4 bg-white text-neutral-600 h-[6vh]">
                            <td className="px-3 py-2">01</td>
                            <td className="px-3 py-2">abd</td>
                            <td className="px-3 py-2">KHI</td>
                            <td className="px-3 py-2">2346</td>
                            <td className="px-3 py-2">100,775</td>
                            <td className="px-3 py-2">128,754</td>
                            <td className="px-3 py-2">123</td>
                            <td className="px-3 py-2">Jamal Ahmed</td>
                            <td className="px-3 py-2">ABC</td>
                        </tr>
                        <tr onClick={()=>{router.push("/dashboard/companies/companiD")}} className="border text-center px-3 py-4 bg-white text-neutral-600 h-[6vh]">
                            <td className="px-3 py-2">01</td>
                            <td className="px-3 py-2">abd</td>
                            <td className="px-3 py-2">KHI</td>
                            <td className="px-3 py-2">2346</td>
                            <td className="px-3 py-2">100,775</td>
                            <td className="px-3 py-2">128,754</td>
                            <td className="px-3 py-2">123</td>
                            <td className="px-3 py-2">Jamal Ahmed</td>
                            <td className="px-3 py-2">ABC</td>
                        </tr>
                        <tr onClick={()=>{router.push("/dashboard/companies/companiD")}} className="border text-center px-3 py-4 bg-white text-neutral-600 h-[6vh]">
                            <td className="px-3 py-2">01</td>
                            <td className="px-3 py-2">abd</td>
                            <td className="px-3 py-2">KHI</td>
                            <td className="px-3 py-2">2346</td>
                            <td className="px-3 py-2">100,775</td>
                            <td className="px-3 py-2">128,754</td>
                            <td className="px-3 py-2">123</td>
                            <td className="px-3 py-2">Jamal Ahmed</td>
                            <td className="px-3 py-2">ABC</td>
                        </tr>
                       
                        
                        
                    </tbody>
                </table>
            </div>
            <Link href={"/dashboard/companies/newCompanie"} className="w-[8vh] h-[8vh]  bg-yellow-500 rounded-full absolute flex justify-center items-center right-7 bottom-2 font-bold text-3xl">
                <IoMdAdd  />
            </Link>
        </div>
    );
}
