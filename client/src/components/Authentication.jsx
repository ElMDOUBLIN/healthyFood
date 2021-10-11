import React from "react";
import axios from "axios";

export default class Authentication extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      view: "signup"
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeView = this.changeView.bind(this);
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
  }

  changeView(view) {
    this.setState({ view });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    console.log(this.state);
  }

  signup(event) {
    event.preventDefault();
    axios
      .post("/api/auth/signup", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(({ data }) => {
        console.log(data);
        if (data === 'User already exists') {
          alert('User already exists');
        } else {
          alert('You have been signed up successfully')
        }
      });
  }

  signin(event) {
    event.preventDefault();
    axios

      .post("/api/auth/signin", {
        username: this.state.username,
        password: this.state.password
      })
      .then(({ data }) => {
        if (data === "User doesn't exist") { alert("User doesn't exist") }
        else if (data === "Wrong password") { alert("Wrong password") }
        else {
          this.props.updateUser(data);
        }
      });
  }

  render() {
    return (
      <div>
        <h2>Authentication page</h2>
        {this.state.view === "signup" ? (
          <div className="create">
            <div className="create-editor">
              <h2>Signup:</h2>
              <form>
                <input id="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                <input id="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                <button className="btn" type="submit" onClick={this.signup}>
                  Sign up
                </button>
                <span
                  style={{ marginLeft: "20px" }}
                  onClick={() => {
                    this.changeView("signin");
                  }}>
                  <h3 > click here to signin</h3>
                </span>
              </form>
            </div>
          </div>
        ) : (
          <div className="create">
            <div className="create-editor">
              <h2>Signin:</h2>
              <form>
                <input id="username" className="create-input" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                <input id="password" className="create-input" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                <button className="btn" type="submit" onClick={this.signin}>
                  Sign in
                </button>
                <span
                  style={{ marginLeft: "20px" }}
                  onClick={() => {
                    this.changeView("signup");
                  }}>
                  <h3 >click here to signup</h3>
                </span>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
