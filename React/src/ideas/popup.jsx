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
            <button onClick={toggleModal}>Open Modal</button>

            {isOpen && (
                <div className="modal-overlay">
                    <div
                        className="modal"
                        style={{ display: 'block' }} // Force display to block
                    >
                        <h2>Modal Content</h2>
                        <p>Great Job on your Brainstorming session! If there is an idea you love, 
                            drag it to the box below and we'll set it into a goal!
                        </p>
                        <button onClick={toggleModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
