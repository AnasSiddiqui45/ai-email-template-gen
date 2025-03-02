import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import SignInBUtton from './SignInBUtton'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 xl:px-56 
    flex flex-col items-center mt-24'>
      <h2 className='font-extrabold text-5xl text-center'>AI-Powered 
        <span className='text-primary p-4'>Email Templates</span></h2>
        <p className='text-center mt-4 '>Longing to impress clients with Ai-powered emails but don't have enogh time to build them on your own? Use the Ai-powered email templates that already have Ai-generated imagery and copy -- save time on email production with us.</p>
        
        
        <div className='flex gap-5 mt-6'>
            <Button variant='outline'>Try Demo</Button>
            <SignInBUtton/>
        </div>
        <Image src={'/landing.png'} alt='landing'
        width={1000} 
        className='mt-12 rounded-xl'
        height={800}
        />
    </div>
  )
}

export default Hero
