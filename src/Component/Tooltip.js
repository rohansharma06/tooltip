import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

export default class Tooltip extends Component {
  render() {
    const { position } = this.props;
    //console.log(position);
    return (
      <div>
        <ReactTooltip
          id="registerTip"
          place={position}
          effect="solid"
          className="tooltip"
        >
          Tooltip at position: {position}
        </ReactTooltip>
      </div>
    );
  }
}
