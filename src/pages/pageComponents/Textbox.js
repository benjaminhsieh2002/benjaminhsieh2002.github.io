import React from "react";

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordCount: 0
    };
    this.updateWordCount = this.updateWordCount.bind(this)
  }

  updateWordCount(textarea) {
    let text = textarea.target.value;
    this.setState({ wordCount: this.countWords(text)});
    console.log(this.state.wordCount);
  }

  countWords(text) {
    return text.split(' ').length;
  }

  render() {
    return (
        <div>
            <div className="flex-child">
                <textarea
                className="inputBox"
                id="textBox"
                name="textBox"
                rows="13"
                cols="80"
                placeholder="Type or paste text here"
                onChange={this.updateWordCount}
                ></textarea>
            </div>
            <div>WordCount: {this.state.wordCount}</div>
        </div>
      
    );
  }
}

export default Textbox;
