

export default function Release() {

    return (
        <div className=" w-full flex justify-center items-center">

        <div className="p-6 bg-white  w-[50%] shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center">Release</h2>
            <div className=" w-full flex flex-col gap-4 mb-4">
                <select className=" border text-neutral-500  px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400">
                    <option>Transporter name</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <select className=" border text-neutral-500   px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400">
                    <option>Contact person</option>
                </select>
                <input type="text" placeholder="Cell#" className="  border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2" />
               <input type="text" placeholder="Last trip" className=" border  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 px-3 py-2 col-span-2" />
            </div>
            <button className="w-full bg-yellow-400 font-bold py-2 rounded hover:bg-yellow-500">
            Submit
            </button>
        </div>
    </div>
    );
};


