import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
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
function AllSkillsSM() {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
            {skills.map((item, index) => {
                return (
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className="flex flex-col items-center" key={index}>
                        <item.icon className="text-7xl text-orange" />
                        <p className="text-center mt-4 text-white">{item.skill}</p>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default AllSkillsSM