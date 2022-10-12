import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = (props) => {

    const { name, id, logo, total } = props.quiz;

    return (
        <div className="card card-compact w-80 lg:w-96 bg-neutral shadow-xl m-auto">
            <figure className='p-5 shadow-xl'><img src={logo} alt="Shoes" /></figure>
            <div className="card-body bg-base-100">
                <h2 className="card-title">{name}</h2>
                <p>Number of questions: {total}</p>
                <div className="card-actions justify-end">
                    <Link to={`/quiz/${id}`} >
                        <button className="btn btn-neutral text-white">Attempt Quiz <FontAwesomeIcon className='px-2' icon={faArrowRight} /></button>
                    </Link>

                </div>
            </div >
        </div >
    );
};

export default TopicCard;