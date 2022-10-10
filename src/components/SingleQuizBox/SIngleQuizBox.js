import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Singlequizbox.css"

const SIngleQuizBox = ({ QuizBox }) => {
    // console.log(QuizBox)
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/topics/${QuizBox.id}`)
    }
    return (
        <div className='cardSize mx-auto'>
            <div className="container card mb-3 mt-5 ">
                <div className="row no-gutters">
                    <div className="col-md-4 cardimg">
                        <img src={QuizBox.logo} className="card-img img-fluid" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{QuizBox.name}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p>Total Question: {QuizBox.total}</p>
                            <button onClick={handleNavigate} className='start-practise-button'>Start Practice</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIngleQuizBox;