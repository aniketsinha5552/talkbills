import React from 'react'

const LoginPage = () => {
  return (
    <div className='rounded-sm grid place-items-center gap-10'>
        <h1 className='text-3xl mb-10 mt-5'>Login</h1>
        <button className='bg-red-500 w-36 text-center p-3 rounded-md text-2xl font-medium' >Google</button>
        <button className='bg-black w-36 text-center p-3 rounded-md text-white text-2xl font-medium'>Github</button>
        <button className='bg-blue-500 w-36 text-center p-3 rounded-md text-2xl font-medium'>Facebook</button>
    </div>
  )
}

export default LoginPage