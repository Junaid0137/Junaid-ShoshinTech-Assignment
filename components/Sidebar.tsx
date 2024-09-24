'use client';
import DashIcon from '@/assets/DashIcon';
import DeptIcon from '@/assets/DeptIcon'
import EmployeeIcon from '@/assets/EmployeeIcon'
import Logo from '@/assets/Logo'
import RecruitIcon from '@/assets/RecruitIcon';
import ScheduleIcon from '@/assets/ScheduleIcon'
import SettingsIcon from '@/assets/SettingsIcon';
import SupportIcon from '@/assets/SupportIcon';
import React from 'react'

function Sidebar() {
    return (
        <div className='bg-[#FAFAFA] p-5'>
            <div className='hidden md:inline'>
                <div className='px-5'>
                    <Logo />
                </div>
                <div
                    className='space-y-5 items-end text-[#686868] mt-10 mx-4'>
                    <h3 className='text-xs font-thin'>MAIN MENU</h3>
                    <div className='space-y-5 items-center justify-center'>
                        <div className='dash-icon'>
                            <DashIcon />
                            <h3>Dashboard</h3>
                        </div>
                        <div className='dash-icon'>
                            <RecruitIcon />
                            <h3>Recruitment</h3>
                        </div>
                        <div className='dash-icon'>
                            <ScheduleIcon />
                            <h3>Schedule</h3>
                        </div>
                        <div className='dash-icon'>
                            <EmployeeIcon />
                            <h3>Employee</h3>
                        </div>
                        <div className='dash-icon'>
                            <DeptIcon />
                            <h3>Department</h3>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 items-end text-[#686868] mt-10 mx-4'>
                    <h3 className='text-xs font-thin'>OTHERS</h3>
                    <div className='dash-icon'>
                        <SupportIcon />
                        <h3>Support</h3>
                    </div>
                    <div className='dash-icon'>
                        <SettingsIcon />
                        <h3>Settings</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
