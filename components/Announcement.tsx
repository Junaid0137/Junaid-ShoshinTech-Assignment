import Dot from '@/assets/Dot'
import Pin from '@/assets/Pin'
import React from 'react'

function Announcement({ title, time }: { title: string, time: string }) {
    return (
        <div className='bg-[#fafafa] p-3 rounded-md flex flex-col md:flex-row justify-between md:items-center'>
            <div className='mx-2 space-y-2'>
                <h1 className='font-medium'>{title}</h1>
                <h1 className='hidden md:inline text-xs'>{time}</h1>
            </div>
            <div className='flex flex-row space-x-4 mx-2 md:mx-5 justify-between md:justify-normal mt-2 md:mt-0'>
                <h1 className='md:hidden' >{time}</h1>
                <div className='flex flex-row space-x-4 mx-5'>
                    <Pin />
                    <Dot />
                </div>
            </div>
        </div>
    )
}

export default Announcement
