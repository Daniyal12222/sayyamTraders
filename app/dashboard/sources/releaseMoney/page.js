"use client";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function Release() {
    const router = useRouter();
    return (
        <div className=" w-full h-[86vh] md:h-auto flex justify-center  items-center ">

            <div className=" bg-white  w-[100%] md:w-[50%] shadow-md p-12 relative">
                <button onClick={() => router.back()} className=" absolute left-6 top-12  text-xl "><HiArrowLeft /></button>
                <h2 className="md:text-xl font-bold mb-4 text-md    text-center">Release source money</h2>
                <div className=" w-full flex flex-col gap-4 mb-4">
                    <select className=" border text-neutral-500  px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400">
                        <option>Source</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Release amount" className=" border text-neutral-500   px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400" />
                       
                    <input type="text" placeholder="date" className="  border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="Reason" className=" border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2 col-span-2" />
                </div>
                <button className="w-[90%]  font-bold py-2 rounded ms-5 hover:bg-yellow-500" style={{backgroundColor :"#fcb80d"}}>
                    Submit
                </button>
            </div>
        </div>
    );
};


