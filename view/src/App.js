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
        {keyword()}
      </div>
    );
  }
}

function keyword() {
  return (
    <div className="box keyword">
      Từ khóa: từ ngẫu nhiên, Tiếng Việt ngẫu nhiên, máy tạo từ, trò chơi từ, trò chơi ngẫu nhiên, danh từ ngẫu nhiên, động từ ngẫu nhiên, tính từ ngẫu nhiên, Vietnamese word generator, random Vietnamese words, random Vietnamese, Vietnamese words, Vietnamese words generator  
    </div>
  )
}

function description() {
  return (
    <div className="box description">
      <div>
        <h2>Giới thiệu</h2>
        <p>Hệ thống tạo từ Tiếng Việt ngẫu nhiên có thể ngẫu nhiên lựa chọn các loại từ (danh từ, động từ, tính từ) trong kho từ thông dụng. Hệ thống có thể sử dụng trong mục đích học tập, giải trí (trò chơi), và thơ văn. Nguồn cảm hứng lấy từ random word generator</p>
        <h2>Ứng dụng</h2>
        <h3>Trò chơi</h3>
        <p>Ứng dụng này có thể sử dụng trong trò chơi tạo câu hoặc kể chuyện với chữ ngẫu nhiên; còn có thể sử dụng tro trò chơi vẽ hình đoán chữ cũng như miêu tả đoán chữ.</p>
        <h3>Viết lách/ Làm thơ</h3>
        <p>Nếu bạn cần tìm cảm hứng hoặc rèn luyện khả năng sáng tạo nghệ thuật câu chữ (creative writing) thì bạn hoàn toàn có thể tạo 3-4 từ ngẫu nhiên và sử dụng các từ đó để viết 1 mẫu chuyện hoặc làm 1 bài thơ ngắn.</p>
      </div>
    </div>
  )
}
