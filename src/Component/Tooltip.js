import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

export default class Tooltip extends Component {
  render() {
    const { position } = this.props;
    console.log(position);
    return (
      <ReactTooltip id="registerTip" place={position} effect="solid">
        Tooltip at position: {position}
      </ReactTooltip>
    );
  }
}
