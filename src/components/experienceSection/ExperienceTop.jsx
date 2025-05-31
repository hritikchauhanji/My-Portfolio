import React from 'react'
import ExperienceTopleft from './ExperienceTopleft'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import ExperienceTopRight from './ExperienceTopRight'

function ExperienceTop() {
    return (
        <div className='flex lg:flex-row sm:flex-col items-center justify-center gap-4'>
            <ExperienceTopleft />
            <ExperienceTopMiddle />
            <ExperienceTopRight />
        </div>
    )
}

export default ExperienceTop