import React from 'react';


const Itemdetails = (props) => {
  return (<div>
    <ul><li>
      <h1>{props.item.name}</h1>
      <img src={props.item.imageUrl} style={{ width: "30%", height: "200%" }} />
      <li> <label><h1>Price:</h1></label>
        <h2>{props.item.price}</h2>
        <label><h1>Ingredients:</h1></label>
        <h2>{props.item.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient} </li>
        ))}</h2></li>
    </li></ul>
  </div>)

}
export default Itemdetails;
