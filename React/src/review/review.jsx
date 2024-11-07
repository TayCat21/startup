import React from 'react';
import './review.css';

export function Review() {
  return (
    <main>
        <h1><span className="goalName">Goal 1</span></h1> 

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

            <input className="return btn btn-primary" type="submit" value="Save" /> 
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