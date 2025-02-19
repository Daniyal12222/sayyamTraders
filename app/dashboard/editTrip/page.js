"use client";
import { HiArrowLeft } from "react-icons/hi";


export default function EditTrip() {
    return (
        <div className="w-full h-[86vh] md:h-full flex justify-center items-center">

            <div className="p-6 bg-white  shadow-xl  relative w-[100%] md:w-[50%]">
                <button
                    onClick={() => router.back()}
                    className="absolute top-6 left-4 md:top-5 text-xl text-neutral-600 hover:text-black transition">
                    <HiArrowLeft />
                </button>
                <h2 className="text-xl font-bold mb-4 text-center">Edit Trip</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <select className="text-neutral-500 rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2">
                        <option>XYZ</option>
                    </select>
                    <select className="text-neutral-500 rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2">
                        <option>ABC</option>
                    </select>
                    <input type="text" placeholder="12/04/21" className="rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="1.5 Ton" className="rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="2134" className="rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="112,567" className="rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="12,567" className="rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                </div>
                <button className="w-full bg-yellow-400   font-bold py-2 rounded mb-3 hover:bg-yellow-500">
                    Save changes
                </button>
                <button className="w-full bg-red-100 text-red-500 font-bold py-2 rounded hover:bg-red-200">
                    Delete
                </button>
            </div>
        </div>
    );
};


