import { getAuthSession } from "@/utils/auth"
import prisma from "@/utils/prismaClient"
import { NextResponse } from "next/server"


export const GET=async(req:Request)=>{

    const session:any = await getAuthSession()
    const email:any = session?.user?.email
    console.log(email)
    // get last 7 days expenses
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    try{
        const expenses = await prisma.expense.findMany({
            where: {
                user: {
                    email: email
                },
                created_at: {
                    gte: sevenDaysAgo.toISOString() // gte means "greater than or equal to"
                }
            },
            orderBy: {
                created_at: 'asc' // asc means "ascending"
            }
        });
        let res:any = [];
        expenses.forEach((item)=>{
            res.push({...item, date: item.created_at?.getDate(), day: item.created_at?.getDay()})
        })
        let groupedData=  Object.fromEntries(groupByDay(res))
        return new NextResponse(JSON.stringify(groupedData))
    }catch(e){
        return new NextResponse(JSON.stringify({status:400}))
    }

}


function groupByDay(arr:any){
    // {0: 123, 1:100} => {day:amount}
    let map = new Map()
    for(let i=0;i<arr.length;i++){
        if(map.get(arr[i].date)==null || map.get(arr[i].date)== undefined){
            map.set(arr[i].date, {amount: Number(arr[i].amount), created_at: arr[i].created_at, day: arr[i].day })
        }else{
            map.set(arr[i].date, {amount: map.get(arr[i].date).amount+Number(arr[i].amount), created_at: arr[i].created_at,  day: arr[i].day})         
        }
    }
    return map
}