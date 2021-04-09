import React, { PureComponent } from "react";

import './DisplayBox.css'

export default class DisplayBox extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      favWords: [],

    };
  }

  render() {
    return (
      <div className="box">
        {this.props.selectedWL.map(i => {
          return (
            <div key={i}>
              {i}
              <span key={i}> &#9829;</span>
            </div>
          )
        })}
      </div>
    )
  }
}