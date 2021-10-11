import React from "react";
// this list item
const Itemlist = (props) => (
  <div>
    <ul className="item-list">
      {props.items.map((item, index) => {
        if (item.name.includes(props.word)) {
          return (
            <div key={index}>
              <li className="item-list-item">
                <h1>{item.name}</h1>
                <img src={item.imageUrl} style={{ width: "90%", height: "50%" }} />
                <h1>{item.price}</h1>


                <p>
                  <button className="btn" onClick={() => { props.changeView("details", item) }}>Details</button>
                  <br></br>
                  <br></br>
                  <button className="btn" onClick={() => { props.changeView("order", item) }}>Order</button>
                </p>
              </li>
            </div>)
        }
      })}
    </ul>
  </div>
);

export default Itemlist;
