"use client"
import ExpenseList from '@/components/List';
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
    <div className='p-5'>
        <h1 className='text-center text-gray-700 text-2xl font-medium'>Expense History</h1>
        <ExpenseList list={expenseList}></ExpenseList>
    </div>
  )
}

export default Expenses