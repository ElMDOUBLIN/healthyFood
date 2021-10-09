import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);  
    }

    render() {
        return (
            <div>
                <form>
                     <input name="name" type="text" action='search' placeholder='Search...' onChange={(e)=>this.props.searching(e.target.value)} />
          
                </form>
            </div>
        )
    }
}
