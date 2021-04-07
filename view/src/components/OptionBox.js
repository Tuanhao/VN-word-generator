import React, { PureComponent } from "react";

export default class OptionBox extends PureComponent {
  constructor(props) {
    super(props)
    this.handleGeneration = this.handleGeneration.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.state = {
        wordAmount: 1,
        wordType: 'nouns',
        wordList: [],
    };
  }

  async handleGeneration() {
    let displayWords = [];
    let tempWL = [];
    let i;
    let data = new URLSearchParams({
      "wordType": this.state.wordType,
    })
    if(this.state.wordList.length === 0) {
      tempWL = await fetch("/getWords", {
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        method: "POST",
        body: data
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Cant obtain words from server')
        }
      })
      .then(data => data)   
      .catch((error) => {
        console.error('Error:', error)
        return []
      })
    } else {
      tempWL = this.state.wordList;
    }
    let randWords = shuffle(tempWL);
    for (i = 0; i < this.state.wordAmount; i++) {
      displayWords.push(randWords.next().value)
    }
    //error handling is lacking
    this.setState({wordList: tempWL})
    this.props.onWordGeneration(displayWords)
  }

  handleAmountChange(e) {
    this.setState({wordAmount: e.target.value})
  }

  handleTypeChange(e) {
    this.setState({wordType: e.target.value})
  }

  render() {
    return (
      <div>
        <label>Số lượng từ: </label>
        <input 
          type="number" 
          min="1"
          max="5"
          value={this.state.wordAmount} 
          onChange={this.handleAmountChange} />
        <label>Loại từ: </label>
        <select 
          value={this.state.wordType}
          onChange={this.handleTypeChange}>
            <option value="nouns">Danh từ</option>
            <option value="verbs">Động từ</option>
            <option value="adjectives">Tính từ</option>
            <option value="all">Tổng hợp</option>
          </select>
        <button
          onClick={this.handleGeneration}>
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