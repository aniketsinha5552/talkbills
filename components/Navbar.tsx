'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  
  const router = useRouter()
  return (
    <div className='bg-slate-300 flex-col justify-between'>
    <span onClick={()=>router.push('/')} className='text-3xl text-center font-semibold m-3 hover:cursor-pointer'>Talkbills</span>

    <button className='bg-blue-300 rounded-md p-2 m-3' onClick={()=>router.push('/login')}>Login</button>
    </div>
  )
}

export default Navbar