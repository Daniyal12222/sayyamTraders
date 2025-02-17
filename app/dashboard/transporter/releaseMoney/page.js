"use client";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function Release() {
    const router = useRouter();
    return (
        <div className=" w-full flex justify-center items-center ">

        <div className="p-6 bg-white  w-[50%] shadow-md relative">
<button onClick={()=> router.back()} className=" absolute left-8 top-8 "><HiArrowLeft /></button>
            <h2 className="text-xl font-bold mb-4 text-center">Release transporter money</h2>
            <div className=" w-full flex flex-col gap-4 mb-4">
                <select className=" border text-neutral-500  px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400">
                    <option>Transporter name</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <select className=" border text-neutral-500   px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400">
                    <option>Release amount</option>
                </select>
                <input type="text" placeholder="date" className="  border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
               <input type="text" placeholder="Reason" className=" border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2 col-span-2" />
            </div>
            <button className="w-full bg-yellow-400 font-bold py-2 rounded hover:bg-yellow-500">
            Submit
            </button>
        </div>
    </div>
    );
};


