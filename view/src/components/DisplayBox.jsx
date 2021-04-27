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
      <div className="box mavenpro">
        {(this.props.isFetching)? 
          <div className="spinner">&#9733;</div> :
          this.props.selectedWL.map(i => {
            return (
              <div className="big-font" key={i}>
                {i}
                <span key={i}> &#9825;</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}