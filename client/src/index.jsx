import React from "react";
import ReactDOM from "react-dom";

import Itemlist from "./components/Itemlist.jsx";
import Itemdetails from "./components/Itemdetails.jsx";
import Admin from "./components/Admin.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "itemlist",
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === "itemlist") {
      return <Itemlist />;
    } else if (view === "admin") {
      return <Admin />;
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
