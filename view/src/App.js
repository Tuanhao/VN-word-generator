import React, { Component } from 'react'

import Header from './Header'
import OptionBox from './components/OptionBox'
import DisplayBox from './components/DisplayBox.jsx'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleWordGeneration = this.handleWordGeneration.bind(this)
    this.inFetching = this.inFetching.bind(this)
    this.state = {
      selectedWL: [],
      isFetching: false,
    };
  }

  handleWordGeneration(wordList) {
    this.setState({
      selectedWL: wordList,
      isFetching: false,
    })
  }

  inFetching() {
    this.setState({isFetching: true})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <OptionBox onWordGeneration={this.handleWordGeneration} inFetching={this.inFetching} />
        <DisplayBox selectedWL={this.state.selectedWL} isFetching={this.state.isFetching} />
        {description()}
      </div>
    );
  }
}

function description() {
  return (
    <div className="keyword">
      Từ khóa: từ ngẫu nhiên, Tiếng Việt ngẫu nhiên, máy tạo từ, trò chơi từ, trò chơi ngẫu nhiên, danh từ ngẫu nhiên, động từ ngẫu nhiên, tính từ ngẫu nhiên, Vietnamese word generator, random Vietnamese words, random Vietnamese, Vietnamese words, Vietnamese words generator  
    </div>
  )
}

