"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Expenses = () => {
  const session = useSession();

  const [expenseList, setExpenseList]= useState([])
  const email = session?.data?.user?.email

  const getExpenses=async()=>{
    if(email){
      try{
        let res = await axios.get(`http://localhost:3000/api/expense?email=${email}`)
        console.log(res.data)
        setExpenseList(res.data)
      }catch(e){
        console.log(e)
      }

    }

  }
  useEffect(()=>{
    getExpenses()
  },[email])

  return (
    <div>
        <h1>My Expenses</h1>
        <div>
          {expenseList && expenseList.map((item:any)=>{
            return (
              <div>{item.item} - {item.amount} ({item.category.name})</div>
            )
          })}
        </div>
    </div>
  )
}

export default Expenses