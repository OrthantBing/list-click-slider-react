import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onDivClick = this.onDivClick.bind(this);
  }

  onDivClick(e) {
    this.props.onClick(this.props.itemnumber);
  }
  render() {
    console.log(this);
    return (
      <div
        className={
          this.props.selected
            ? "container-induvidual-click"
            : "container-induvidual"
        }
        onClick={this.onDivClick}
      >
        <div className="circle" />
        <div className="component">{this.props.children}</div>
      </div>
    );
  }
}

export default ListItem;
