import React from "react";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      benefits: "",
      image: "",
      Price: "",
    };
    this.update = this.update.bind(this);
  }

  handlechange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  update(id) {
    axios.put(`/api/admin/${id}`, this.state).then((data) => {
      console.log(data.data);
    });
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
          <button className="registerbtn" onClick={this.update}>
            update
          </button>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
export default Update;
