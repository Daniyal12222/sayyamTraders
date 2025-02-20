"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HiArrowLeft } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function CompanyDashboard() {
  const router = useRouter();
  return (
    <div className="p-2 space-y-6 bg-gray-100 min-h-screen relative">
      <div className="w-full flex justify-between items-center">
        <button onClick={() => router.back()} className="text-3xl"><HiArrowLeft /></button>
        <p className="flex text-md text-neutral-600"><MdEdit /> EDIT DETAILS</p>
      </div>

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold w-full sm:w-auto">Source Name</h1>
        <div className="flex gap-3  md:gap-2 mt-4 sm:mt-0">
          <Select>
            <SelectTrigger className="w-32 bg-white">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-10 text-center">
            <p className="text-3xl font-bold">112,633</p>
            <p className="text-gray-500">Pending Bill</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-10 text-center">
            <p className="text-3xl font-bold">76,675</p>
            <p className="text-gray-500">Curr. Month Bill</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-10 text-center">
            <p className="text-3xl font-bold">4</p>
            <p className="text-gray-500">Curr. Month Trips</p>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}


      <Card>
        <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-semibold">Contact person</p>
            <p className="text-sm text-neutral-600">Syed Haider</p>
          </div>
          <div>
            <p className="font-semibold">Cell#</p>
            <p className="text-sm text-neutral-600">03671432146</p>
          </div>
          <div>
            <p className="font-semibold">Ash cost</p>
            <p className="text-sm text-neutral-600">11,466</p>
          </div>
        </CardContent>
      </Card>
{/* Ledger Section */}
<div className="flex flex-wrap gap-3 w-full items-center justify-between">
<div className=" flex flex-col md:flex-row gap-4">
          <h2 className="text-2xl font-bold w-full sm:w-auto">Ledger</h2>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className=" relative md:w-[30%]">
              <p className="font-medium top-1 left-2 absolute">From :</p>
              <input
                type="text"
                placeholder="dd/mm/yy"
                className="py-1 border w-full pl-14 rounded "
              />
            </div>
            <div className=" relative md:w-[30%]">
              <p className="font-medium top-1 left-2 absolute">To :</p>
              <input
                type="text"
                placeholder="dd/mm/yy"
                className="py-1 border w-full pl-9 rounded "
              />
            </div>
          </div>
        </div>
</div>

<div className="p-4 bg-white rounded-lg shadow overflow-x-auto">
  <table className="w-full border-collapse border border-gray-200 min-w-[600px]">
    <thead>
      <tr className="border">
        <th className="p-2">S#</th>
        <th className="p-2">NAME</th>
        <th className="p-2">DATE</th>
        <th className="p-2">DEBIT</th>
        <th className="p-2">CREDIT</th>
        <th className="p-2">BALANCE</th>
        <th className="p-2">REASON</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border">
        <td className="text-neutral-600 p-2 text-center">1</td>
        <td className="text-neutral-600 p-2">Jamal</td>
        <td className="text-neutral-600 p-2 text-center">12/07/21</td>
        <td className="text-neutral-600 p-2 text-center">4367</td>
        <td className="text-neutral-600 p-2 text-center">11,675</td>
        <td className="text-neutral-600 p-2 text-center">11,675</td>
        <td className="text-neutral-600 p-2">Lorem ipsum doler sit emit</td>
        <td className="p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
      </tr>
      <tr className="border">
        <td className="text-neutral-600 p-2 text-center">1</td>
        <td className="text-neutral-600 p-2">Jamal</td>
        <td className="text-neutral-600 p-2 text-center">12/07/21</td>
        <td className="text-neutral-600 p-2 text-center">4367</td>
        <td className="text-neutral-600 p-2 text-center">11,675</td>
        <td className="text-neutral-600 p-2 text-center">11,675</td>
        <td className="text-neutral-600 p-2">Lorem ipsum doler sit emit</td>
        <td className="p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
      </tr>
      <tr className="border">
        <td className="text-neutral-600 p-2 text-center">1</td>
        <td className="text-neutral-600 p-2">Jamal</td>
        <td className="text-neutral-600 p-2 text-center">12/07/21</td>
        <td className="text-neutral-600 p-2 text-center">4367</td>
        <td className="text-neutral-600 p-2 text-center">11,675</td>
        <td className="text-neutral-600 p-2 text-center">11,675</td>
        <td className="text-neutral-600 p-2">Lorem ipsum doler sit emit</td>
        <td className="p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
      </tr>
    </tbody>
  </table>
</div>

{/*  Trips Section */}
  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
  <div className=" flex flex-col md:flex-row gap-4">
          <h2 className="text-2xl font-bold w-full sm:w-auto">Trips</h2>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className=" relative md:w-[30%]">
              <p className="font-medium top-1 left-2 absolute">From :</p>
              <input
                type="text"
                placeholder="dd/mm/yy"
                className="py-1 border w-full pl-14 rounded "
              />
            </div>
            <div className=" relative md:w-[30%]">
              <p className="font-medium top-1 left-2 absolute">To :</p>
              <input
                type="text"
                placeholder="dd/mm/yy"
                className="py-1 border w-full pl-9 rounded "
              />
            </div>
          </div>
        </div>
  </div>
<div className="p-4 bg-white rounded-lg shadow overflow-x-auto">
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-200 min-w-[500px]">
      <thead className="">
        <tr>
          <th className="p-2 text-sm">S#</th>
          <th className="p-2 text-sm">NAME</th>
          <th className="p-2 text-sm">DATE</th>
          <th className="p-2 text-sm">TRUCK</th>
          <th className="p-2 text-sm">WEIGHT</th>
          <th className="p-2 text-sm">PRICE</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border">
          <td className="p-2 text-center text-neutral-600">1</td>
          <td className="p-2 text-neutral-600">Jamal</td>
          <td className="p-2 text-center text-neutral-600">12/07/21</td>
          <td className="p-2 text-center text-neutral-600">XYZ</td>
          <td className="p-2 text-center text-neutral-600">1.5 ton</td>
          <td className="p-2 text-center text-neutral-600">100,775</td>
        </tr>
        <tr className="border">
          <td className="p-2 text-center text-neutral-600">1</td>
          <td className="p-2 text-neutral-600">Jamal</td>
          <td className="p-2 text-center text-neutral-600">12/07/21</td>
          <td className="p-2 text-center text-neutral-600">XYZ</td>
          <td className="p-2 text-center text-neutral-600">1.5 ton</td>
          <td className="p-2 text-center text-neutral-600">100,775</td>
        </tr>
        <tr className="border">
          <td className="p-2 text-center text-neutral-600">1</td>
          <td className="p-2 text-neutral-600">Jamal</td>
          <td className="p-2 text-center text-neutral-600">12/07/21</td>
          <td className="p-2 text-center text-neutral-600">XYZ</td>
          <td className="p-2 text-center text-neutral-600">1.5 ton</td>
          <td className="p-2 text-center text-neutral-600">100,775</td>
        </tr>
        <tr className="border">
          <td className="p-2 text-center text-neutral-600">1</td>
          <td className="p-2 text-neutral-600">Jamal</td>
          <td className="p-2 text-center text-neutral-600">12/07/21</td>
          <td className="p-2 text-center text-neutral-600">XYZ</td>
          <td className="p-2 text-center text-neutral-600">1.5 ton</td>
          <td className="p-2 text-center text-neutral-600">100,775</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
}
