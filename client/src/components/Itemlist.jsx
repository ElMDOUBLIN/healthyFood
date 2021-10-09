import React from "react";
// this list item
const Itemlist = (props) => (
  <div>
    <ul className="item-list">
      {props.items.map((item, index) => {
        if(item.name.includes(props.word)){
          return(<div key={index}>
        <li  className="item-list-item">
          <h1>{item.name}</h1>
          <img src={item.imageUrl} style={{ width: "90%", height: "50%" }} />
          <p>{item.benefits}</p>
          <p className="price">{item.price}</p>
          <p>
            <button className="btn">details</button>
            <br></br>
            <br></br>
            <button className="btn">add to cart</button>
          </p>
        </li>
        </div>)
         } })}
    </ul>
  </div>
);

export default Itemlist;
