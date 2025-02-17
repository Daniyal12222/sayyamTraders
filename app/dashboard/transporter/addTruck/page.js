"use client";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function addTruck() {
    const router = useRouter();
    return (
        <div className="w-full h-full flex justify-center items-center ">
            <div className="p-6 bg-white  shadow-lg w-[50%] relative">
            <button onClick={()=> router.back()} className=" absolute left-8 top-8 "><HiArrowLeft /></button>
                <h2 className="text-xl font-bold mb-4 text-center">Add A New Truck</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                   
                    <input type="text" placeholder="Truck" className="rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="Driver Name" className="rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="Helper Name" className="rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="Trips This Month" className="rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                </div>
                <button className="w-full bg-yellow-400   font-bold py-2 rounded mb-3 hover:bg-yellow-500">
                    Add Truck
                </button>
               
            </div>
        </div>
    );
};


