"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Expenses = () => {

  const [expenseList, setExpenseList]= useState([])

  const getExpenses=async()=>{
      try{
        let res = await axios.get(`http://localhost:3000/api/expense`)
        console.log(res.data)
        setExpenseList(res.data)
      }catch(e){
        console.log(e)
      }
  }
  useEffect(()=>{
    getExpenses()
  },[])

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