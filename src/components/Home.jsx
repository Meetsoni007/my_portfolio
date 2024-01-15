import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRightCircle, BsChevronDown } from 'react-icons/bs'

function Home() {

    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animateCount = (ref, from, to, duration) => {
        animate(from, to, {
            duration,
            onUpdate: (v) => (ref.current.textContent = v.toFixed(2))
        });
    };

    const animationClientsCount = () => animateCount(clientCount, 0, 3, 2);
    const animationProjectsCount = () => animateCount(projectCount, 0, 4, 3);

    const animation = {
        h1: {
            initial: { y: "-100%", opacity: 0, },
            whileInView: { y: "0", opacity: 1 }
        },
        button: {
            initial: { x: "-100%", opacity: 0, },
            whileInView: { x: "0", opacity: 1 }
        },

    };

    return (
        <div id='home' >

            <section className='left-section'>

                <div className='left-side-content'>
                    <motion.h1 {...animation.h1} >
                        H<span>i</span> there, I'm a <br /> Meet Soni
                        <span className='dot dot-1'> .</span>
                        <span className='dot dot-2'>.</span>
                        <span className='dot dot-3'>.</span>
                    </motion.h1>

                    <Typewriter options={{
                        strings: ["Front-end Developer...", "Logic builder...", "UI/UX Designer..."],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara"
                    }} />
                    <p className='quote'>Actions speak louder than promises. Your work shows dedication and commitment, proving your capabilities. Let your actions speak for you, as promises may not last, but genuine effort leaves a lasting impact.</p>
                    <div className='info'>
                        <a href="mailto:meetsoni0148@gmail.com">Hire Me</a>
                        <a href="#work">Projects  < BsArrowUpRightCircle /> </a>
                    </div>


                    <aside>

                        <article>
                            <p className='para'>+ <motion.span
                                whileInView={() => animationProjectsCount()}
                                ref={projectCount}>{ }</motion.span></p>
                            <span className='para-span'>Projects Done</span>
                        </article>

                        <article>
                            <p className='para'>+ <motion.span
                                whileInView={() => animationClientsCount()}
                                ref={clientCount}>{ }</motion.span></p>
                            <span className='para-span'>Clients Worlwide</span>
                        </article>

                        <article className='data-special'>
                            <p className='para'>Contact</p>
                            <span className='para-span'>meetsoni0148@gmail.com</span>
                        </article>

                    </aside>

                </div>
            </section >

            <section className='right-section'>
                <img src="https://static.vecteezy.com/system/resources/previews/011/153/368/original/3d-website-developer-working-on-laptop-illustration-png.png" alt="" />
            </section>
            <div className='chevronDown'>
                <BsChevronDown />
            </div>
        </div >
    )
}

export default Home
