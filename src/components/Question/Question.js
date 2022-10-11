import React, { useState } from 'react';
import Op1 from '../options/Op1';
import "./Question.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons"


const Question = ({ question, setMark, mark, setwmark, wmark }) => {
    // console.log(question)
    const { correctAnswer, options, id } = question
    // console.log(id)

    const [selected, setSelected] = useState();
    const [cA, setcA] = useState("")


    let message;

    if (selected) {
        if (selected === correctAnswer) {
            message = <h4 className='text-center text-success mt-5'>Your answer is correct</h4>

        }
        else if (selected !== correctAnswer) {
            message = <h4 className='text-center text-danger mt-3'>Wrong!! Correct answer is: {correctAnswer}</h4>
        }
        else {
            message = ""
        }
    }
    else {
        message = ""
    }



    const handleChange = event => {
        // console.log(event.target.value);
        setSelected(event.target.value);

        if (event.target.value === correctAnswer) {
            mark = mark + 1;
            setMark(mark);
        }
        else {

        }

    }

    // console.log(cA)
    const question1 = question.question.slice(+3, -4)
    // console.log(question1)

    return (
        <div className='quiz-card'>
            <div className='d-flex w-100 justify-content-between'>
                <h3 className='text-center title'>Question: {question1}</h3>
                <a onClick={() => setcA(correctAnswer)} className='p-2 text-white'><FontAwesomeIcon icon={faEye} /></a>
            </div>
            <div className='options mx-auto'>
                {
                    options.map(option => <Op1
                        key={option}
                        id={id}
                        option={option}
                        handleChange={handleChange}
                    ></Op1>)
                }

            </div>
            {message}

            <h4 className={`text-center ${cA ? "" : "d-none"}`}>Correct answer is: {correctAnswer}</h4>

        </div>
    );
};

export default Question;