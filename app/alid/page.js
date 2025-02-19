"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BillingSummary() {
    const router = useRouter();
  return (
    <div className="px-10 py-6 bg-gray-100 min-h-screen">
   <div className="flex items-center justify-between space-x-4 mb-4">
  <button onClick={() => router.back()} className="flex gap-2 items-center">
    <ArrowLeft className="cursor-pointer" />
  </button>
  <Button variant="default" className="ml-auto bg-yellow-400 text-black">
    EDIT DETAILS
  </Button>
</div>

<div className="w-full mb-3">
  <h1 className="text-2xl font-bold text-center md:text-left">Allied - 13th Aug-2021</h1>
</div>

<div className="border rounded-lg p-4 bg-white mb-4">
  {/* First Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-b py-2">
    <div className="flex flex-col items-center py-2">
      <p className="text-sm font-semibold">Weight</p>
      <p className="text-lg">50.5 Ton</p>
    </div>
    <div className="flex flex-col items-center py-2">
      <p className="text-sm font-semibold">Price</p>
      <p className="text-lg">10,000</p>
    </div>
    <div className="flex flex-col items-center py-2">
      <p className="text-sm font-semibold">Trans cost</p>
      <p className="text-lg">25,000</p>
    </div>
  </div>

  {/* Second Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-b py-2">
    <div className="flex flex-col items-center py-2">
      <p className="text-sm font-semibold">Truck</p>
      <p className="text-lg">TCM-808</p>
    </div>
    <div className="flex flex-col items-center py-2">
      <p className="text-sm font-semibold">Trip price</p>
      <p className="text-lg">50,000</p>
    </div>
    <div className="flex flex-col items-center py-2">
      <p className="text-sm font-semibold">Cost/Ton</p>
      <p className="text-lg">6,500</p>
    </div>
  </div>

  {/* Third Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2">
    <div className="flex flex-col items-center py-2">
      <p className="text-sm font-semibold">Source</p>
      <p className="text-lg">Hub power</p>
    </div>
    <div className="flex flex-col items-center py-2">
      <p className="text-sm font-semibold">Transporter name</p>
      <p className="text-lg">Sayyam</p>
    </div>
    <div className="flex flex-col items-center py-2">
      <p className="text-sm font-semibold">Ash cost</p>
      <p className="text-lg">5,000</p>
    </div>
  </div>
</div>

{/* company bill */}
    <div className='w-full mb-1 py-4'>
        <p className='text-lg font-semibold '>Company Bill</p>
    </div>
      <div className="flex  items-center justify-between gap-4 w-full ">
          <div className=' px-10 w-[40vw] py-14 bg-white flex flex-col justify-center rounded-md  items-center border'>
            <p className='text-3xl font-bold'>25,000</p>
            <p className='text-md text-neutral-700'>Company bill before</p>
          </div>
          <div className=' px-10 w-[40vw] py-14 bg-white flex flex-col justify-center rounded-md  items-center border'>
            <p className='text-3xl font-bold'>75,000</p>
            <p className='text-md text-neutral-700'>Company bill after</p>
          </div>
      </div>
      {/* traspot bill */}
    <div className='w-full mb-1 py-4'>
        <p className='text-lg font-semibold '>Transporter Bill</p>
    </div>
      <div className="flex  items-center justify-between gap-4 w-full ">
          <div className=' px-10 w-[40vw] py-14 bg-white flex flex-col justify-center rounded-md  items-center border'>
            <p className='text-3xl font-bold'>50,000</p>
            <p className='text-md text-neutral-700'>Transporter bill before</p>
          </div>
          <div className=' px-10 w-[40vw] py-14 bg-white flex flex-col justify-center rounded-md  items-center border'>
            <p className='text-3xl font-bold'>75,000</p>
            <p className='text-md text-neutral-700'>Transporter bill after</p>
          </div>
      </div>
      {/* source bill  */}
    <div className='w-full mb-1 py-4'>
        <p className='text-lg font-semibold '>Source Bill</p>
    </div>
      <div className="flex  items-center justify-between gap-4 w-full ">
          <div className=' px-10 w-[40vw] py-14 bg-white flex flex-col justify-center rounded-md  items-center border'>
            <p className='text-3xl font-bold'>25,000</p>
            <p className='text-md text-neutral-700'>Source bill before</p>
          </div>
          <div className=' px-10 w-[40vw] py-14 bg-white flex flex-col justify-center rounded-md  items-center border'>
            <p className='text-3xl font-bold'>35,000</p>
            <p className='text-md text-neutral-700'>Source bill after</p>
          </div>
      </div>
    </div>
  );
}
