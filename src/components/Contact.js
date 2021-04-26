import React from 'react'
import './Contact'


const Contact = () => {
    return (
        
        <section id="contacto" className="lineargradient">
            
        <div className='contenedor5'>
            <form>
                <div className='cabecera5'>
                    <h2 className='ha5'>Get in touch</h2>
                    <h2 className='ha51'>We are hiring!</h2>

                </div>
                <div className='bloque5'>
                    
                <label>
                    Name:
                    <input type="text" name="name" />
                 </label>
                    
                
                 <label>
                    Email:
                    <input type="email" name="email" />
                 </label>
                
                 <label>
                    Phone:
                    <input type="phone" name="phone" />
                 </label>

                 <label>
                    Message:
                    <input type="textarea" name="email" />
                 </label>
                
                <input type="submit" value="Enviar" />
                </div>           
            </form>
            
        </div>

        </section>


    )
}

export default Contact
