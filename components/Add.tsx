import React from 'react'

const Add = () => {

  const add=()=>{
    alert("added")
  }
  return (
    <div className='bg-slate-300 h-[400px] w-[400px] flex flex-col'>

        <div className='flex flex-col p-3 gap-5'>
        <input className='bg-white rounded-md border-none mb-2 h-12 p-1' placeholder='Item'></input>
        <input className='bg-white rounded-md border-none mb-2 h-12 p-1' placeholder='Amount'></input>
        <select className='bg-white rounded-md border-none mb-2 h-12 p-1' >
            <option value={""} disabled selected>Category</option>
            <option value={"household"}>household</option>
            <option value={"grocery"}>grocery</option>
            <option value={"travel"}>travel</option>

        </select>
        <button className='flex-2 p-1 bg-green-300 rounded-md h-12' onClick={add}>Add</button>
        </div>

    </div>
  )
}

export default Add