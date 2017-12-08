import React, { Component } from "react";

class ListItemRight extends Component {
  render() {
    return (
      <div
        className={
          this.props.selected ? "rectangular-box-hover" : "rectangular-box"
        }
      >
        {this.props.children}
      </div>
    );
  }
}

export default ListItemRight;
