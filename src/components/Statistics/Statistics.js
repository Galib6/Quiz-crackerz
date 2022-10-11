import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    console.log(data.data)

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className='my-5'>Barchart using Rechart</h1>
            <div >
                <BarChart width={350} height={300} data={data.data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="total" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;