import React from 'react'
import { AiOutlineArrowUp, AiFillInstagram, AiFillGithub } from "react-icons/ai"


function Footer() {
    return (
        <footer>
            <div className='footer-info'>
                <a href="https://github.com/meetsoni007" target='blank'> <img src="https://avatars.githubusercontent.com/u/71756530?v=4" alt="Founder" /></a>

                <h2>Meet Soni</h2>
                <p>Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful 💖.</p>
            </div>
            <aside className='footer-aside-bar'>
                <h2>Social Media</h2>
                <article className='footer-article'>
                    <a href="https://www.instagram.com/meet_sony_01/" target='blank'>
                        <AiFillInstagram />
                    </a>
                    <a href="https://github.com/meetsoni007" target='blank'>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a className='up-arrow' href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    )
}

export default Footer
