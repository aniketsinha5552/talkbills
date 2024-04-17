'use client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  
  const router = useRouter()

  const {data,status}= useSession()
  console.log(data,status)
  // if(status=="authenticated"){
  //     router.push("/")
  // }
  // if(status=="unauthenticated"){
  //   router.push("/login")
  // }
  return (
    <div className='text-white bg-gray-800 flex flex-row justify-between align-middle'>
    <span onClick={()=>router.push('/')} className='text-3xl text-center font-semibold m-3 hover:cursor-pointer'>Talkbills</span>

    {status=="authenticated" && 
    <button className='bg-blue-500 rounded-md p-2 m-3' onClick={()=>signOut()}>Logout</button>
  }
    {status == "unauthenticated" &&
    <button className='bg-blue-500 rounded-md p-2 m-3' onClick={()=>router.push('/login')}>Login</button>}
    </div>
  )
}

export default Navbar