import React, { Component } from "react";
import ListItemLeft from "./listitemleft";
import ListWrapper from "./listwrapper";
import ListItemRight from "./listitemright";
import ListWrapperRight from "./listwrapperright";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listarray: App.InitializeState()
    };
    this.onListItemClick = this.onListItemClick.bind(this);
  }

  onListItemClick(itemnumber) {
    this.setState(prevstate => {
      let newstate = prevstate.listarray.slice();
      newstate = newstate.map(function(val, index) {
        if (index === itemnumber) {
          val.selected = true;
        } else {
          val.selected = false;
        }

        return val;
      });

      return {
        listarray: newstate
      };
    });
  }

  generateList() {
    const list = this.state.listarray.map((li, index) => {
      return (
        <ListItemLeft
          key={index + 1}
          selected={li.selected}
          onClick={this.onListItemClick}
          itemnumber={index}
        >
          {li.content}
        </ListItemLeft>
      );
    });
    return list;
  }

  generateImages() {
    const list = this.state.listarray.map((li, index) => {
      return (
        <ListItemRight
          key={index + 1}
          selected={li.selected}
          itemnumber={index}
        >
          {li.description}
        </ListItemRight>
      );
    });
    return list;
  }
  render() {
    return (
      <div className="container-container-wrapper">
        <ListWrapper>{this.generateList()}</ListWrapper>
        <ListWrapperRight>{this.generateImages()}</ListWrapperRight>
      </div>
    );
  }

  static InitializeState() {
    return [
      {
        content: "Son Goku is Kakarot",
        description: "This is some big description which will show up as image",
        selected: false
      },
      {
        content: "Trunks is Vegeta and Bulama's son",
        description: "This should contain an image",
        selected: false
      },
      {
        content: "Kakarot's signature move is ka-me-ha-me-ha",
        description: "This should also contain an image",
        selected: false
      }
    ];
  }
}

export default App;
