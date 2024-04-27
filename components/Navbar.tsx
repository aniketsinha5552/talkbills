'use client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  
  const router = useRouter()

  const {data,status}= useSession()
  console.log(data,status)
  if(status=="authenticated"){
      router.push("/")
  }
  if(status=="unauthenticated"){
    router.push("/login")
  }


  const logout=()=>{
    signOut();
    router.push('/login')
  }

  return (
    <div className='text-white bg-gray-800 p-3 flex flex-row justify-between'>
    <div onClick={()=>router.push('/')} className='text-3xl text-center font-semibold m-3 hover:cursor-pointer'>Talkbills</div>

    {status=="authenticated" && 
    <div className='flex flex-row align-middle justify-center m-3 gap-2'>
     <span className='mt-2'>{data.user?.name} </span>
     <img className='w-10 h-10 rounded-full' src={data.user?.image??""} alt='user'/>
     <button className='bg-blue-500 rounded-md p-2' onClick={logout}>Logout</button>
    </div>
  }
    {status == "unauthenticated" &&
    <button className='bg-blue-500 rounded-md p-2 m-3' onClick={()=>router.push('/login')}>Login</button>}
    </div>
  )
}

export default Navbar