import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti-boom';
import { Event, notifier } from './../goals/notifier';
import './modal.css';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    const toggleModal = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        if (isOpen) {
            setShowConfetti(true);

                const timer = setTimeout(() => {
                setIsFadingOut(true); 
                const fadeOutTimer = setTimeout(() => {
                    setShowConfetti(false); 
                    setIsFadingOut(false); 
                }, 1000); 
                
                return () => clearTimeout(fadeOutTimer);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div>
            <button onClick={toggleModal}>I'm Done!</button>

            {showConfetti && (
                <Confetti 
                    className={isFadingOut ? 'confetti-fade-out' : ''} 
                />
            )}

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal" style={{ display: 'block' }}>
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
