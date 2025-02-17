"use client";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Release() {
    const [selected, setSelected] = useState(false);
    const router = useRouter();
    return (
        <div className=" w-full h-full flex justify-center items-center ">

            <div className="p-6 bg-white  w-[50%] shadow-md relative">
                <button onClick={() => router.back()} className=" absolute left-8 top-8 "><HiArrowLeft /></button>
                <h2 className="text-xl font-bold mb-4 text-center">Receive Company Bill</h2>
                <div className=" w-full flex flex-col gap-4 mb-4">
                    <select className=" border text-neutral-500  px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400">
                        <option>Company</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <select className=" border text-neutral-500   px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400">
                        <option>Release amount</option>
                    </select>
                    <input type="text" placeholder="date" className="  border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="Reason" className=" border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2 col-span-2" />
                    {/* 3 chack box */}
                </div>
                <div className=" w-full flex justify-between items-center">
                    {/* 1 */}
                    <div className="flex items-center space-x-2 mb-3">
                        <label className="group flex items-center cursor-pointer">
                            <input className="hidden peer " type="checkbox" checked={selected === "cash"} onChange={()=> setSelected("cash")} name="bill" value={"cash"} />
                            <span className="relative w-5 h-5 flex justify-center items-center bg-gray-100 border border-yellow-400  shadow-md transition-all duration-500 peer-checked:border-yellow-400 peer-checked:bg-yellow-400 peer-hover:scale-105 p-1">
                                <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100  transition-all duration-500 peer-checked:animate-pulse" />
                                <svg fill="currentColor" viewBox="0 0 20 20" className="hidden w-2 h-2 text-white peer-checked:block transition-transform duration-500 transform scale-50 peer-checked:scale-100" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" fillRule="evenodd" />
                                </svg>
                            </span>
                            <span className="ml-2 text-gray-500 group-hover:text-gray-700  transition-colors text-md duration-300">
                                Cash
                            </span>
                        </label>
                    </div>
                    {/* 2 */}
                    <div className="flex items-center space-x-2 mb-3">
                        <label className="group flex items-center cursor-pointer">
                            <input className="hidden peer " type="checkbox" checked={selected === "cheque"} onChange={()=> setSelected("cheque")} name="bill" value={"cheque"} />
                            <span className="relative w-5 h-5 flex justify-center items-center bg-gray-100 border border-yellow-400  shadow-md transition-all duration-500 peer-checked:border-yellow-400 peer-checked:bg-yellow-400 peer-hover:scale-105 p-1">
                                <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100  transition-all duration-500 peer-checked:animate-pulse" />
                                <svg fill="currentColor" viewBox="0 0 20 20" className="hidden w-2 h-2 text-white peer-checked:block transition-transform duration-500 transform scale-50 peer-checked:scale-100" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" fillRule="evenodd" />
                                </svg>
                            </span>
                            <span className="ml-2 text-gray-500 group-hover:text-gray-700  transition-colors text-md duration-300">
                            Cheque
                            </span>
                        </label>
                    </div>
                    {/* 3 */}
                    <div className="flex items-center space-x-2 mb-3">
                        <label className="group flex items-center cursor-pointer">
                            <input className="hidden peer " type="checkbox" checked={selected === "bank transfer"} onChange={()=> setSelected("bank transfer")} name="bill" value={"bank transfer"}/>
                            <span className="relative w-5 h-5 flex justify-center items-center bg-gray-100 border border-yellow-400  shadow-md transition-all duration-500 peer-checked:border-yellow-400 peer-checked:bg-yellow-400 peer-hover:scale-105 p-1">
                                <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100  transition-all duration-500 peer-checked:animate-pulse" />
                                <svg fill="currentColor" viewBox="0 0 20 20" className="hidden w-2 h-2 text-white peer-checked:block transition-transform duration-500 transform scale-50 peer-checked:scale-100" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" fillRule="evenodd" />
                                </svg>
                            </span>
                            <span className="ml-2 text-gray-500 group-hover:text-gray-700  transition-colors text-md duration-300">
                            Bank transfer 
                            </span>
                        </label>
                    </div>
                </div>

                <button className="w-full bg-yellow-400 font-bold py-2 rounded hover:bg-yellow-500">
                    Submit
                </button>
            </div>
        </div>
    );
};


