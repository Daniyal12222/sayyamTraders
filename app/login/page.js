import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-g\ ">
      <div className="w-[40%] h-[50vh] shadow-lg   flex flex-col justify-around items-center">

        <p className="text-neutral-700">Please enter your login details</p>

        <form  className="flex flex-col justify-center items-center gap-3  w-[80%] " >
          <input type="email" placeholder="Email"  className="w-[70%] border  px-4 py-2 focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 rounded" required   />
          <input type="password" placeholder="Password" className="w-[70%] border px-4 py-2  focus:outline-none focus:border-yellow-400 border-s-2 border-s-yellow-400 rounded " required  />
          <button type="submit" className="w-[70%] px-4 py-3 text-sm text-black bg-s-orange-300 rounded hover:bg-s-yellow-400 font-semibold bg-yellow-500 mt-3">Login</button>
          
        </form>

        <Link href="#" className="text-sm text-blue-500 hover:text-s-orange-500  hover:underline mb-3 ">Forgot Password?</Link>


      </div>
    </div>
  );
}
