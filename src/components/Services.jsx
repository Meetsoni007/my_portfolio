import { motion } from 'framer-motion'
import React from 'react'
import { AiFillIeCircle } from "react-icons/ai"
import { FaReact } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";


function Services() {

    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1
        },
        one: {
            x: "-100%",
            opacity: 0,
        },
        twoAndThree: {
            y: "-100%",
            opacity: 0,
        },

        four: {
            x: "100%",
            opacity: 0,
        },
    }

    return (
        <div id='services'>
            <h2>Services</h2>
            <section>
                <motion.div className='service-box-1 motion-div' whileInView={animations.whileInView} initial={animations.one}>
                    <h3>2+</h3>
                    <p>Years Experiance</p>
                </motion.div>
                <motion.div className='service-box-2 motion-div' whileInView={animations.whileInView} initial={animations.twoAndThree}>
                    <AiFillIeCircle />
                    <span>Web Development</span>
                </motion.div>
                <motion.div className='service-box-3 motion-div' whileInView={animations.whileInView} initial={animations.twoAndThree} transition={{ delay: 0.2, }}>
                    <FaReact />
                    <span>React Website</span>
                </motion.div>
                <motion.div className='service-box-4 motion-div' whileInView={animations.whileInView} initial={animations.four}>
                    <SiAffinitydesigner />
                    <span>UI / UX Design Website</span>
                </motion.div>
            </section>
        </div>
    )
}

export default Services
