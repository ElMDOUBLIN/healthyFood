import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Authentication from "./components/Authentication.jsx";
import Itemlist from "./components/Itemlist.jsx";
import Search from "./components/Search.jsx";
import Admin from "./components/Admin.jsx";
import Update from "./components/Update.jsx";
import Signin from "./components/Signin.jsx";
import Itemdetails from "./components/Itemdetails.jsx";
import Order from "./components/Order.jsx";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      isAuthenticated: false,
      view: "itemlist",
      items: [],
      item: {},
      word: '',
    };
    this.changeView = this.changeView.bind(this);
    this.fetch = this.fetch.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.searching = this.searching.bind(this)

  }
  searching(word) {
    this.setState({ word: word })
  }
  fetch() {
    axios.get("http://localhost:3000/api/admin").then((data) => {
      this.setState({ items: data.data });
    });
  }
  componentDidMount() {
    this.fetch();
  }
  changeView(option, item) {
    this.setState({
      view: option,
      item: item,
    });
  }


  updateUser(data) {
    this.setState({
      isAuthenticated: true,
      user: data.user
    })
  }

  renderView() {
    const { view } = this.state;
    if (this.state.isAuthenticated) {
      if (view === "itemlist") {
        return <Itemlist changeView={this.changeView} word={this.state.word} items={this.state.items} />;
      } else if (view === "signin") {
        return (
          <Signin

            item={this.state.item}
            items={this.state.items}
            fetch={this.fetch}
            changeView={this.changeView}
          />
        );
      }
      else if (view === "admin") {
        return (
          <Admin

            item={this.state.item}
            items={this.state.items}
            fetch={this.fetch}
            changeView={this.changeView}
            word={this.state.word}
          />
        );
      } else if (view === "details") {
        return (
          <Itemdetails
            item={this.state.item}
          />
        );

      } else if (view === "order") {
        return (
          <Order
            changeView={this.changeView}
          />
        );

      }
      else if (view === "update") {
        return (
          <Update
            item={this.state.item}
            items={this.state.items}
            fetch={this.fetch}
            changeView={this.changeView}
          />
        );
      }
    } else {
      return <Authentication updateUser={this.updateUser} />
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo" onClick={() => this.changeView("itemlist")}>
            HealthyFood
          </span>
          <span className="logo">
            <Search data={this.state.items} searching={this.searching} />
          </span>
          <span
            className={
              this.state.view === "itemlist" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("itemlist")}
          >
            See all HealthyFood meals
          </span>
          <span
            className={
              this.state.view === "admin" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => {
              this.changeView("signin");
            }}
          >
            Admin
          </span>
        </div>
        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
