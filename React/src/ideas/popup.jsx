import React, { useState } from 'react';
import './modal.css';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <button onClick={toggleModal}>Open Modal</button>
  
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal">
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