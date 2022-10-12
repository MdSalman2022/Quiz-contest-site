import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionCard = ({ question, arrIndex }) => {

    const { options, id, correctAnswer } = question;
    console.log(correctAnswer)




    // const handleShow = (id) => {
    //     console.log(id);
    // }
    const handleShow = () => toast.success('Correct Answer is: ' + correctAnswer, {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    const result = (option) => {

        if (option === correctAnswer) {

            toast.success('Correct!', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
        else {
            toast.error('Wrong!', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    }

    return (
        <div className="card w-80 lg:w-full container mx-auto m-5 bg-neutral text-neutral-content">
            <div className="card-body text-left">
                <div className='flex align-center justify-between'>
                    <h2 className="card-title">Quiz-{arrIndex + 1}: {question.question}</h2>
                    <button onClick={handleShow}><FontAwesomeIcon className='px-2' icon={faEye} /></button>
                </div>
                <div className="form-control">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {
                            options.map(option =>
                                <label className="label cursor-pointer justify-start gap-5">
                                    <input onClick={() => result(option)} type="radio" name="radio-6" className="radio radio-primary checked:bg-info" />
                                    <span className="label-text text-white ">{option}</span>
                                </label>

                            )
                        }
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;