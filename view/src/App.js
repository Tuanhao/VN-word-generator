import React, { Component } from 'react'

import Header from './Header'
import OptionBox from './components/OptionBox'
import DisplayBox from './components/DisplayBox.jsx'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleWordGeneration = this.handleWordGeneration.bind(this)
    this.state = {
      selectedWL: [],
    };
  }

  handleWordGeneration(wordList) {
    this.setState({selectedWL: wordList})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <OptionBox onWordGeneration={this.handleWordGeneration}  />
        <DisplayBox selectedWL={this.state.selectedWL} />
      </div>
    );
  }
}

