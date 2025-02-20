"use client";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdAdd  } from "react-icons/io";
import Link from "next/link";
import Loader from "@/app/loader/page";
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function Transporter() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        isLoading? <Loader /> : <div className="w-full h-[86vh] md:h-100 flex flex-col overflow-y-auto relative ">
            {/* setting */}
            <div className="w-full flex justify-end items-center mt-4">
                <Link href={"./../setting"} className="p-2 rounded flex justify-center items-center gap-2 text-neutral-700 text-md">
                    <p className="text-lg"><IoSettingsSharp /></p> Settings
                </Link>
            </div>
            {/* heading */}
            <div className="w-full mt-5 flex justify-between flex-col sm:flex-row">
                <h1 className="font-bold text-3xl sm:text-4xl">Transporter</h1>
                <Link href={"./sources/releaseMoney"} className="w-full md:w-[12vw]  rounded bg-stone-400 text-center pt-1 text-white px-3  mt-3 sm:mt-0">
                    Release money
                </Link>
            </div>
             {/* dropdown */}
             <div className="w-full flex gap-2 pt-2 mt-4 flex-col sm:flex-row">
                {/* 1 */}
                <label htmlFor="an" className=" outline-none relative ">
                <FaCaretDown className=" absolute right-0 top-2 pb-[4px] text-xl " />
                    <select id="an" className="border border-gray-300 bg-white rounded-md p-2 text-sm w-full sm:w-auto">
                        <option>Sort By: Ascending</option>
                        <option>Sort By: Descending</option>
                    </select>
                </label>
            </div>
            {/* table */}
            <div className="w-full overflow-y-auto mt-8  ">
                <table className=" w-full " >
                    <thead>
                        <tr className="border text-center px-3 py-2 bg-white h-[8vh]">
                            <th>S#</th>
                            <th>NAME</th>
                            <th>CURRENT BILL</th>
                            <th>TOT. PENDING</th>
                            <th>CONTACT PERSON</th>
                            <th>CELL #</th>
                            <th>LAST TRIP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        <tr className="border text-center px-3 py-4 bg-white text-neutral-600 h-[6vh]">
                            <td className="px-3 py-2">02</td>
                            <td className="px-3 py-2">John Doe</td>
                            <td className="px-3 py-2">Jameel Ahmad</td>
                            <td className="px-3 py-2">03462142135</td>
                            <td className="px-3 py-2">88,345</td>
                            <td className="px-3 py-2">100,775</td>
                            <td className="px-3 py-2">ABC</td>
                        </tr>
                        <tr className="border text-center px-3 py-4 bg-white text-neutral-600 h-[6vh]">
                            <td className="px-3 py-2">02</td>
                            <td className="px-3 py-2">John Doe</td>
                            <td className="px-3 py-2">Jameel Ahmad</td>
                            <td className="px-3 py-2">03462142135</td>
                            <td className="px-3 py-2">88,345</td>
                            <td className="px-3 py-2">100,775</td>
                            <td className="px-3 py-2">ABC</td>
                        </tr>
                        
                    </tbody>

                </table>

            </div>
            <Link href={"/dashboard/transporter/transporterN"} className=" w-16 h-16 md:w-[10vh] md:h-[10vh] bg-yellow-500 rounded-full absolute flex justify-center items-center  bottom-20 right-1 md:right-7 md:bottom-2 font-bold text-3xl" ><IoMdAdd  /> </Link>

        </div>
    )
}