import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SIngleQuizBox from '../SingleQuizBox/SIngleQuizBox';
import "./QuizBox.css"

const QuizBox = () => {
    const QuizBoxes = useLoaderData()
    // console.log(QuizBoxes)

    return (
        <div className='box-container'>
            {
                QuizBoxes.data.map(QuizBox =>
                    <SIngleQuizBox
                        key={QuizBox.id}
                        QuizBox={QuizBox}
                    ></SIngleQuizBox>
                )
            }
        </div >
    );
};

export default QuizBox;