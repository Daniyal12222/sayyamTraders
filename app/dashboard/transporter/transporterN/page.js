"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPlus } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function CompanyDashboard() {
    const router = useRouter();
    return (
        <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
            <div className="w-full flex  justify-between items-center">
                  <button onClick={()=> router.back()}  className="text-3xl "><HiArrowLeft /></button>
                    <p className="flex text-md text-neutral-600"><MdEdit />EDIT DETAILS</p>
            
                  </div>
            
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Transporter Name</h1>
                <div className="flex gap-2 ">
                    <Select>
                        <SelectTrigger className="w-32">
                            <SelectValue placeholder="June" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="june">June</SelectItem>
                            <SelectItem value="july">July</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Generate bill</Button>
                </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-3 gap-4">
                <Card>
                    <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold">112,633</p>
                        <p className="text-gray-500">Pending Bill</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold">76,675</p>
                        <p className="text-gray-500">Curr. Month Bill</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold">4</p>
                        <p className="text-gray-500">Curr. Month Trips</p>
                    </CardContent>
                </Card>
            </div>

            {/* Contact Information */}


            <Card>
                <CardContent className=" p-6 grid grid-cols-3 gap-2 text-center">
                    <div className="">
                        <p className="font-semibold">Contact person</p>
                        <p className="text-sm text-neutral-600">Syed Haider</p>
                    </div>
                    <div>
                        <p className="font-semibold">Cell#</p>
                        <p className="text-sm text-neutral-600">03671432146</p>
                    </div>
                    <div>
                        <p className="font-semibold">Total Truck</p>
                        <p className="text-sm text-neutral-600">3</p>
                    </div>
                </CardContent>
            </Card>

            {/* note */}
            <div className="w-full  py-3">
                <p className="text-md text-neutral-500">Note</p>
                <div className="w-full px-3 py-2 bg-white ronded ">
                    <p className="text-md ">call next friday </p>
                </div>
            </div>

            {/* Ledger Section */}
            <div className="p-4 bg-white rounded-lg shadow">
                <div className="flex gap-3 w-full ">
                    <h2 className="text-2xl font-bold mb-4">Ledger</h2>
                    <div className="flex space-x-2 mb-4">
                        <input type="text" placeholder="From: dd/mm/yy" className="border rounded px-2 py-1" />
                        <input type="text" placeholder="To: dd/mm/yy" className="border rounded px-2 py-1" />
                    </div>
                </div>
                <table className="w-full border-collapse border border-gray-200">
                    <thead className="">
                        <tr className="border">
                            <th className=" p-2">S#</th>
                            <th className=" p-2">NAME</th>
                            <th className=" p-2">DATE</th>
                            <th className=" p-2">DEBIT</th>
                            <th className=" p-2">CREDIT</th>
                            <th className=" p-2">BALANCE</th>
                            <th className=" p-2">REASON</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td className=" text-neutral-600 p-2 text-center">1</td>
                            <td className=" text-neutral-600 p-2">jamal</td>
                            <td className=" text-neutral-600 p-2 text-center">12/07/21</td>
                            <td className=" text-neutral-600 p-2 text-center">4367</td>
                            <td className=" text-neutral-600 p-2 text-center">11,675</td>
                            <td className=" text-neutral-600 p-2 text-center">11,675</td>
                            <td className=" text-neutral-600 p-2">Lorem ipsum doler sit emit </td>
                            <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
                        </tr>
                        <tr className="border">
                            <td className=" text-neutral-600 p-2 text-center">1</td>
                            <td className=" text-neutral-600 p-2">jamal</td>
                            <td className=" text-neutral-600 p-2 text-center">12/07/21</td>
                            <td className=" text-neutral-600 p-2 text-center">4367</td>
                            <td className=" text-neutral-600 p-2 text-center">11,675</td>
                            <td className=" text-neutral-600 p-2 text-center">11,675</td>
                            <td className=" text-neutral-600 p-2">Lorem ipsum doler sit emit </td>
                            <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
                        </tr>
                        <tr className="border">
                            <td className=" text-neutral-600 p-2 text-center">1</td>
                            <td className=" text-neutral-600 p-2">jamal</td>
                            <td className=" text-neutral-600 p-2 text-center">12/07/21</td>
                            <td className=" text-neutral-600 p-2 text-center">4367</td>
                            <td className=" text-neutral-600 p-2 text-center">11,675</td>
                            <td className=" text-neutral-600 p-2 text-center">11,675</td>
                            <td className=" text-neutral-600 p-2">Lorem ipsum doler sit emit </td>
                            <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            {/* truck Section */}
            <div className="p-4 bg-white rounded-lg shadow">
                <div className="flex gap-3 w-full justify-between ">
                    <h2 className="text-2xl font-bold mb-4">Truck</h2>
                    <div className="flex space-x-2 mb-4">
                        <button onClick={()=> router.push("./addTruck")}  className=" flex justify-center items-center w-8 h-8 rounded-full shadow-lg">
                            <FaPlus />
                        </button>
                    </div>

                </div>
                <table className="w-full border-collapse border border-gray-200">
                    <thead className="">
                        <tr className="border">
                            <th className=" p-2">S#</th>
                            <th className=" p-2">TRUCKS</th>
                            <th className=" p-2">DRIVER NAME</th>
                            <th className=" p-2">HELPER NAME</th>
                            <th className=" p-2">TRIPS THIS MONTH</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td className=" text-neutral-600 p-2 text-center">1.</td>
                            <td className=" text-neutral-600 p-2 text-center">ABC</td>
                            <td className=" text-neutral-600 p-2 text-center">Abid Ali</td>
                            <td className=" text-neutral-600 p-2 text-center">Raheem</td>
                            <td className=" text-neutral-600 p-2 text-center">12</td>
                            <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
                        </tr>
                        <tr className="border">
                            <td className=" text-neutral-600 p-2 text-center">1.</td>
                            <td className=" text-neutral-600 p-2 text-center">ABC</td>
                            <td className=" text-neutral-600 p-2 text-center">Abid Ali</td>
                            <td className=" text-neutral-600 p-2 text-center">Raheem</td>
                            <td className=" text-neutral-600 p-2 text-center">12</td>
                            <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
                        </tr>
                        <tr className="border">
                            <td className=" text-neutral-600 p-2 text-center">1.</td>
                            <td className=" text-neutral-600 p-2 text-center">ABC</td>
                            <td className=" text-neutral-600 p-2 text-center">Abid Ali</td>
                            <td className=" text-neutral-600 p-2 text-center">Raheem</td>
                            <td className=" text-neutral-600 p-2 text-center">12</td>
                            <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
                        </tr>
                        <tr className="border">
                            <td className=" text-neutral-600 p-2 text-center">1.</td>
                            <td className=" text-neutral-600 p-2 text-center">ABC</td>
                            <td className=" text-neutral-600 p-2 text-center">Abid Ali</td>
                            <td className=" text-neutral-600 p-2 text-center">Raheem</td>
                            <td className=" text-neutral-600 p-2 text-center">12</td>
                            <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
                        </tr>

                    </tbody>
                </table>
            </div>


        </div>
    );
}
