import React from 'react'

const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='rounded-md border-slate-100 shadow-md p-5 bg-white text-lg'>
        {children}
    </div>
  )
}

export default Card