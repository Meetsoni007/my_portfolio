import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import P_logo from '../assets/Portfolio_logo.png'

function Header({ menuOpen, setMenuOpen }) {
    return (
        <div id='nav'>
            <nav>
                <NavContent setMenuOpen={setMenuOpen} />
            </nav>
            <button onClick={() => setMenuOpen(!menuOpen)} className='three-line-manu'>
                <AiOutlineMenu />
            </button>
        </div>

    )
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`nav-phone ${menuOpen ? "nav-phone-click" : ""}`}>
            <NavContent setMenuOpen={setMenuOpen} />
        </div>
    )
}

function NavContent({ setMenuOpen }) {
    return (
        <>
            <div className="image">
                <img className='portfolio_name' src={P_logo} alt="" height={"140px"} width={"190px"} />
            </div>
            <div className='nav-list'>
                <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
                <a onClick={() => setMenuOpen(false)} href="#work">Work</a>
                <a onClick={() => setMenuOpen(false)} href="#timeline">Experiance</a>
                <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
                <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
            </div>
            <a href="mailto:meetsoni0148@gmail.com">
                <button className='mail-btn'>Email</button>
            </a>

        </>
    )
}

export default Header
