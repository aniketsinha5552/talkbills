"use client"
import ExpenseList from '@/components/List';
import { Select } from '@mui/material';
import axios from 'axios';
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Expenses = () => {

  const [expenseList, setExpenseList]= useState([])

  const [categories,setCategories] = useState([])

  const getCategories=async()=>{
    try{
      let res = await axios.get(`/api/category`)
      setCategories(res.data)
    }catch(e){
      console.log(e)
    }
  }

  const getExpenses=async(filter="")=>{
      try{
        let res = await axios.get(`/api/expense`)
        console.log(res.data)

        if(filter!=""){
          setExpenseList(res.data.filter((item:any)=>item?.category_id ==filter));
        }else{
          setExpenseList(res.data)

        }
      }catch(e){
        console.log(e)
      }
  }
  useEffect(()=>{
    getExpenses()
    getCategories()
  },[])

  const applyFilter = (e:any)=>{
      let val = e.target.value
      // console.log(e.target.value)
      getExpenses(val)
  }

  return (
    <div className='p-5'>
        <h1 className='text-center text-gray-700 text-2xl font-medium'>Expense History</h1>
        <div className='flex flex-row justify-center mt-5 gap-5 align-middle'>
          <label>Sort By Category</label>
          <select defaultValue={""} onChange={applyFilter} className='bg-white rounded-md border-2 p-1' >
              <option value={""}>All</option>
              {categories?.map((item:any)=>  <option value={item?.id} key={item?.id}>{item?.name}</option>)}

          </select>
        </div>
        <ExpenseList list={expenseList}></ExpenseList>
    </div>
  )
}

export default Expenses