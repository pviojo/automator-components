import React from "react";
import JSONPretty from "react-json-pretty";

import "./index.css";

export default ({ block }) => {
  const { fn, name, value, type, input, output } = block;

  let outputConnectors = [];
  let inputConnectors = [];
  if (input) {
    inputConnectors = input.map(arg => {
      return (
        <div className="connector" key={arg.name}>
          {arg.name}
        </div>
      );
    });
  }

  if (output) {
    outputConnectors = output.map(arg => {
      return (
        <div className="connector" key={arg.name}>
          {arg.name}
        </div>
      );
    });
  }

  let blockHeight = Math.max(
    15,
    Math.max(outputConnectors.length, inputConnectors.length) * 27 + 5 - 20
  );

  let label = "";

  switch (type) {
    case "function":
      label = fn + "()";
      break;
    case "variable":
      blockHeight = "auto";
      label = ((name, value) => {
        return (
          <div>
            {name ? <div class="variable-name">{name}</div> : null}
            <div className="variable-value">
              <JSONPretty json={value} />
            </div>
          </div>
        );
      })(name, value);
      break;
    default:
      label = "";
      break;
  }

  let blockStyle = {
    maxHeight: blockHeight,
    height: blockHeight
  };

  return (
    <div style={blockStyle} className={"block block-" + type}>
      <div className="label">{label}</div>
      <div className="input">
        <div className="inner">{inputConnectors}</div>
      </div>
      <div className="output">
        <div className="inner">{outputConnectors}</div>
      </div>
    </div>
  );
};
