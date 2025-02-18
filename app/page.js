"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect , useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "./loader/page";

export default function Home() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      router.push("/dashboard");
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
   <div>
     {isLoading? <Loader /> : <div className="h-screen flex justify-center items-center">
       Loading...
      </div>} 
    </div>
    
  );
}
