"use client"
import { useRouter } from "next/navigation";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import { useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import Add from "./Add";
import axios from "axios";

const Dashboard: React.FC = () => {

    const router = useRouter()
 
    const [open,setOpen] = useState(false)
    const add=()=>{
        setOpen(true)
    }

    return (
        <div className="mt-5">
            <div className="flex flex-row justify-center gap-5">
                <h1>Dashboard</h1>
                <button className="bg-slate-300 rounded-md hover:cursor-pointer p-3 text-sm font-bold align-middle" onClick={() => router.push("/expenses")}>All Expenses</button>
                <button className="bg-green-300 rounded-md hover:cursor-pointer p-3 text-sm font-bold align-middle" onClick={add}>Add Expense</button>

            </div>

            <div className="flex flex-row justify-around align-middle mt-10 flex-wrap">
                <BarChart />
                <PieChart />
            </div>

            <h1>Recents</h1>
            <h1>Top</h1>

            <Dialog open={open} onClose={()=>setOpen(false)}>
                <Add></Add>
            </Dialog>

        </div>
    );
}

export default Dashboard;