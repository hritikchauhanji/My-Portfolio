import AboutMeImage from "./AboutMeImage"
import AboutMeText from "./AboutMeText"
import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

function AboutMeMain() {
    return (
        <div id="about" className="flex sm:flex-col md:flex-row gap-12 px-4 max-w-[1200px] mt-[100px] mx-auto justify-between items-center">
            <motion.div
                variants={fadeIn('right', 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <AboutMeText />
            </motion.div>
            <motion.div
                variants={fadeIn("left", 0)}
                initial='hidden'
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <AboutMeImage />
            </motion.div>
        </div>
    )
}

export default AboutMeMain