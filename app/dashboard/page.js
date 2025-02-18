"use client";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import { TiPlus } from "react-icons/ti";

export default function Dashboard() {

    return (
        <div className="w-full h-[86vh] flex flex-col overflow-y-auto relative ">
            {/* setting */}
            <div className="w-full flex justify-end items-center">
                <Link href={"../../setting"} className="p-2 rounded flex justify-center items-center gap-2 text-neutral-500 text-md"><p className="text-lg"><IoSettingsSharp /></p> Settings</Link>
            </div>
            {/* heading */}
            <div className="w-full ">
                <h1 className="font-bold text-3xl">Trips</h1>
            </div>
            {/* dropdown */}
            <div className="flex flex-col md:flex-row gap-4 items-center mt-2">
                {/* Sort Dropdown */}
                <select className="border border-gray-300 rounded-md p-2 text-sm w-full sm:w-auto">
                    <option>Sort By: Ascending</option>
                    <option>Sort By: Descending</option>
                </select>

                {/* Date Inputs */}
                <label className="w-full md:w-[25%] flex relative">
                    <p className="absolute top-2 left-2 text-sm">From :</p>
                    <input
                        type="text"
                        placeholder="dd/mm/yy"
                        className="rounded-md py-2 text-sm w-full sm:w-auto border ps-14"
                    />
                </label>
                <label className="w-full md:w-[25%] flex relative">
                    <p className="absolute top-2 left-2 text-sm">To :</p>
                    <input
                        type="text"
                        placeholder="dd/mm/yy"
                        className="rounded-md py-2 text-sm w-full sm:w-auto border ps-8"
                    />
                </label>

                {/* Company Dropdown */}
                <select className="border border-gray-300 rounded-md p-2 text-sm w-full sm:w-auto">
                    <option>Company</option>
                    <option>Company A</option>
                    <option>Company B</option>
                    <option>Company C</option>
                </select>
            </div>
            {/* table */}
            <div className="w-full border overflow-x-auto mt-8 rounded">
                <table className="w-full min-w-[600px]">
                    <thead>
                        <tr className="border text-center px-5 py-2 h-[8vh] bg-white">
                            <th>S#</th>
                            <th>NAME</th>
                            <th>DATE</th>
                            <th>TRUCK</th>
                            <th>WEIGHT</th>
                            <th>PRICE</th>
                            <th>ASH COST</th>
                            <th>TRAVEL EXP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        <tr className="border text-center px-5 py-4 text-neutral-600 h-[6vh] bg-white">
                            <td>1.</td>
                            <td>ABC</td>
                            <td>12/07/21</td>
                            <td>XYZ</td>
                            <td>1.5 Ton</td>
                            <td>100,775</td>
                            <td>128,754</td>
                            <td>128,754</td>
                        </tr>
                        <tr className="border text-center px-5 py-4 text-neutral-600 h-[6vh] bg-white">
                            <td>2.</td>
                            <td>ABC</td>
                            <td>12/07/21</td>
                            <td>XYZ</td>
                            <td>1.5 Ton</td>
                            <td>100,775</td>
                            <td>128,754</td>
                            <td>128,754</td>
                        </tr>
                        <tr className="border text-center px-5 py-4 text-neutral-600 h-[6vh] bg-white">
                            <td>3.</td>
                            <td>ABC</td>
                            <td>12/07/21</td>
                            <td>XYZ</td>
                            <td>1.5 Ton</td>
                            <td>100,775</td>
                            <td>128,754</td>
                            <td>128,754</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <Link href={"/dashboard/tripAdd"} className=" w-[16%] h-[8%]  md:w-[6%] md:h-[10vh] bg-yellow-500 rounded-full absolute flex justify-center items-center right-7 bottom-2 font-bold text-3xl " ><TiPlus /> </Link>


        </div>
    )
}