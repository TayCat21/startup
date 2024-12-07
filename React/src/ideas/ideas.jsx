import React, { useState, useEffect } from 'react';
import './ideas.css';
import Timer from './timer';
import Modal from './popup';

export function Ideas({ userName }) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState('');

    // Fetch questions from the .txt file when the component mounts
    useEffect(() => {
        fetch('/ideaQuestions.txt')
            .then((response) => response.text())
            .then((data) => {
                // Split the text file into an array of questions based on line breaks
                const loadedQuestions = data.split('\n').map(question => question.trim()).filter(q => q);
                setQuestions(loadedQuestions);
                // Set the first question as the current question
                setCurrentQuestion(loadedQuestions[0]);
            })
            .catch((error) => console.error("Error loading questions:", error));
    }, []);

    // Function to handle changing to a random question
    const getRandomQuestion = () => {
        if (questions.length > 0) {
            const randomIndex = Math.floor(Math.random() * questions.length);
            setCurrentQuestion(questions[randomIndex]);
        }
    };

    return (
    <main>

        <div className="container-fluid text-center">
            <p id="ideaDesc">
                Give yourself 5 minutes and answer as many questions as you'd like! 
                Once you're done, look over your answers to see if anything sticks.
                It could be your next life-changer! Give it a try!
            </p>

            <div className="ideaQuestion"> 
                <div>
                    <p>{currentQuestion}</p> 
                    <input type="text" placeholder="type here..." />
                </div>
            </div>
            <br />

            <div>
                <button id="genQues" className="btn btn-primary" onClick={getRandomQuestion}>More Questions</button> 
            </div>
            <br />
            <div>
                <Modal userName={userName} />
            </div>
        </div>

        <aside className="container-fluid text-center">
            <div id="timer">
                <Timer />
            </div> 
        </aside>
    </main>
  );
}