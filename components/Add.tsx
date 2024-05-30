"use client"
import { ICategory } from '@/utils/interfaces/ICategory'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const Add = ({onClose}:any) => {

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

    try{
      let res = await axios.post("/api/expense",{
        item: e.item,
        amount: e.amount,
        category_id: e.category,
        email: data?.user?.email
      })
      alert("Expense added!")
      onClose()
    }catch(e){
      alert(e)
    }
  }
  return (
    // <div className='bg-slate-300 h-[400px] w-[400px] flex flex-col'>
    //     <h1 className='text-center text-2xl p-2 m-1'>Add Expense</h1>
    //     <form onSubmit={handleSubmit(add)} className='flex flex-col p-3 gap-5'>
    //     <input {...register("item",{ required: true })} className='bg-white rounded-md border-none mb-2 h-12 p-1' placeholder='Item'></input>
    //     <input {...register("amount",{ required: true })} className='bg-white rounded-md border-none mb-2 h-12 p-1' placeholder='Amount'></input>
    //     <select defaultValue={""} {...register("category",{ required: true })} className='bg-white rounded-md border-none mb-2 h-12 p-1' >
    //         <option value={""} disabled>Category</option>
    //         {cats?.map((item:any)=>  <option value={item?.id} key={item?.id}>{item?.name}</option>)}

    //     </select>
    //     <button className='flex-2 p-1 bg-green-300 rounded-md h-12' type="submit">Add</button>
    //     </form>

    // </div>
    <div className="bg-white shadow-lg rounded-lg max-w-md mx-auto p-6">
    <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">Add Expense</h1>
    <form onSubmit={handleSubmit(add)} className="flex flex-col gap-4">
        <input
            {...register("item", { required: true })}
            className="bg-gray-100 rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Item"
        />
        <input
            {...register("amount", { required: true })}
            className="bg-gray-100 rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Amount"
        />
        <select
            defaultValue={""}
            {...register("category", { required: true })}
            className="bg-gray-100 rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value={""} disabled>Category</option>
            {cats?.map((item: any) => (
                <option value={item?.id} key={item?.id}>{item?.name}</option>
            ))}
        </select>
        <button
            className="bg-blue-500 text-white font-semibold rounded-md p-3 hover:bg-blue-600 transition-all duration-300"
            type="submit"
        >
            Add
        </button>
    </form>
</div>

  )
}

export default Add