import React, { useState, useEffect } from 'react';
import './modal.css';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        console.log("Modal isOpen state:", isOpen);
    }, [isOpen]);

    return (
        <div>
            <button onClick={toggleModal}>I'm Done!</button>

            {isOpen && (
                <div className="modal-overlay">
                    <div
                        className="modal"
                        style={{ display: 'block' }} // Force display to block
                    >
                        <button id="popButton" onClick={toggleModal}>Close</button>
                        <h2>Great Job!</h2>
                        <p>Congratulations! You just finished a Brainstorming session!</p> 
                        <p>Now that we are done,</p>
                        <p id="txtGoal">Let's make a new Goal!</p>
                        <button id='toButton1'><a href="/plan">Let's do it!</a></button>
                        <button id='toButton2'><a href="/goals">Return to MyGoals</a></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
