"use client"
import Dashboard from "@/components/Dashboard";
import Image from "next/image";

export default function Home() {
  return (
   <div>
     <h1 className= "mt-2 text-center text-3xl">
      <Dashboard/>
     </h1>
   </div>
  );
}
