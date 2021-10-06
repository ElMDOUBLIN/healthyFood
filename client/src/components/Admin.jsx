import React from "react";

class Admin extends React.Component {
  constructor(props) {
    super(props);
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
