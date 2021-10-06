import React from "react";
import axios from "axios";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      benefits: "",
      image: "",
      Price: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.create = this.create.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:3000/api/admin").then((data) => {
      console.log(data);
    });
  }
  // handle change inputs
  handlechange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }
  create() {
    axios.post("http://localhost:3000/api/admin", this.state).then((data) => {
      console.log(data.data);
    });
  }
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
            <button onClick={this.create} className="registerbtn">
              validate
            </button>
            <br></br>
            <br></br>
          </div>
        </div>
        <div>
          <h1>Liste HealthyFood meals</h1>
        </div>
        <div>
          <ul className="item-list">
            {this.props.items.map((item, index) => (
              <li key={index} className="item-list-item">
                <h1>{item.name}</h1>
                <img
                  src={item.imageUrl}
                  style={{ width: "90%", height: "50%" }}
                />
                <p>{item.benefits}</p>
                <p className="price">{item.price}</p>
                <p>
                  <button className="btn">update</button>
                  <br></br>
                  <br></br>
                  <button className="btn">delete</button>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Admin;