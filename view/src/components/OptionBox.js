import React, { PureComponent } from "react";

export default class OptionBox extends PureComponent {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
        wordAmount: 1,
        wordType: 'nouns',
        wordList: [],
    };
  }

  handleChange() {
    const newWords = [];
    if(this.wordList.length == 0) {
      fetch("/getWords", {
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        method: "POST",
        body: new URLSearchParams({
          "wordType": "nouns"
        })
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({wordList: data})
        newWords = data
      })
    } else {
      
    }
    this.props.onWordGeneration(newWords)
  }

  render() {
    return (
      <div>
        {this.state.wordList.length}
        <label>Số lượng từ: </label>
        <input 
          type="number" 
          min="1"
          max="5"
          value={this.state.wordAmount} />
        <label>Loại từ: </label>
        <select 
          value={this.state.wordType}>
            <option value="nouns">Danh từ</option>
            <option value="verbs">Động từ</option>
            <option value="adjective">Tính từ</option>
            <option value="all">Tổng hợp</option>
          </select>
        <button
          onClick={this.handleChange}>
          Tạo từ mới
        </button>
      </div>
    );
  }
}

function* shuffle(array) {
  var i = array.length;
  while (i--) {
      yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
  }
}