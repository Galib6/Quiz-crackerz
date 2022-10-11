import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SIngleQuizBox from '../SingleQuizBox/SIngleQuizBox';
import "./QuizBox.css"
import Row from 'react-bootstrap/Row';
import Lottie from 'lottie-react'
import quiz from '../asset/91736-exams (1).json'

const QuizBox = () => {
    const QuizBoxes = useLoaderData()
    // console.log(QuizBoxes)

    return (
        <div className='container'>
            <div className='d-flex justify-content-around align-items-center'>
                <div>
                    <p className='text-center purple'>Hello Deveoper's</p>
                    <h1 className='text-center'>A platfrom for Practicing</h1>
                    <h1 className='text-center'>The Basic of <span className="purple">Developer</span></h1>
                    <p className='text-center' >Its is a platform where developers can take quiizes.</p>
                    <p className='text-center'>It will asses their knoledge and build their skill in web developement</p>
                    <br />
                    <a href="#card" className=' button1' >Get Started</a>


                </div>
                <div>
                    <Lottie animationData={quiz} loop={true} />
                </div>
            </div>
            <div id="card">
                <Row xs={1} md={4} className="g-4 mb-5">
                    {
                        QuizBoxes.data.map(QuizBox =>
                            <SIngleQuizBox
                                key={QuizBox.id}
                                QuizBox={QuizBox}
                            ></SIngleQuizBox>
                        )
                    }
                </Row>
            </div>
        </div >
    );
};

export default QuizBox;