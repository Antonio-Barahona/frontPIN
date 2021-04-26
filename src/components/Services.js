import React from 'react'
import './Services.css';
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap'
import './Services.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Services = () => {
    return (
        <section id='services' className='background4'>
            <div className='seccion4-1'>

            <Accordion defaultActiveKey="0" className='accordion__position'>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Sed ut perspiciatis
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Ut enim ad minima veniam
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima fuga molestiae. Sint delectus sed eum impedit! Neque, voluptate nobis! Molestias ipsum accusamus, maiores eligendi placeat delectus dignissimos quisquam consequuntur ratione sequi ipsa mollitia voluptatibus ab totam quo quidem similique numquam? Amet minima quasi eligendi exercitationem repudiandae corporis autem tenetur!</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Sit amet, consectetur, adipisci
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ratione, blanditiis ipsa praesentium veniam assumenda possimus reiciendis. Rerum praesentium deleniti molestiae aspernatur quae? Facere dignissimos consectetur illo necessitatibus quod rerum!</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>


            </div>
            
        </section>
    )
}

export default Services
