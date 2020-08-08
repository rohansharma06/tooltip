import React, { Component } from "react";
import Tooltip from "./Tooltip";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TooltipPosition: "bottom",
      TooltipPosition: "top",
      // TooltipPosition: "left",
      // TooltipPosition: "right",
    };
  }
  render() {
    var position = this.state.TooltipPosition;
    return (
      <div>
        <button className="button" data-tip data-for="registerTip">
          ToolTip
        </button>
        <Tooltip position={position} />
      </div>
    );
  }
}
