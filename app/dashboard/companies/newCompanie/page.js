
export default function AddCompanies() {
    return (
        <div className=" w-full flex justify-center items-center">

            <div className="p-6 bg-white rounded-lg w-[50%] shadow-md">
                <h2 className="text-xl font-bold mb-4 text-center">Add A New Company </h2>
                <div className=" w-full flex flex-col gap-4 mb-4">
                 
                    <input type="text" placeholder="Company name" className="rounded border  px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400" />

                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    
                    <input type="text" placeholder="Location" className=" rounded border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="Price" className=" rounded border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="Curr. bill" className=" rounded border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="Total pending" className=" rounded border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="Contact person" className=" rounded border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2 col-span-2" />
                </div>
                <button className="w-full bg-yellow-400 font-bold py-2 rounded hover:bg-yellow-500">
                Add company
                </button>
            </div>
        </div>
    );
};


