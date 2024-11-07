import React from 'react';
import './goals.css';

export function Goals() {
  return (
    <main>
        <container>

            <div className="dropdown">
                <button onclick="myFunction()" className="dropbtn btn btn-primary">New Goal</button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="goals">myGoals</a>
                    <a className="dropdown-item" href="plan">myGoalsetter</a>
                    <a className="dropdown-item" href="ideas">Brainstrom</a>
                </div>
            </div>

            <div className="active">
                <h2>Active Goals</h2>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="goalDesc">Lorem ipsum...</p> 
                            <p className="goalDate">mm/dd/yyyy</p> 
                            <p className="reviewDate">review set for: mm/dd/yyyy</p>
                            <button><a href="plan">Edit Goal</a></button>
                            <button><a href="review">Review Goal</a></button>
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Goal 2 
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="goalDesc">Lorem ipsum...</p> 
                                <p className="goalDate">mm/dd/yyyy</p> 
                                <p className="reviewDate">review set for: mm/dd/yyyy</p> 
                                <button><a to="plan">Edit Goal</a></button>
                                <button><a to="review">Review Goal</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Goal 3
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="goalDesc">Lorem ipsum...</p> 
                                <p className="goalDate">mm/dd/yyyy</p> 
                                <p className="reviewDate">review set for: mm/dd/yyyy</p> 
                                <button><a href="plan.html">Edit Goal</a></button>
                                <button><a href="review.html">Review Goal</a></button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            
            <div className="past">
                <h2>Past Goals</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Goal a 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="goalDesc">Lorem ipsum...</p> 
                            <p className="goalDate">mm/dd/yyyy</p> 
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Goal b 
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="goalDesc">Lorem ipsum...</p> 
                                <p className="goalDate">mm/dd/yyyy</p> 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Goal c 
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="goalDesc">Lorem ipsum...</p> 
                                <p className="goalDate">mm/dd/yyyy</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </container>

        <aside>
            <div className="container-fluid text-center shoutouts">
                <h1>Achievements Log</h1> 
            </div>
            <div  className="container-fluid text-center" id="notifications">
                <div className="event"><span className="system-event">Sara</span> made a new goal</div>
                <div className="event"><span className="system-event">Josh</span> finished a Brainstorm</div>
                <div className="specialEvent"><span className="system-event">Jordan</span> achieved their goal!</div>
              </div>
        </aside>

    </main>
  );
}