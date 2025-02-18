"use client";
import { IoSettingsSharp } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Companies() {
    const router = useRouter();

    return (
        <div className="w-full h-[86vh] md:h-auto  flex flex-col overflow-y-auto relative px-4 sm:px-6 md:px-8">
            {/* setting */}
            <div className="w-full flex justify-end items-center mt-4">
                <Link href={"./../setting"} className="p-2 rounded flex justify-center items-center gap-2 text-neutral-500 text-md">
                    <p className="text-lg"><IoSettingsSharp /></p> Settings
                </Link>
            </div>
            {/* heading */}
            <div className="w-full mt-5 flex justify-between flex-col sm:flex-row">
                <h1 className="font-bold text-3xl sm:text-4xl">Companies</h1>
                <button onClick={() => router.push("./companies/companiBill")} className="w-full sm:w-[15vw] rounded bg-stone-600 text-white px-3 py-1 mt-3 sm:mt-0">
                    Release money
                </button>
            </div>
            {/* dropdown */}
            <div className="w-full flex gap-2 pt-2 mt-4 flex-col sm:flex-row">
                <select className="w-full sm:w-[12vw] shadow px-3 py-1 focus:outline-none font-light text-sm">
                    <option className="text-sm font-thin" value="all" defaultChecked>Sort By: Ascending </option>
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
            <div className="w-full overflow-x-auto mt-8">
                <table className="w-full min-w-[600px]">
                    <thead>
                        <tr className="border text-center px-3 bg-white py-4 h-[8vh]">
                            <th className="ps-2">S#</th>
                            <th className="ps-2">NAME</th>
                            <th className="ps-2">LOCATION</th>
                            <th className="ps-2">PRICE</th>
                            <th className="ps-2">CURR BILL</th>
                            <th className="ps-2">TOT. PENDING</th>
                            <th className="ps-2">TRAVEL EXP.</th>
                            <th className="ps-2">CONTACT</th>
                            <th className="ps-2">LAST TRIP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        <tr className="border text-center px-3 py-4 bg-white text-neutral-600 h-[6vh]">
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
                        <tr className="border text-center px-3 py-4 bg-white text-neutral-600 h-[6vh]">
                            <td className="px-3 py-2">02</td>
                            <td className="px-3 py-2">abd</td>
                            <td className="px-3 py-2">KHI</td>
                            <td className="px-3 py-2">2346</td>
                            <td className="px-3 py-2">100,775</td>
                            <td className="px-3 py-2">128,754</td>
                            <td className="px-3 py-2">123</td>
                            <td className="px-3 py-2">Jamal Ahmed</td>
                            <td className="px-3 py-2">ABC</td>
                        </tr>
                        <tr className="border text-center px-3 py-4 bg-white text-neutral-600 h-[6vh]">
                            <td className="px-3 py-2">03</td>
                            <td className="px-3 py-2">abd</td>
                            <td className="px-3 py-2">KHI</td>
                            <td className="px-3 py-2">2346</td>
                            <td className="px-3 py-2">100,775</td>
                            <td className="px-3 py-2">128,754</td>
                            <td className="px-3 py-2">123</td>
                            <td className="px-3 py-2">Jamal Ahmed</td>
                            <td className="px-3 py-2">ABC</td>
                        </tr>
                        <tr className="border text-center px-3 py-4 bg-white text-neutral-600 h-[6vh]">
                            <td className="px-3 py-2">04</td>
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
            <Link href={"/dashboard/companies/companiD"} className="w-[8vh] h-[8vh] text-2xl bg-yellow-500 rounded-full absolute flex justify-center items-center right-7 bottom-2 font-bold">
                <TiPlus />
            </Link>
        </div>
    );
}
