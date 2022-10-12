import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const totalQues = useLoaderData();
    const { data } = totalQues;

    return (
        <div className='flex align-center justify-center w-66 h-full'>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <BarChart width={400} height={400} data={data}>
                <Bar dataKey="total" fill="#2D213B" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip></Tooltip>
            </BarChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Statistics;