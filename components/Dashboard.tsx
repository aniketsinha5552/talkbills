"use client"
import { useRouter } from "next/navigation";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import { useEffect, useState } from "react";
import { Dialog, List } from "@mui/material";
import Add from "./Add";
import axios from "axios";
import ExpenseList from "./List";

const Dashboard: React.FC = () => {

    const router = useRouter()

    const [recents,setRecents]= useState()

    const getRecents=async()=>{
        let res = await axios.get("/api/recents")
        console.log(res.data)
        setRecents(res.data)
    }

    useEffect(()=>{getRecents()},[])
 
    const [open,setOpen] = useState(false)
    const add=()=>{
        setOpen(true)
    }

    return (
        <div className="mt-1 p-5">
            <div className="">
                <div>Dashboard</div>
                <div className="flex flex-row gap-2 justify-center">
                <button className="bg-slate-300 rounded-md hover:cursor-pointer hover:bg-slate-500 p-3 text-sm font-bold align-middle" onClick={() => router.push("/expenses")}>All Expenses</button>
                <button className="bg-green-300 rounded-md hover:cursor-pointer hover:bg-green-500 p-3 text-sm font-bold align-middle" onClick={add}>Add Expense</button>
                </div>


            </div>

            <div className="flex flex-row justify-around align-middle mt-10 flex-wrap">
                <BarChart />
                <PieChart />
            </div>

            <h1 className="mt-2 mb-1 text-gray-700">Recents</h1>
            <ExpenseList list={recents}></ExpenseList>
            {/* <h1>Top</h1> */}

            <Dialog open={open} onClose={()=>setOpen(false)}>
                <Add onClose= {()=>setOpen(false)}></Add>
            </Dialog>

        </div>
    );
}

export default Dashboard;