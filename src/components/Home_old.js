import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='box'>
            <header>
                 <nav className='navbar'>
                     <img className='logo' src='../assets/images/top-logo.png' alt='none' />
                     <ul className='items'>
                         <li className='lista'><a href='#home' className="texto">Home</a></li>
                         <li className='lista'><a href='#About' className="texto">About</a></li>
                         <li className='lista'><a href='#Products' className="texto">Products</a></li>
                         <li className='lista'><a href='#Services' className="texto">Services</a></li>
                         <li className='lista'><a href='#Contact' className="texto">Contact</a></li>
                     </ul>
                    
                 </nav>    
            </header>

            <section id="inicio">
                <div className="margen">
                    <h2 className="ha1">Sed ut perspiciatis unde omnis iste natus</h2>
                    <p className="ha3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                    <button className="btnread">Read More</button>
                </div>
            </section>
            


        </div>
    )
}

export default Home
