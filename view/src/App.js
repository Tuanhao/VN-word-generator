import React, { Component } from 'react'

import Header from './Header'
import OptionBox from './components/OptionBox'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleWordGeneration = this.handleWordGeneration.bind(this)
    this.state = {
      // filteredEmoji: filterEmoji("", 20)
      selectedWordList: [],
    };
  }

  handleWordGeneration(wordList) {
    this.setState({selectedWordList: wordList})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <OptionBox onWordGeneration={this.handleWordGeneration}  />
        <DisplayBox words={this.state.selectedWordList} />
      </div>
    );
  }
}

