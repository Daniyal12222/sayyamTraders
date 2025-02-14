
export default function AddSourceForm() {
    return (
        <div className=" w-full flex justify-center items-center">

            <div className="p-6 bg-white rounded-lg w-[50%] shadow-md">
                <h2 className="text-xl font-bold mb-4 text-center">Add A New Source</h2>
                <div className=" w-full flex flex-col gap-4 mb-4">
                    <select className="rounded border text-neutral-500  px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400">
                        <option>Source name</option>
                    </select>
                    <input type="text" placeholder="Location" className="rounded border  px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400" />

                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <select className="rounded border text-neutral-500   px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400">
                        <option>Contact person</option>
                    </select>
                    <input type="text" placeholder="Cell#" className=" rounded border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="Ash cost" className=" rounded border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="Curr. bill" className=" rounded border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
                    <input type="text" placeholder="Tot. pending" className=" rounded border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2 col-span-2" />
                </div>
                <button className="w-full bg-yellow-400 font-bold py-2 rounded hover:bg-yellow-500">
                    Add source
                </button>
            </div>
        </div>
    );
};


