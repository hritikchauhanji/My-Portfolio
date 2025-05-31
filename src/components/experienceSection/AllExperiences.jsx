import React from 'react'
import SingleExperience from './SingleExperience';
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from '../../framerMotion/variants';


const experiences = [
    {
        title: "Java & DSA",
        date: "2023 - 2024",
        responsibilities: [
            "Studied core Java concepts such as object-oriented programming, exception handling, and the collections framework.",
            "Practiced Data Structures and Algorithms (DSA) through course materials and hands-on coding exercises.",
            "Built problem-solving skills by implementing sorting, searching, and recursion-based algorithms.",
            "Focused on improving logic building and code efficiency through regular practice and project-based learning."
        ]


    },
    {
        title: "Backend Developer",
        date: "2024 - 2025",
        responsibilities: [
            "Learned backend development using Java and Spring Boot, including REST API creation and server-side logic.",
            "Explored concepts like dependency injection, Spring Data JPA, and Spring Security.",
            "Integrated relational databases like MySQL with backend services using JPA and Hibernate.",
            "Practiced building scalable, secure backend applications following best practices."
        ]

    },
    {
        title: "Frontend Developer",
        date: "2025 - Present",
        responsibilities: [
            "Learned modern frontend development using HTML, CSS, and utility-first styling with Tailwind CSS.",
            "Built dynamic interfaces using JavaScript and component-based architecture with React.",
            "Gained experience using Vite for faster development and optimized builds.",
            "Worked on responsive UI design and improved user experiences across devices and browsers."
        ]

    },
];

function AllExperiences() {
    return (
        <div className="flex md:flex-row sm:flex-col items-center justify-between">
            {experiences.map((experience, index) => {
                return (
                    <>
                        <SingleExperience key={index} experience={experience} />
                        {index < 2 ? (
                            <motion.div
                                variants={fadeIn("right", 0)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.7 }}
                            >
                                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
                            </motion.div>
                        ) : (
                            ""
                        )}
                    </>
                );
            })}
        </div>
    )
}

export default AllExperiences