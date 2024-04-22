import { NextResponse } from "next/server";
import prisma from "@/utils/prismaClient";
import { getAuthSession } from "@/utils/auth";


export const GET=async(req:Request)=>{

    const session = await getAuthSession()

    const email:any = session?.user?.email

    let expData = await prisma.expense.findMany({
        where: {
          user:{
            email: email
          }
        },
        take: 5,
        orderBy: {
          created_at: 'desc'
        }
      });

      return new NextResponse(JSON.stringify(expData))
}