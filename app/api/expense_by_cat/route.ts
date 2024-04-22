// import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/prismaClient";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


export const GET = async(req: Request)=>{
    
  const session = await getAuthSession()

  const email:any = session?.user?.email


    const expenses = await prisma?.expense.groupBy({
        by:['category_id'],
        where:{
            user:{
              email : email
            }
          },
        _sum:{
            amount:true
        },
    })

    let res:any =[]

    await Promise.all(expenses.map(async(expense:any,idx: number)=>{
        let cat = await prisma?.category.findMany({
            where:{
                id: expense.category_id
            }
        })
        res.push({
            sum : expenses[idx]._sum,
            category : cat[0].name
        })
    }))

    return new NextResponse(JSON.stringify(res))
}