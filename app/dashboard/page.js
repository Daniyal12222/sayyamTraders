"use client";
import { IoSettingsSharp } from "react-icons/io5";
export default function Dashboard() {

    return (
        <div className="w-full h-full flex flex-col overflow-y-auto ">
            {/* setting */}
            <div className="w-full flex justify-end items-center">
                <button className="p-2 rounded flex justify-center items-center gap-2 text-neutral-500 text-md"><p className="text-lg"><IoSettingsSharp /></p> Settings</button>
            </div>
            {/* heading */}
            <div className="w-full ">
                <h1 className="font-bold text-3xl">Trips</h1>
            </div>
            {/* dropdown */}
            <div className="w-full flex  gap-2 pt-2 mt-4">
                {/* 1 */}
                <select className="w-[12vw] shadow  px-3 py-1 focus:outline-none font-light  text-sm">
                    <option className="text-sm font-thin" value="all" defaultChecked disabled >Sort By: Ascending </option>
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
                {/* 2 */}
                <input type="date" className="w-[12vw] shadow  px-4 py-1 focus:outline-none font-light text-sm" placeholder="From" />
                {/* 3 */}
                <input type="date" className="w-[12vw] shadow  px-3 py-1  font-light text-sm" placeholder="To"/>
                {/* 4 */}
                <select  className="w-[12vw] shadow  px-3 py-1 focus:outline-none font-light  text-sm">
                    <option value="all" defaultChecked  >Companies</option>
                    <option value="all" defaultChecked  >Companies</option>
                    <option value="all" defaultChecked  >Companies</option>
                </select>
            </div>
            {/* table */}
            <div className="w-full overflow-y-auto mt-8  ">
                <table className=" w-full " >
                    <thead>
                        <tr className="border text-center px-3 py-2 h-[8vh]">
                            <th>S#</th>
                            <th>Name</th>
                            <th>Vehicle</th>
                            <th>Driver</th>
                            <th>Status</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        <tr className="border text-center px-3 py-4 text-neutral-600 h-[6vh] ">
                            <td>01</td>
                            <td>John Doe</td>
                            <td>Toyota Camry</td>
                            <td>John Doe</td>
                            <td>Completed</td>
                            <td>Payment Succeeded</td>
                            <td><button className="px-2 py-1 text-sm text-gray-600 hover:text-gray-900">View</button></td>
                        </tr >
                        <tr className="border text-center px-3 py-4 text-neutral-600 h-[6vh]">
                            <td>02</td>
                            <td>John Doe</td>
                            <td>Toyota Camry</td>
                            <td>John Doe</td>
                            <td>Completed</td>
                            <td>Payment Succeeded</td>
                            <td><button className="px-2 py-1 text-sm text-gray-600 hover:text-gray-900">View</button></td>
                        </tr>
                        </tbody>

                </table>
                        
            </div>

        </div>
    )
}