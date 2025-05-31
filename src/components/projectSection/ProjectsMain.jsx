import React from 'react'
import ProjectsText from './ProjectsText';
import SingleProject from './SingleProject';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const projects = [
    {
        name: "Learning Platform",
        align: "right",
        image: "images/website-img-1.jpg",
        link: "https://learning-platform-latest.onrender.com/",
    },
    {
        name: "Room Based Chat Application",
        align: "left",
        image: "images/website-img-2.webp",
        link: "https://chatappdocker.netlify.app/",
    },
    {
        name: "Campus flow (Student Management System)",
        align: "right",
        image: "images/website-img-3.jpg",
        link: "#",
    },
    {
        name: "enotes",
        align: "left",
        image: "images/website-img-4.jpg",
        link: "#",
    },
    {
        name: "Ecommerce website",
        align: "right",
        image: "images/website-img-4.jpg",
        link: "#",
    },
];

function ProjectsMain() {
    return (
        <div id='projects' className='max-w-[1200px] mx-auto px-4'>
            <motion.div
                variants={fadeIn("top", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <ProjectsText />
            </motion.div>
            <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
                {projects.map((project, index) => {
                    return (
                        <SingleProject
                            key={index}
                            name={project.name}
                            align={project.align}
                            image={project.image}
                            link={project.link}
                        />
                    )

                })}
            </div>
        </div>
    )
}

export default ProjectsMain