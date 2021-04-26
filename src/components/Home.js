import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
// import React, { Component } from 'react';
import image1 from '../assets/images/slider-1@2x.png';
import image2 from '../assets/images/tren.jpg';
import image3 from '../assets/images/lagoazul.jpg';
import logo from '../assets/images/top-logo.png'

const Home = () => {
    return (
        <header className='box'>
                <nav className='navbar'>
                     <img className='logo' src={ logo } alt='none' />
                     <ul className='items'>
                         <li className='lista'><a href='#home' className="texto">Home</a></li>
                         <li className='lista'><a href='#About' className="texto">About</a></li>
                         <li className='lista'><a href='#Products' className="texto">Products</a></li>
                         <li className='lista'><a href='#Services' className="texto">Services</a></li>
                         <li className='lista'><a href='#Contact' className="texto">Contact</a></li>
                     </ul>
                </nav>

            <section id="inicio" className='box__home'>
                <div className="margen">
                    <h2 className='ha1'>Sed ut perspiciati <br></br> unde omnis iste natus </h2> 
                    <p className="ha3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                    <button className="btnread">Read More</button>
                </div>

            </section>
                <Carousel fade className='my-carrusel'>
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                   
                </Carousel.Item>
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                    />

                </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>  



        </header>

    )
}

export default Home
