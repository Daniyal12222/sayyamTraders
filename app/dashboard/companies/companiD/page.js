import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CompanyDashboard() {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Company Name</h1>
        <div className="flex gap-2 ">
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
      <div className="grid grid-cols-3 gap-4">
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
      <div className="w-full gap-2 flex">

        <Card>
          <CardContent className="w[62%] p-6 grid grid-cols-3 gap-2 text-center">
            <div className="">
              <p className="font-semibold">Contact person</p>
              <p className="text-sm text-neutral-600">Syed Haider</p>
            </div>
            <div>
              <p className="font-semibold">Cell#</p>
              <p className="text-sm text-neutral-600">03671432146</p>
            </div>
            <div>
              <p className="font-semibold">Price</p>
              <p className="text-sm text-neutral-600">11,466</p>
            </div>
          </CardContent>
        </Card>
        <table className=" w-[50%] ">
          <thead >
            <tr className="  my-2 text-center bg-white border" >
              <th>SOURSCE</th>
              <th>TRANSPORTER</th>
              <th>COST</th>
              <th><div className="w-8 h-8 rounded-full shadow-lg flex justify-center items-center">+</div></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-center bg-white p-2">
              <td>ASH</td>
              <td>Company Name</td>
              <td>10,000</td>
              <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
            </tr>
            <tr className="border-b text-center bg-white p-2">
              <td>ASH</td>
              <td>Company Name</td>
              <td>10,000</td>
              <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
            </tr>
            <tr className="border-b text-center bg-white p-2">
              <td>ASH</td>
              <td>Company Name</td>
              <td>10,000</td>
              <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
            </tr>

          </tbody>

        </table>

      </div>
      {/* Ledger Section */}
      <div className="p-4 bg-white rounded-lg shadow">
        <div className="flex gap-3 w-full ">
          <h2 className="text-2xl font-bold mb-4">Ledger</h2>
          <div className="flex space-x-2 mb-4">
            <input type="text" placeholder="From: dd/mm/yy" className="border rounded px-2 py-1" />
            <input type="text" placeholder="To: dd/mm/yy" className="border rounded px-2 py-1" />
          </div>
        </div>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="">
            <tr className="border">
              <th className=" p-2">S#</th>
              <th className=" p-2">NAME</th>
              <th className=" p-2">DATE</th>
              <th className=" p-2">DEBIT</th>
              <th className=" p-2">CREDIT</th>
              <th className=" p-2">BALANCE</th>
              <th className=" p-2">REASON</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className=" text-neutral-600 p-2 text-center">1</td>
              <td className=" text-neutral-600 p-2">jamal</td>
              <td className=" text-neutral-600 p-2 text-center">12/07/21</td>
              <td className=" text-neutral-600 p-2 text-center">4367</td>
              <td className=" text-neutral-600 p-2 text-center">11,675</td>
              <td className=" text-neutral-600 p-2 text-center">11,675</td>
              <td className=" text-neutral-600 p-2">Lorem ipsum doler sit emit </td>
              <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
            </tr>
            <tr className="border">
              <td className=" text-neutral-600 p-2 text-center">2</td>
              <td className=" text-neutral-600 p-2">jamal</td>
              <td className=" text-neutral-600 p-2 text-center">12/07/21</td>
              <td className=" text-neutral-600 p-2 text-center">4367</td>
              <td className=" text-neutral-600 p-2 text-center">11,675</td>
              <td className=" text-neutral-600 p-2 text-center">11,675</td>
              <td className=" text-neutral-600 p-2">Lorem ipsum doler sit emit </td>
              <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
            </tr>
            <tr className="border">
              <td className="text-neutral-600 p-2 text-center">3</td>
              <td className="text-neutral-600 p-2">jamal</td>
              <td className="text-neutral-600 p-2 text-center">12/07/21</td>
              <td className="text-neutral-600 p-2 text-center">4367</td>
              <td className="text-neutral-600 p-2 text-center">11,675</td>
              <td className="text-neutral-600 p-2 text-center">11,675</td>
              <td className="text-neutral-600 p-2">Lorem ipsum doler sit emit </td>
              <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
            </tr>
            <tr className="border">
              <td className="text-neutral-600 p-2 text-center">4</td>
              <td className="text-neutral-600 p-2">jamal</td>
              <td className="text-neutral-600 p-2 text-center">12/07/21</td>
              <td className="text-neutral-600 p-2 text-center">4367</td>
              <td className="text-neutral-600 p-2 text-center">11,675</td>
              <td className="text-neutral-600 p-2 text-center">11,675</td>
              <td className="text-neutral-600 p-2">Lorem ipsum doler sit emit </td>
              <td className=" p-2 text-blue-500 cursor-pointer hover:underline">✎ Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* note */}
      <div className="w-full  py-3">
        <p className="text-md text-neutral-500">Note</p>
        <div className="w-full px-3 py-2 bg-white ronded ">
          <p className="text-md ">call next friday </p>
        </div>
      </div>

      {/* Trips Section */}
      <div className="p-4 bg-white rounded-lg shadow">
        <div className="flex gap-3 w-full   ">
          <h2 className="text-2xl font-bold mb-4">Trips</h2>
          <div className="flex space-x-2 mb-4">
            <input type="text" placeholder="From: dd/mm/yy" className="border rounded px-1 py-1" />
            <input type="text" placeholder="To: dd/mm/yy" className="border rounded px-1 py-1" />
          </div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black ms-40">Generate bill</Button>
        </div>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="">
            <tr className="border">
              <th className=" p-2">S#</th>
              <th className=" p-2">NAME</th>
              <th className=" p-2">DATE</th>
              <th className=" p-2">TRUCK</th>
              <th className=" p-2">WEIGHT</th>
              <th className=" p-2">PRICE</th>
            </tr>
          </thead>
          <tbody>
           
            <tr className="border">
              <td className=" text-neutral-600 p-2 text-center">1</td>
              <td className=" text-neutral-600 p-2">jamal</td>
              <td className=" text-neutral-600 p-2 text-center">12/07/21</td>
              <td className=" text-neutral-600 p-2 text-center">XYZ</td>
              <td className=" text-neutral-600 p-2 text-center">1.5 ton</td>
              <td className=" text-neutral-600 p-2 text-center">100,775</td>
            </tr>
            <tr className="border">
              <td className=" text-neutral-600 p-2 text-center">2</td>
              <td className=" text-neutral-600 p-2">jamal</td>
              <td className=" text-neutral-600 p-2 text-center">12/07/21</td>
              <td className=" text-neutral-600 p-2 text-center">XYZ</td>
              <td className=" text-neutral-600 p-2 text-center">1.5 ton</td>
              <td className=" text-neutral-600 p-2 text-center">100,775</td>
            </tr>
            <tr className="border">
              <td className=" text-neutral-600 p-2 text-center">3</td>
              <td className=" text-neutral-600 p-2">jamal</td>
              <td className=" text-neutral-600 p-2 text-center">12/07/21</td>
              <td className=" text-neutral-600 p-2 text-center">XYZ</td>
              <td className=" text-neutral-600 p-2 text-center">1.5 ton</td>
              <td className=" text-neutral-600 p-2 text-center">100,775</td>
            </tr>
            <tr className="border">
              <td className=" text-neutral-600 p-2 text-center">4</td>
              <td className=" text-neutral-600 p-2">jamal</td>
              <td className=" text-neutral-600 p-2 text-center">12/07/21</td>
              <td className=" text-neutral-600 p-2 text-center">XYZ</td>
              <td className=" text-neutral-600 p-2 text-center">1.5 ton</td>
              <td className=" text-neutral-600 p-2 text-center">100,775</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
}
