"use client"
import React from 'react'
import SignInBUtton from './SignInBUtton'
import { useUserDetail } from '@/app/provider'
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    const { userDetail, setUserDetail } = useUserDetail();
    return (
        <div className='flex justify-between items-center
        p-4 shadow-sm px-10'>
            <h2>Email Template Builder</h2>
            <div >
                {userDetail?.email ?
                    <div className='flex gap-3 items-center'>
                        <Link href={'/dashboard'}>
                            <Button>Dashboard</Button>
                        </Link>
                        <Image src={userDetail.picture} alt='user' width={35} height={35}
                            className='rounded-full' />
                    </div> : <SignInBUtton />
                }

            </div>
        </div>

    )
}

export default Header
