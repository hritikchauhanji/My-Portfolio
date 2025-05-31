import React from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


function SingleProject({ name, align, image, link }) {
    return (
        <motion.div
            variants={fadeIn("top", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} justify-end sm:felx-col`}>
            <div>
                <h2 className='md:text-3xl sm:tex-2xl text-orange'>{name}</h2>
                <a href={link} target='_blank' className={`text-lg flex items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align === 'left' ? 'md:justify-self-end' : 'md:justify-self-start'}`}>View <BsFillArrowUpRightCircleFill /></a>
            </div>
            <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white'>
                <div className='w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:scale-110 tranform transition-all duration-500 md:block sm:hidden'></div>
                <img src={image} alt="website image" className='w-full h-full' />
            </div>
        </motion.div>
    )
}

export default SingleProject