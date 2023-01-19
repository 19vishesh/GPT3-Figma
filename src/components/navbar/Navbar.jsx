import React from 'react'
import { RiMenu3Line, RiClosedLin } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

// we are using BEM convention for naming classes, (Block Element Modifier)

function Navbar() {
    return (
        <div className='gpt__navbar'>
            <div className='gpt__navbar-links'>
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Navbar