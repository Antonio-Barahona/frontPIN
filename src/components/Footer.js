import React from 'react'
import './Footer.css'
import logfoter from '../assets/images/footer-logo.svg'

const Footer = () => {
    return (
        <div>

        <footer className="foter">
            <p className="fot">2020 © All rights reserved.</p>
            <img src={ logfoter } className="logfoter" />
       </footer>
            
        </div>
    )
}

export default Footer
