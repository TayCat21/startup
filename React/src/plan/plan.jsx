import React from 'react';
import './plan.css';

export function Plan() {
    return (
    <main>
        <container className="sideOne">
            <section className="one">
                <form className="form-group">
                    <label for="goalName">Goal Name:</label><br />
                    <input className="form-control" type="text" id="goalName" name="goalName" placeholder="Type here..." /><br /><br />
                    <label for="goalDesc">Describe Goal:</label><br />
                    <input className="form-control" type="text" id="goalDesc" name="goalDesc" placeholder="Type here..." /><br /><br />
                    <input className="btn btn-secondary" type="submit" value="Save" />
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
                        <input className="form-control" type="text" placeholder="Type here..." />
                        <br />
                    </div>
                    <div>
                        <h4 className="Smart1">M</h4>
                        <p className="Smart2">easurable</p>
                        <input className="form-control" type="text" placeholder="Type here..." />
                        <br />
                    </div>
                    <div>
                        <h4 className="Smart1">A</h4>
                        <p className="Smart2">chievable</p>
                        <input className="form-control" type="text" placeholder="Type here..." />
                        <br />
                    </div>
                    <div>
                        <h4 className="Smart1">R</h4>
                        <p className="Smart2">elavent</p>
                        <input className="form-control" type="text" placeholder="Type here..." />
                        <br />
                    </div>
                    <div>
                        <h4 className="Smart1">T</h4>
                        <p className="Smart2">ime-bound</p>
                        <input className="form-control" type="text" placeholder="Type here..." />
                        <br />
                    </div>
                </div>
            </section>
      </container>

      <section className="three">
            <div>
                <h2>Long-term</h2>
                <p>What is the overall outcome you wish to achieve?</p>
                <input className="form-control" type="text" placeholder="Type here..." /><br /><br />
                <form className="form-group">
                    <label for="goalDate">When would you like to achieve it?</label><br /> 
                    <input className="form-control" type="date" id="goalDate" name="goalDate" /><br /><br />
                    <input className="form-control" type="submit" value="Save" />
                </form>
            </div>

            <div>
                <h2>Short-term</h2>
                <p>What is a step you can take to achieve it?</p>
                <input className="form-control" type="text" placeholder="Type here..." /><br />

                <p>It is good to check back on goals during the process to know how to best move forward</p>
                <form className="form-group">
                    <label for="reviewDate">When would be a good time to review your goal?</label><br />
                    <input className="form-control" type="date" id="reviewDate" name="reviewDate" /><br /><br /> 
                    <input className="form-control" type="submit" value="Save" />
                </form>
            </div>
        </section>
    </main>
  );
}