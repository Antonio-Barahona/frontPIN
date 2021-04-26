import React from 'react'
import './Contact.css'


const Contact = () => {
    return (
        
        <section id="contacto" className="lineargradient">
            
            <div className='contenedor5'>
                <form>
                    <div className='cabecera5'>
                        <h2 className='ha5'>Get in touch<br></br><span>We are hiring!</span></h2>  
                    </div>

                    <div className='bloque5'>
                        
                        <div className="">
                                <div>
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control"  id="name" />

                                </div>
                                
                                
                                <div className="">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control"  id="mail" />
                                </div>
                                
                                <div className="">
                                    <label for="phone">Phone</label>
                                    <input type="tel" className="form-control"  id="tel" />
                                </div>
                                
                                <div className="">
                                    <label for="message">Message</label>
                                    <textarea type="tel" className="form-control"  id="message"></textarea>
                                </div>
                        
                            <button type='submit' className="btnread">Send</button>
                        </div>
                    </div>           
                </form>
                
            </div>

        </section>


    )
}

export default Contact
