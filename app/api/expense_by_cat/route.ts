// import prisma from "@/utils/connect";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


export const GET = (req: Request)=>{
    const { searchParams } = new URL(req.url);
    const cat = searchParams.get("cat")

    let prisma = new PrismaClient()

    const expenses = prisma?.expense.groupBy({
        by:['category_id']
    })
    return new NextResponse(JSON.stringify(expenses))
}