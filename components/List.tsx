'use client'
import React from 'react'

const ExpenseList = ({ list }: any) => {
    // console.log(list)
    return (
        <div className='flex justify-evenly mb-2'>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 w-[80vw] ">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-lg font-medium text-gray-500 uppercase">Item</th>
                                        <th scope="col" className="px-6 py-3 text-start text-lg font-medium text-gray-500 uppercase">Amount</th>
                                        <th scope="col" className="px-6 py-3 text-start text-lg font-medium text-gray-500 uppercase">Category</th>
                                        <th scope="col" className="px-6 py-3 text-end text-lg font-medium text-gray-500 uppercase">Created at</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list && list.map((item: any) => {
                                        return (
                                            <tr key={item.id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-800">{item?.item}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-800">₹ {item?.amount}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-800">{item?.category?.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">{item?.created_at.slice(0, 10)}  </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ExpenseList