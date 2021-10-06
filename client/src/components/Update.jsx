import React from "react";

class Update extends React.Component {
  constructor(props) {
    super(props);
  }

  update(id) {
    // handle update in this components
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>Update HealthyFood meals</h1>
          <p>Please fill in this form to sale your Healthy meals .</p>

          <label>
            <b>Healthy meal name:</b>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter meal name "
            onChange={this.handlechange}
          />
          <label>
            <b>Benefits:</b>
          </label>
          <input
            name="benefits"
            type="text"
            placeholder="Enter Benefits"
            onChange={this.handlechange}
          />

          <label>
            <b> Add image</b>
          </label>
          <input
            name="image"
            type="text"
            placeholder=" Add image"
            onChange={this.handlechange}
          />

          <label>
            <b> Price</b>
          </label>

          <input
            name="price"
            type="text"
            placeholder="Price"
            onChange={this.handlechange}
          />
          <button className="registerbtn">update</button>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
export default Update;
