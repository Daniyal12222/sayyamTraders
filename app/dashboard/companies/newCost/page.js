"use client";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function NewCost() {
  const router = useRouter();

  return (
    <div className="w-full h-[86vh] md:h-full flex justify-center items-center px-4">
      <div className="px-6 py-6 bg-white shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[50%] relative rounded-lg">
        {/* Back Button */}
        <button 
          onClick={() => router.back()} 
          className="absolute top-6 left-4 md:top-5 text-xl text-neutral-600 hover:text-black transition"
        >
          <HiArrowLeft />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-6 text-center">Add A New Cost</h2>

        {/* Form Fields */}
        <div className="flex flex-col gap-4 mb-4">
          <select className="rounded border text-md text-neutral-400 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2">
            <option>Source</option>
          </select>

          <select className="rounded border text-neutral-400 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2">
            <option>Enter cost</option>
          </select>

          <input 
            type="text" 
            placeholder="12/04/21" 
            className="rounded border focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2"
          />
        </div>

        {/* Submit Button */}
        <button 
          className="w-full bg-yellow-400 font-bold py-2 rounded hover:bg-yellow-500 transition"
        >
          Add Cost
        </button>
      </div>
    </div>
  );
}
