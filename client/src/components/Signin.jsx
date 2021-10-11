import React, { Component } from 'react'

export default class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.check = this.check.bind(this);
    this.handlechange = this.handlechange.bind(this)
  }
  check() {
    if ((this.state.username === 'lmedselim@gmail.com') || (this.state.password === 'selim')) {
      this.props.changeView("admin");
    } else {
      alert('error admin inexistant')
      this.props.changeView("itemlist");
    }
  }

  handlechange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div>


        <label for="uname"><p>Username</p></label>
        <input type="text" placeholder="Enter Username" name="username"

          value={this.state.username}

          onChange={this.handlechange} />

        <label for="psw"><p>Password</p></label>
        <input type="password" placeholder="Enter Password" name="password"

          value={this.state.password}

          onChange={this.handlechange} />

        <button type="submit" className="btn" onClick={() => this.check()}>Login</button>



        <button type="button" className="btnn" onClick={() => this.props.changeView("itemlist")}>Cancel</button>


      </div>
    )
  }
}
