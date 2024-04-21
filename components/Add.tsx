"use client"
import { ICategory } from '@/utils/interfaces/ICategory'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const Add = () => {

  const [cats,setCats] = useState([])

  const {data} = useSession()

  const getCategories=async()=>{
    let res = await axios.get(`/api/category`)
    console.log(res.data)
    setCats(res.data)
  }

  useEffect(()=>{
     getCategories()
  },[])

  const {register,handleSubmit} = useForm()

  const add=async(e:any)=>{
    let res = await axios.post("/api/expense",{
      item: e.item,
      amount: e.amount,
      category_id: e.category,
      email: data?.user?.email
    })
    console.log(res.data)
    // alert(JSON.stringify(e))
  }
  return (
    <div className='bg-slate-300 h-[400px] w-[400px] flex flex-col'>

        <form onSubmit={handleSubmit(add)} className='flex flex-col p-3 gap-5'>
        <input {...register("item")} className='bg-white rounded-md border-none mb-2 h-12 p-1' placeholder='Item'></input>
        <input {...register("amount")} className='bg-white rounded-md border-none mb-2 h-12 p-1' placeholder='Amount'></input>
        <select {...register("category")} className='bg-white rounded-md border-none mb-2 h-12 p-1' >
            <option value={""} disabled selected>Category</option>
            {cats?.map((item:any)=>  <option value={item?.id} key={item?.id}>{item?.name}</option>)}

        </select>
        <button className='flex-2 p-1 bg-green-300 rounded-md h-12' type="submit">Add</button>
        </form>

    </div>
  )
}

export default Add