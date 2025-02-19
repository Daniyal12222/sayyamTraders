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
    <div className="p-2 space-y-6 bg-gray-100 ">
      <div className="w-full flex justify-between items-center">
        <button onClick={() => router.back()} className="text-3xl"><HiArrowLeft /></button>
        <p className="flex text-md text-neutral-600"><MdEdit />EDIT DETAILS</p>
      </div>

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold w-full sm:w-auto">Company Name</h1>
        <div className="flex gap-3  md:gap-2 mt-4 sm:mt-0">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <div className="w-full gap-4 sm:gap-6 flex flex-wrap sm:flex-nowrap">
        <Card className="w-full flex flex-col md:flex-row bg-[#f2f3f5] sm:w-2/3">
          {/* Contact Person */}
          <CardContent className="p-6 border bg-white text-center md:rounded-l-md">
            <div className="flex flex-col justify-center items-center p-5">
              <p className="font-semibold">Contact Person</p>
              <p className="text-sm text-neutral-600">Syed Haider</p>
            </div>
          </CardContent>
          {/* Cell Number */}
          <CardContent className="p-6 border bg-white text-center">
            <div className="flex flex-col justify-center items-center p-5">
              <p className="font-semibold">Cell#</p>
              <p className="text-sm text-neutral-600">03671432146</p>
            </div>
          </CardContent>
          {/* Price */}
          <CardContent className="p-6 border bg-white text-center md:rounded-r-md">
            <div className="flex flex-col justify-center items-center p-5">
              <p className="font-semibold">Price</p>
              <p className="text-sm text-neutral-600">11,466</p>
            </div>
          </CardContent>
        </Card>
        <div className="w-full sm:w-[50%] overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="my-2 text-center bg-white border">
                <th className="p-2">SOURCE</th>
                <th className="p-2">TRANSPORTER</th>
                <th className="p-2">COST</th>
                <th className="p-2">
                  <button
                    onClick={() => router.push("./newCost")}
                    className="w-8 h-8 rounded-full shadow-lg flex justify-center items-center  text-black text-lg hover:bg-blue-600"
                  >
                    +
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-center bg-white p-2">
                <td className="p-2">ASH</td>
                <td className="p-2">Company Name</td>
                <td className="p-2">10,000</td>
                <td className="p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
              </tr>
              <tr className="border-b text-center bg-white p-2">
                <td className="p-2">ASH</td>
                <td className="p-2">Company Name</td>
                <td className="p-2">10,000</td>
                <td className="p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
              </tr>
              <tr className="border-b text-center bg-white p-2">
                <td className="p-2">ASH</td>
                <td className="p-2">Company Name</td>
                <td className="p-2">10,000</td>
                <td className="p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      {/* Ledger Section */}
      <div className="flex flex-wrap gap-4 w-full">
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

      <div className="p-4 bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
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
                <td className="text-neutral-600 p-2">jamal</td>
                <td className="text-neutral-600 p-2 text-center">12/07/21</td>
                <td className="text-neutral-600 p-2 text-center">4367</td>
                <td className="text-neutral-600 p-2 text-center">11,675</td>
                <td className="text-neutral-600 p-2 text-center">11,675</td>
                <td className="text-neutral-600 p-2">Lorem ipsum doler sit emit</td>
                <td className="p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
              </tr>
              <tr className="border">
                <td className="text-neutral-600 p-2 text-center">1</td>
                <td className="text-neutral-600 p-2">jamal</td>
                <td className="text-neutral-600 p-2 text-center">12/07/21</td>
                <td className="text-neutral-600 p-2 text-center">4367</td>
                <td className="text-neutral-600 p-2 text-center">11,675</td>
                <td className="text-neutral-600 p-2 text-center">11,675</td>
                <td className="text-neutral-600 p-2">Lorem ipsum doler sit emit</td>
                <td className="p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
              </tr>
              <tr className="border">
                <td className="text-neutral-600 p-2 text-center">1</td>
                <td className="text-neutral-600 p-2">jamal</td>
                <td className="text-neutral-600 p-2 text-center">12/07/21</td>
                <td className="text-neutral-600 p-2 text-center">4367</td>
                <td className="text-neutral-600 p-2 text-center">11,675</td>
                <td className="text-neutral-600 p-2 text-center">11,675</td>
                <td className="text-neutral-600 p-2">Lorem ipsum doler sit emit</td>
                <td className="p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
              </tr>
              {/* Other rows */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Note */}
      <div className="w-full py-3">
        <p className="text-md text-neutral-500">Note</p>
        <div className="w-full px-3 py-2 bg-white rounded">
          <p className="text-md">Call next Friday</p>
        </div>
      </div>


      {/* Trips Section */}
      <div className="flex flex-wrap justify-between gap-4 w-full ">
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
        <Button className="bg-yellow-400  hover:bg-yellow-500 text-black mx-auto sm:mx-0 mt-3 sm:mt-0">
          Generate bill
        </Button>
      </div>

      <div className="p-4 bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="border">
                <th className="p-2">S#</th>
                <th className="p-2">NAME</th>
                <th className="p-2">DATE</th>
                <th className="p-2">TRUCK</th>
                <th className="p-2">WEIGHT</th>
                <th className="p-2">PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="text-neutral-600 p-2 text-center">1</td>
                <td className="text-neutral-600 p-2">jamal</td>
                <td className="text-neutral-600 p-2 text-center">12/07/21</td>
                <td className="text-neutral-600 p-2 text-center">XYZ</td>
                <td className="text-neutral-600 p-2 text-center">1.5 ton</td>
                <td className="text-neutral-600 p-2 text-center">100,775</td>
              </tr>
              <tr className="border">
                <td className="text-neutral-600 p-2 text-center">1</td>
                <td className="text-neutral-600 p-2">jamal</td>
                <td className="text-neutral-600 p-2 text-center">12/07/21</td>
                <td className="text-neutral-600 p-2 text-center">XYZ</td>
                <td className="text-neutral-600 p-2 text-center">1.5 ton</td>
                <td className="text-neutral-600 p-2 text-center">100,775</td>
              </tr>
              <tr className="border">
                <td className="text-neutral-600 p-2 text-center">1</td>
                <td className="text-neutral-600 p-2">jamal</td>
                <td className="text-neutral-600 p-2 text-center">12/07/21</td>
                <td className="text-neutral-600 p-2 text-center">XYZ</td>
                <td className="text-neutral-600 p-2 text-center">1.5 ton</td>
                <td className="text-neutral-600 p-2 text-center">100,775</td>
              </tr>
              {/* Other rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
