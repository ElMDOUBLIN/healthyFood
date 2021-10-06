import React from "react";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="container">
            <h1>Add HealthyFood meals</h1>
            <p>Please fill in this form to sale your Healthy meals .</p>

            <label>
              <b>Healthy meal name:</b>
            </label>
            <input type="text" placeholder="Enter meal name " />
            <label>
              <b>Benefits:</b>
            </label>
            <input type="text" placeholder="Enter Benefits" />

            <label>
              <b> Add image</b>
            </label>
            <input type="text" placeholder=" Add image" />

            <label>
              <b> Price</b>
            </label>

            <input type="text" placeholder="Price" />
            <button className="registerbtn">validate</button>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin;
