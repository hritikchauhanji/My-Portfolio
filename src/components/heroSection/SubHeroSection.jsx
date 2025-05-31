import React from 'react'

function SubHeroSection() {
    return (
        <div className='w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4 bg-brown'>
            <p>Fast Learner</p>
            <p className='md:block sm:hidden'>Team Work</p>
            <p className='md:block sm:hidden'>Problem Solver</p>
        </div>
    )
}

export default SubHeroSection