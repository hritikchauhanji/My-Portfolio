import React from 'react'
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import SingleSkill from './SingleSkill';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
    {
        skill: "HTML",
        icon: FaHtml5,
    },
    {
        skill: "CSS",
        icon: FaCss3,
    },
    {
        skill: "Tailwind CSS",
        icon: RiTailwindCssFill,
    },
    {
        skill: "javascript",
        icon: IoLogoJavascript,
    },
    {
        skill: "React",
        icon: FaReact,
    },
    {
        skill: "Java",
        icon: FaJava,
    },
    {
        skill: "Spring Boot",
        icon: BiLogoSpringBoot,
    },
    {
        skill: "MySQL",
        icon: GrMysql,
    }
]

function AllSkills() {
    return (
        <div>
            <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
                {
                    skills.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", `0.${index}`)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0 }}
                            >
                                <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllSkills