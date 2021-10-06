import React from "react";
// this list item
const Itemlist = (props) => (
  <div>
    <ul className="item-list">
      {props.items.map((item, index) => (
        <li key={index} className="item-list-item">
          <h1>{item.name}</h1>
          <img src={item.imageUrl} style={{ width: "50%", height: "50%" }} />
          <p>{item.benefits}</p>
          <p className="price">{item.price}</p>
          <p>
            <button>update</button>
            <button>delete</button>
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default Itemlist;
