"use client";
import { IoSettingsSharp } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import Link from "next/link";
export default function Transporter() {

    return (
        <div className="w-full h-full flex flex-col overflow-y-auto relative ">
            {/* setting */}
            <div className="w-full flex justify-end items-center">
                <Link href={"./../setting"} className="p-2 rounded flex justify-center items-center gap-2 text-neutral-500 text-md"><p className="text-lg"><IoSettingsSharp /></p> Settings</Link>
            </div>
            {/* heading */}
            <div className="w-full mt-5 flex justify-between">
                <h1 className="font-bold text-3xl">Transporter</h1>
                <Link href={"./transporter/releaseMoney"} className="w-[15vw] rounded bg-stone-600 text-center text-white px-3 py-1" >release money</Link>
            </div>
            {/* dropdown */}
            <div className="w-full flex  gap-2 pt-2 mt-4">
                {/* 1 */}
                <select className="w-[12vw] shadow  px-3 py-1 focus:outline-none font-light  text-sm">
                    <option className="text-sm font-thin" value="all" defaultChecked  >Sort By: Ascending </option>
                    <option className="text-sm font-thin" value="pending">Pending</option>
                    <option className="text-sm font-thin" value="completed">Completed</option>
                    <option className="text-sm font-thin" value="cancelled">Cancelled</option>
                    <option className="text-sm font-thin" value="delayed">Delayed</option>
                    <option className="text-sm font-thin" value="rejected">Rejected</option>
                    <option className="text-sm font-thin" value="pending-payment">Pending Payment</option>
                    <option className="text-sm font-thin" value="payment-failed">Payment Failed</option>
                    <option className="text-sm font-thin" value="payment-succeeded">Payment Succeeded</option>
                    <option className="text-sm font-thin" value="canceled-by-customer">Canceled by Customer</option>
                    <option className="text-sm font-thin" value="canceled-by-driver">Canceled by Driver</option>
                    <option className="text-sm font-thin" value="canceled-by-admin">Canceled by Admin</option>
                    <option className="text-sm font-thin" value="waiting-for-driver-confirmation">Waiting for Driver Confirmation</option>
                </select>
            </div>
            {/* table */}
            <div className="w-full overflow-y-auto mt-8  ">
                <table className=" w-full " >
                    <thead>
                        <tr className="border text-center px-3 py-2 bg-white h-[8vh]">
                            <th>S#</th>
                            <th>NAME</th>
                            <th>CONTACT PERSON</th>
                            <th>CELL #</th>
                            <th>ASH COST</th>
                            <th>CURRENT BILL</th>
                            <th>TOT. PENDING</th>
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
                            <td className="px-3 py-2">128,754</td>
                        </tr>
                        <tr className="border text-center px-3 py-4 bg-white text-neutral-600 h-[6vh]">
                            <td className="px-3 py-2">02</td>
                            <td className="px-3 py-2">John Doe</td>
                            <td className="px-3 py-2">Jameel Ahmad</td>
                            <td className="px-3 py-2">03462142135</td>
                            <td className="px-3 py-2">88,345</td>
                            <td className="px-3 py-2">100,775</td>
                            <td className="px-3 py-2">128,754</td>
                        </tr>
                    </tbody>

                </table>

            </div>
            <Link href={"/dashboard/transporter/transporterN"} className="w-[6%] h-[10vh] bg-yellow-500 rounded-full absolute flex justify-center items-center right-7 bottom-2 font-bold " ><TiPlus /> </Link>

        </div>
    )
}