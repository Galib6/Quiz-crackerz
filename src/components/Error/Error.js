import React from 'react';
import Lottie from 'lottie-react'
import err from '../asset/error.json'

const Error = () => {
    return (
        <div>
            <Lottie animationData={err} loop={true} />
        </div>
    );
};

export default Error;