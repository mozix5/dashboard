import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const Card = () => {
  return (
    <div className=' bg-white rounded-2xl flex-1 py-6 px-8'>

        <div className='flex flex-col'> 
            <div className='flex justify-between content-center'>
                <span className=' font-bold text-lg'>Today's Schedule</span>
                <div className='flex items-center'>
                    
                <span className='text-[#858585] text-xs'>See All</span>
                <AiOutlineRight className=" text-xs mx-1 text-[#858585] "/>
                </div>
            </div>
            <div className=' border-l-4 border-[#6972C3] flex flex-col my-4 px-3 py-1'>
                <span className='text-[#666666] font-bold text-sm'>Meetings with suppliers from Kuta Bali</span>
                <span className='text-[#999999] text-xs my-1'>14:00-15:00</span>
                <span className='text-[#999999] text-xs'>at Sunset Road, Kuta, Bali</span>
            </div>
            <div className='flex flex-col border-l-4 border-[#9BDD7C] px-3 py-1'>
                <span className='text-sm font-bold text-[#666666]'>Check operation at Giga Factory 1</span>
                <span className='text-[#999999] text-xs my-1'>18:00-20:00</span>
                <span className='text-[#999999] text-xs'>at Central Jakarta</span>
            </div>
        </div>
    </div>
  )
}

export default Card