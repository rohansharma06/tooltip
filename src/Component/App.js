import React, { Component } from "react";
import Tooltip from "./Tooltip";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TooltipPosition: "",
    };
  }

  // ---- set position for tooltip
  setTooltipPositionTop = () => {
    this.handleState("top");
  };
  setTooltipPositionBottom = () => {
    this.handleState("bottom");
  };

  setTooltipPositionLeft = () => {
    this.handleState("left");
  };

  setTooltipPositionRight = () => {
    this.handleState("right");
  };

  handleState = (pos) => {
    this.setState({
      TooltipPosition: pos,
    });
  };

  render() {
    var position = this.state.TooltipPosition;
    return (
      <div className="container">
        <h1 className="header">ToolTip at different postions</h1>
        {/* ---- button 1 */}
        <button
          className="button first"
          data-tip
          data-for="registerTip"
          onMouseEnter={this.setTooltipPositionTop}
        >
          ToolTip Top
        </button>

        {/* ---- button 2 */}
        <button
          className="button second"
          data-tip
          data-for="registerTip"
          onMouseEnter={this.setTooltipPositionLeft}
          // onMouseLeave={this.change}
        >
          ToolTip Left
        </button>

        {/* ---- button 3 */}
        <button
          className="button third"
          data-tip
          data-for="registerTip"
          onMouseEnter={this.setTooltipPositionRight}
          // onMouseLeave={this.change}
        >
          ToolTip Right
        </button>

        {/* ---- button 4 */}
        <button
          className="button forth"
          data-tip
          data-for="registerTip"
          onMouseEnter={this.setTooltipPositionBottom}
          // onMouseLeave={this.change}
        >
          ToolTip Bottom
        </button>

        {/* ---- Tooltip */}
        <Tooltip position={position} />
      </div>
    );
  }
}
