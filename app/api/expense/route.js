import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


export const GET = async(req,res)=>{
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const userId = searchParams.get("user_id")

  try{
    const expenses = await prisma.expense.findMany({
      where:{
        user:{
          email : email
        }
      },
      include:{
        category: true
      }
    })
  
    // return res.json({user:userId})
  
    return new NextResponse(JSON.stringify(expenses,{status:200}))
  }catch(e){
    console.log(e)
    return new NextResponse({message:"Something went wrong"},{status:400})
  }

}