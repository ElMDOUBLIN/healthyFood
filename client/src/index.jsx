import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Itemlist from "./components/Itemlist.jsx";
import Itemdetails from "./components/Itemdetails.jsx";
import Admin from "./components/Admin.jsx";
import Update from "./components/Update.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "itemlist",
      items: [],
      item: {},
    };
    this.changeView = this.changeView.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    axios.get("http://localhost:3000/api/admin").then((data) => {
      // console.log(data.data);
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

  // updateitem(updateitem) {
  //   this.setState({
  //     items: this.state.items.filter((item) => item._id !== updateitem._id),
  //   });
  // }
  renderView() {
    const { view } = this.state;
    if (view === "itemlist") {
      return <Itemlist items={this.state.items} />;
    } else if (view === "admin") {
      return (
        <Admin
          item={this.state.item}
          items={this.state.items}
          fetch={this.fetch}
          changeView={this.changeView}
        />
      );
    } else if (view === "update") {
      return (
        <Update
          item={this.state.item}
          items={this.state.items}
          fetch={this.fetch}
          changeView={this.changeView}
        />
      );
    } else {
      return <Itemdetails />;
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo" onClick={() => this.changeView("itemlist")}>
            HealthyFood
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
              this.changeView("admin");
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
