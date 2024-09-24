'use client';
import React from 'react'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, SearchIcon } from 'lucide-react'
import MobileMenu from './MobileMenu'
import BellIcon from '@/assets/BellIcon';
import MessageIcon from '@/assets/MessageIcon';

function Header() {
    return (
        <div className='flex flex-row justify-between'>
            <div className='md:hidden items-center my-auto space-x-2 flex flex-row text-[#B2B2B2]'>
                <MobileMenu />
                <SearchIcon size={20} />
            </div>
            <div
                className='max-w-2xl hidden md:inline'>
                <Input placeholder='Search' className='w-96 h-10' />
            </div>
            <div className='flex space-x-5 items-center hover:cursor-pointer'>
                <BellIcon />
                <MessageIcon />
                <div className='items-center flex space-x-3 text-black' >
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <h3 className=''>User</h3>
                    <ChevronDown />
                </div>
            </div>
        </div>
    )
}

export default Header
