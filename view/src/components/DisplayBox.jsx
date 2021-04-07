import React, { PureComponent } from "react";

export default class DisplayBox extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      favWords: [],

    };
  }

  render() {
    return (
      <div>
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