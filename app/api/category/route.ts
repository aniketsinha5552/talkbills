import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"


export const GET=async()=>{
    const prisma = new PrismaClient()

    try{
        let cats = await prisma?.category.findMany()
        return new NextResponse(JSON.stringify(cats))
    }catch(e){
        return  new NextResponse(JSON.stringify({status:400}))
    }

}