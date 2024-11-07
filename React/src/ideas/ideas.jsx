import React from 'react';
import './ideas.css';

export function Ideas() {
  return (
    <main>

        <div className="container-fluid text-center">
            <p id="ideaDesc">
                Give yourself 5 minutes and answer as many questions as you'd like! 
                Once you're done, look over your answers to see if anything sticks.
                It could be your next life-changer! Give it a try!
            </p>

            <div className="ideaQuestion" ondrop="drop(event)" ondragover="allowDrop(event)"> 
                <div ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">
                    <p>What do I most enjoy doing?</p> 
                    <input type="text" placeholder="type here..." />
                </div>
            </div>
            <br />
            <div className="ideaQuestion" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">
                    <p>What is something I struggle with?</p>
                    <input type="text" placeholder="type here..." />
                </div>
            </div>
            <br />
            <div className="ideaQuestion" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">
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
                <button id="stopTime" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">I'm Done</button>
            </div>
        </div>

        <aside className="container-fluid text-center">
            <div id="timer">5:00</div> 
            <div className="droptarget" id="carrygoal" ondrop="drop(event)" ondragover="allowDrop(event)">Use Me</div> 
            <br />
            <div className="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)">Idea Safehaven</div> 
            <br />
            <div className="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)">Idea Safehaven</div>

            <div className="modal" tabindex="-1" role="dialog"> 
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body"> 
                            <p>Great Job on your Brainstorming session! If there is an idea you love, 
                                drag it to the box below and we'll set it into a goal!
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </main>
  );
}