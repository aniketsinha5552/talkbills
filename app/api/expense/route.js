import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


export const GET = async(req)=>{
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const expenses = await prisma.expense.findMany()

  return new NextResponse(JSON.stringify(expenses,{status:200}))
}