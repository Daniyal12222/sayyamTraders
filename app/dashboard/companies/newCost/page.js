"use client";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function NewCost() {
    const router = useRouter();
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="px-8 py-6 bg-white  shadow-lg w-[50%] relative">
            <button onClick={()=> router.back()} className=" absolute left-8 top-8 "><HiArrowLeft /></button>

                <h2 className="text-xl font-bold mb-4 text-center">Add A New Cost</h2>
                <div className="flex flex-col gap-4 mb-4">
                    <select className="rounded border text-md text-neutral-400 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2">
                        <option>Source</option>
                    </select>
                    <select className="rounded border text-neutral-400  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2">
                        <option>enter cost</option>
                    </select>
                    <input type="text" placeholder="12/04/21" className="rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                </div>
                <button className="w-full bg-yellow-400   font-bold py-2 rounded mb-3 hover:bg-yellow-500">
                   Add Cost
                </button>
                
            </div>
        </div>
    );
};


