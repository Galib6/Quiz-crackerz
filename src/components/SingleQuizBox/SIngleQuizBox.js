import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Singlequizbox.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const SIngleQuizBox = ({ QuizBox }) => {
    // console.log(QuizBox)
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/topics/${QuizBox.id}`)
    }
    return (
        <Col className='mt-5'>
            <Card className='card1'>
                <Card.Img variant="top" src={QuizBox.logo} className="cardimg" />
                <Card.Body>
                    <Card.Title><h5 className="card-title">{QuizBox.name}</h5></Card.Title>
                    <Card.Text>
                        <button onClick={handleNavigate} className='start-practise-button'>Start Practice</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SIngleQuizBox;



// <button onClick={handleNavigate} className='start-practise-button'>Start Practice</button>
// <h5 className="card-title">{QuizBox.name}</h5>