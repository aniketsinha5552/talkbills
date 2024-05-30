"use client"
import { useRouter } from "next/navigation";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import { useEffect, useState } from "react";
import { Dialog, List } from "@mui/material";
import Add from "./Add";
import axios from "axios";
import ExpenseList from "./List";
import Card from "./card";
import Button from "./button";

const Dashboard: React.FC = () => {
    const router = useRouter();
    const [recents, setRecents] = useState();

    const getRecents = async () => {
        let res = await axios.get("/api/recents");
        console.log(res.data);
        setRecents(res.data);
    };

    useEffect(() => { getRecents(); }, []);

    const [open, setOpen] = useState(false);
    const add = () => {
        setOpen(true);
    };

    return (
        <div className="mt-5 p-6 bg-gray-100 min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
                <div className="flex flex-row gap-4 justify-center">
                    <Button type="gray"
                        onClick={() => router.push("/expenses")}
                    >
                        All Expenses
                    </Button>
                    <Button
                        type="success"
                        onClick={add}
                    >
                        Add Expense
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap justify-around items-center gap-8 mb-8">
                <Card>Total Expense this month <p className="text-green-600">₹20000</p></Card>
                <Card>Most spent category <p className="text-green-600">Household</p></Card>
                <Card>Biggest expense <p className="text-green-600">₹1000 AC</p></Card>

                {/* <BarChart /> */}
                {/* <PieChart /> */}
            </div>
            <div className="p-3 flex justify-end m-4">
                <Button onClick={()=>router.push("/analysis")} type="primary">View Expense Breakdown</Button>
                <button></button>
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-4">Recents</h2>
            <ExpenseList list={recents} />

            <Dialog open={open} onClose={() => setOpen(false)}>
                <Add onClose={() => setOpen(false)} />
            </Dialog>
        </div>
    );
};

export default Dashboard;
