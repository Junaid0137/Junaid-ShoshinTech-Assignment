'use client';
import Graph1 from '@/assets/Graph1'
import Graph2 from '@/assets/Graph2'
import React from 'react'
import Announcements from './Announcements'
import { Button } from './ui/button';
import { motion } from "framer-motion"
function Dashboard() {
    return (
        <div className='min-h-screen mx-auto'>
            <motion.h1
                initial={{
                    x: -500,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.15
                }}
                className='text-black text-2xl font-bold my-5'>Dashboard</motion.h1>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='md:min-w-[650px]'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1.5
                        }}
                        className='flex-row gap-4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='bg-[#ffefe7] space-y-3 p-3 rounded-xl text-black hover:shadow-inner'>
                            <h2 className='text-xl font-semibold'>Available Position</h2>
                            <h1 className='font-bold text-3xl'>24</h1>
                            <h3 className='text-[#FF5151]'>4 Urgently needed</h3>
                        </div>
                        <div className='bg-[#e8f0fb] space-y-3 p-3 rounded-xl text-black hover:shadow-inner'>
                            <h2 className='text-xl font-semibold'>Job Open</h2>
                            <h1 className='font-bold text-3xl'>10</h1>
                            <h3 className='text-[#3786F1]'>4 Active hiring</h3>
                        </div>
                        <div className='bg-[#fdebf9] space-y-3 p-3 rounded-xl text-black hover:shadow-inner'>
                            <h2 className='text-xl font-semibold'>New Employees</h2>
                            <h1 className='font-bold text-3xl'>24</h1>
                            <h3 className='text-[#EE61CF]'>4 Department</h3>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.5
                        }}
                        className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>
                        <div className='border border-black flex rounded-xl p-4'>
                            <div className='p-2 space-y-4'>
                                <h2 className='text-xl' >Total Employees</h2>
                                <h1 className='text-4xl font-bold'>216</h1>
                                <div className='text-xs text-[#686868]'>
                                    <h3>120 Men</h3>
                                    <h3>96 Women</h3>
                                </div>
                            </div>
                            <div className='p-1'>
                                <Graph1 />
                            </div>
                        </div>
                        <div className='border border-black flex rounded-xl p-4'>
                            <div className='p-2 space-y-4'>
                                <h2 className='text-xl'>Talent Request</h2>
                                <h1 className='text-4xl font-bold'>16</h1>
                                <div className='text-xs text-[#686868]'>
                                    <h3>120 Men</h3>
                                    <h3>96 Women</h3>
                                </div>
                            </div>
                            <div className='p-2'>
                                <Graph2 />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1.5
                        }}
                        className='border border-black rounded-xl mt-5 p-5'>
                        <Announcements name={'Announcement'} dataType={'announcement'} />
                        <div className='flex justify-center border-t border-black pt-2 -mb-2'>
                            <h1 className='text-center text-[#FF5151] font-semibold'>See All Announcements</h1>
                        </div>
                    </motion.div>
                </div>
                <div className=''>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1.5
                        }}
                        className='bg-[#161E54] rounded-xl p-5 space-y-5'>
                        <div className='flex flex-row rounded-xl'>
                            <h1 className='text-white text-xl font-bold'>Recently Activity</h1>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-xs text-[#a0a3b4]'>10.40 AM, Fri 10 Sept 2021</h3>
                            <h1 className='text-white text-xl font-bold'>You Posted a New Job</h1>
                            <p className='text-[#d0d1d9]'>Kindly check the requirements and terms of work and make sure everything is right.</p>
                        </div>
                        <div className='flex text-white justify-between md:items-center flex-col space-y-5 md:flex-row md:space-y-0'>
                            <h1>Today you makes 12 Activity</h1>
                            <Button className='bg-[#FF5151] xs:w-1/2'>See All Activity</Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1.5
                        }}
                        className='border border-black rounded-xl mt-5 p-5 mb-10 md:mb-0'>
                        <Announcements name='Upcoming Schedule' dataType='upcoming' />
                        <div className='flex justify-center border-t border-black pt-2 -mb-2 w-full'>
                            <h1 className='text-center text-[#FF5151] font-semibold'>Creat a New Schedule</h1>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
