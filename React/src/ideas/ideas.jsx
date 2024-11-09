import React, {useState} from 'react';
import './ideas.css';
import Timer from './timer';
import Modal from './popup';

export function Ideas() {
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
                    <p>What do I most enjoy doing?</p> 
                    <input type="text" placeholder="type here..." />
                </div>
            </div>
            <br />
            <div className="ideaQuestion">
                <div>
                    <p>What is something I struggle with?</p>
                    <input type="text" placeholder="type here..." />
                </div>
            </div>
            <br />
            <div className="ideaQuestion">
                <div>
                    <p>What is a talent I have always wanted to try?</p>
                    <input type="text" placeholder="type here..." />
                </div>
            </div>    
            <br />

            <div>
                <button id="genQues" className="btn btn-primary">More Questions</button> 
            </div>
            <br />
            <div>
                <Modal />
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