"use client";
import { useState } from 'react';

export default function AddTripForm() {
    //   const [formData, setFormData] = useState({
    //     name: '',
    //     source: '',
    //     transporter: '',
    //     date: '',
    //     truck: '',
    //     weight: '',
    //     price: '',
    //     ashCost: '',
    //   });

    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    //   };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form submitted:', formData);
    //   };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-6 rounded-lg shadow-md space-y-4 w-96">
                <h2 className="text-2xl font-bold text-center">Add A New Trip</h2>
                <input type="text" name="name" placeholder="Name" className="w-full p-2  rounded border  px-4 py-1 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400" />
                <div className="flex space-x-2">
                    <select name="source" className="w-1/2 text-sm text-neutral-500 p-2 rounded border  px-4 py-1 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400">
                        <option value="">Source</option>
                    </select>
                    <select name="transporter" className="w-1/2  text-sm text-neutral-500 p-2 rounded border  px-4 py-1 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400">
                        <option value="">Transporter</option>
                    </select>
                </div>
                <div className="flex space-x-2">
                    <input type="text" placeholder='date' name="date" className="w-1/2 p-2 border rounded px-4 py-1 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400" />
                    <select name="truck" className="w-1/2 text-sm text-neutral-500 p-2 rounded border  px-4 py-1 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400">
                        <option value="">Truck</option>
                    </select>
                </div>
                <div className="flex space-x-2">
                    <input type="number" name="weight" placeholder="Weight (Ton)" className="w-1/2 p-2 rounded border  px-4 py-1 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400" />
                    <input type="number" name="price" placeholder="Price" className="w-1/2 p-2 rounded border  px-4 py-1 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400" />
                </div>
                <input type="number" name="ashCost" placeholder="Ash cost" className="w-full p-2 border  px-4 py-1 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 rounded" />
                <button type="submit" className="w-full bg-yellow-500  py-2 rounded text-lg font-semibold">
                    Add trip
                </button>
            </form>
        </div>
    );
}
