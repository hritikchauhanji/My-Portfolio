import React from 'react'
import AllSkills from './AllSkills'
import SkillsText from './SkillsText'
import AllSkillsSM from './AllSkillsSM'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function SkillsMain() {
    return (
        <div id='skills'>
            <div className='max-w-[1200px] mx-auto px-4 min-h-[600px] relative overflow-hidden'>
                <motion.div
                    variants={fadeIn("down", 0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}>
                    <SkillsText />
                </motion.div>
                <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block'>
                    <AllSkills />
                </div>
                <div className='sm:block lg:hidden'>
                    <AllSkillsSM />
                </div>
            </div>
        </div>
    )
}

export default SkillsMain