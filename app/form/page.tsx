import React from 'react'

const Page = () => {
  return (
    <div className='flex justify-start items-center flex-col w-full h-screen bg-slate-500'>
        <div className='flex justify-start items-center pl-10 text-2xl font-bold w-full h-14'>
            Portfolio
        </div>
        <div className='flex items-start bg-white flex-grow w-full'>
            <div className='flex flex-col justify-center items-center h-full w-1/3 bg-black'>

            </div>
            <div className='flex flex-col justify-center items-center h-full w-2/3 bg-blue-500'>
            
            </div>
        </div>
    </div>
  )
}

export default Page;