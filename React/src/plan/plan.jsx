import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Event, notifier } from '../goals/notifier';
import './plan.css';

export function Plan({ userName, addGoal }) {
    const navigate = useNavigate();
    const [myQuote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

    const [goalName, setGoalName] = useState('');
    const [goalDesc, setGoalDesc] = useState('');
    const [goalDate, setGoalDate] = useState('');
    const [reviewDate, setReviewDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const newGoal = {
          name: goalName,
          description: goalDesc,
          startDate: new Date().toLocaleDateString(), //get today's date
          goalDate: goalDate,
          reviewDate: reviewDate,
          completed: false, // Initially mark the goal as incomplete
        };

        console.log('Goal Data:', {
            userName,        // userName to identify the user (will be used in the URL)
            ...newGoal,      // The rest of the goal data
          });
      
        try {
          // Make API call to save the goal in MongoDB
          const response = await fetch(`/api/goal/${userName}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ goal: newGoal }),
          });
      
          if (response.ok) {
            // Handle successful goal saving (e.g., show a success message)
            alert('Goal saved successfully!');
          } else {
            throw new Error('Failed to save goal');
          }
        } catch (error) {
          console.error('Error saving goal:', error);
          alert('Failed to save goal');
        }
      
        // Clear the form
        setGoalName('');
        setGoalDesc('');
        setGoalDate('');
        setReviewDate('');

        navigate('/goals');
      };
      

  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 21);
    fetch('https://gomezmig03.github.io/MotivationalAPI/en.json')
    .then(response => {
        if (!response.ok) {
          throw new Error('Unable to retrieve data from the server.');
        }
        return response.json();
      })
      .then(data => {
        const phrase = data[randomIndex].phrase;
        const Author = data[randomIndex].author;
        setQuote(phrase);
        setQuoteAuthor(Author);
      })
      .catch();
    }, []);

  return (
    <main className="myBorder">
      <div className="sideOne">
        <section className="one">
          <form className="form-group" onSubmit={handleSubmit}>
            <label htmlFor="goalName">Goal Name:</label><br />
            <input
              className="form-control"
              type="text"
              id="goalName"
              name="goalName"
              placeholder="Type here..."
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
            /><br /><br />
            <label htmlFor="goalDesc">Describe Goal:</label><br />
            <input
              className="form-control"
              type="text"
              id="goalDesc"
              name="goalDesc"
              placeholder="Type here..."
              value={goalDesc}
              onChange={(e) => setGoalDesc(e.target.value)}
            /><br /><br />
            <input className="btn btn-secondary" type="submit" value="Submit" />
            <br /><br />
            </form>
              </section>
      
              <section className="two">
                    <div className="titles">
                        <h4>Let's narrow that down!</h4>
                        <p>Apply the goal in a way that is...</p>
                    </div>

                    <div id="SMART">
                        <div>
                            <h4 className="Smart1">S</h4>
                            <p className="Smart2">pecific</p>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Type here..."
                            />
                            <br />
                        </div>
                        <div>
                            <h4 className="Smart1">M</h4>
                            <p className="Smart2">easurable</p>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Type here..."
                            />
                            <br />
                        </div>
                        <div>
                            <h4 className="Smart1">A</h4>
                            <p className="Smart2">chievable</p>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Type here..."
                            />
                            <br />
                        </div>
                        <div>
                            <h4 className="Smart1">R</h4>
                            <p className="Smart2">elavent</p>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Type here..."
                            />
                            <br />
                        </div>
                        <div>
                            <h4 className="Smart1">T</h4>
                            <p className="Smart2">ime-bound</p>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Type here..."
                            />
                            <br />
                        </div>
                    </div>
                </section>
            </div>

            <section className="three">
                <div>
                    <h2>Long-term</h2>
                    <p>What is the overall outcome you wish to achieve?</p>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Type here..."
                    /><br /><br />
                    <form className="form-group">
                        <label htmlFor="goalDate">When would you like to achieve it?</label><br />
                        <br />
                        <input
                            className="form-control"
                            type="date"
                            id="goalDate"
                            name="goalDate"
                            value={goalDate}
                            onChange={(e) => setGoalDate(e.target.value)}
                        /><br /><br />
                        </form>
                </div>

                <div>
                    <h2>Short-term</h2>
                    <p>What is a step you can take to achieve it?</p>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Type here..."
                    /><br />
                    <p>It is good to check back on goals during the process to know how to best move forward</p>
                    <form className="form-group">
                        <label htmlFor="reviewDate">When would be a good time to review your goal?</label><br />
                        <br />
                        <input
                            className="form-control"
                            type="date"
                            id="reviewDate"
                            name="reviewDate"
                            value={reviewDate}
                            onChange={(e) => setReviewDate(e.target.value)}
                        />
                       </form>
                </div>
                
                <div className='quote-box bg-light text-dark'>
                    <p className='quote'>{myQuote}</p>
                    <p className='author'>{quoteAuthor}</p>
                </div>
            </section>
        </main>
    );
}
