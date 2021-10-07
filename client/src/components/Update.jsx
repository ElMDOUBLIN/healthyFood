import React from "react";
import axios from "axios";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.item.name,
      ingredients: this.props.item.ingredients,
      imageUrl: this.props.item.imageUrl,
      price: this.props.item.price,
    };
    this.update = this.update.bind(this);
    this.handlechange = this.handlechange.bind(this);
  }

  update(id) {
    axios.put(`http://localhost:3000/api/admin/:${id}`, this.state).then((data) => {
      console.log(data)
      // this.props.changeView("admin", this.state);
      // this.props.fetch();
    });
  }

  handlechange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
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
            value={this.state.name}
            placeholder="Enter meal name "
            onChange={this.handlechange}
          />
          <label>
            <b>Ingredients:</b>
          </label>
          <input
            name="ingredients"
            type="text"
            placeholder="Enter ingredients"
            value={this.state.ingredients}
            onChange={this.handlechange}
          />

          <label>
            <b> Add image</b>
          </label>
          <input
            name="image"
            type="text"
            placeholder=" Add image"
            value={this.state.imageUrl}
            onChange={this.handlechange}
          />

          <label>
            <b> Price</b>
          </label>

          <input
            name="price"
            type="text"
            placeholder="Price"
            value={this.state.price}
            onChange={this.handlechange}
          />
          <button
            className="registerbtn"
            onClick={() => {
              this.update(this.props.item.id);
            }}
          >
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
