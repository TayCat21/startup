import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './review.css';

export function Review({ userName }) {
  const { goalId } = useParams();  // Extract goalId from URL
  const [goal, setGoal] = useState(null);

  // Log goalId and userName to verify they're available
  console.log('Extracted goalId:', goalId);
  console.log('Logged-in userName:', userName);

  // Fetch the goal from your MongoDB or API
  useEffect(() => {
    const fetchGoal = async () => {
      if (!goalId || !userName) {
        console.error('Goal ID and UserName are required');
        console.log('ID:', goalId);
        console.log('UserName:', userName);  
        return;
      }
      
      try {
        const response = await fetch(`/api/goal/${goalId}?userName=${userName}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch goal');
        }
        const goal = await response.json();
        console.log('Fetched goal:', goal);
        
        // Update state with the fetched goal
        setGoal(goal);
      } catch (error) {
        console.error('Error fetching goal:', error);
        throw error; // Throw the error to handle it in your component
      }
    };

    fetchGoal();
  }, [goalId]);

  if (!goal) return <div>Loading...</div>;

  return (
    <main>
        <h1><span className="goalName">{goal.name}</span></h1> 

        <form>
            <label>How did the goal go?</label><br />
            <input type="range" min="0" max="10" /><br />
            <label>why?</label>
            <input type="text" placeholder="type here..." /><br /><br />

            <label>How much did you care about your goal?</label><br />
            <input type="range" min="0" max="10" /><br />
            <label>why?</label>
            <input type="text" placeholder="type here..." /><br /><br />

            <label>Did you have any external support? (ie friends,family)</label><br />
            <label for="radio1">yes</label>
            <input type="radio" id="radio1" name="varRadio" value="radio1" checked />
            <label for="radio2">no</label>
            <input type="radio" id="radio2" name="varRadio" value="radio2" /><br /><br />

            <label>What benefits came from this goal?</label><br />
            <input type="text" placeholder="type here..." /><br /><br />
            <label>What problems came from this goal?</label><br />
            <input type="text" placeholder="type here..." /><br /><br />

            <label>To keep moving forward, how would you change your goal?</label><br />
            <input type="text" placeholder="type here..." /><br /><br />

            <button className="myButton"><a href="/goals">I'm Done</a></button>
        </form>

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
                <span className="popuptext" id="my2ndPopup">
                  <p>Excelent Work! How would you like to move forward?</p>
                  </span>
                <div className="modal-footer">
                  <button><a href="plan.html">Update Goal</a></button> 
                  <button>Remove Goal</button> 
                  <button>Mark as Accomplished</button> 
                </div>
              </div>
            </div>
          </div>
        </div>

    </main>
  );
}