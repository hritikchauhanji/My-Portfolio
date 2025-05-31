import React from 'react'
import ExperienceInfo from './ExperienceInfo'

function ExperienceTopleft() {
    return (
        <div className='flex flex-col gap-6 w-[300px]'>
            <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2023</p>
            <div className='flex justify-center items-center gap-4'>
                <ExperienceInfo number='2' text='Years' />
                <p className='font-bold text-6xl text-lightBrown'>-</p>
                <ExperienceInfo number='5' text='Websites' />
            </div>
            <p className='text-center text-white'>
                My expertise in full stack development and I love to build robust and scalable web applications.
            </p>
            <ExperienceInfo number='100%' text='Learning' />
        </div>
    )
}

export default ExperienceTopleft