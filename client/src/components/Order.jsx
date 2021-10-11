import React from 'react'

function Order() {
    return (
        <div>
            <label><p>Name:</p></label>

            <input type="text" />
            <label><p>Adresse:</p></label>
            <input type="text" />
            <label><p>Phone Number:</p></label>
            <input type="text" />
            <button className="btn">submit</button>
        </div>
    )
}

export default Order
