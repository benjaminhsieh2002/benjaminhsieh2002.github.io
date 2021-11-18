import React from "react";
import "../../style/style.css"
import {SeparateInput} from "../../Backend.js"

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordCount: 0,
      text: ""
    };
    this.updateWordCount = this.updateWordCount.bind(this)
  }

  updateWordCount(textarea) {
  	let text = textarea.target.value;
  this.setState({ wordCount: this.countWords(text)});
	SeparateInput(text);
  }


  countWords(text) {
    return text.split(' ').length;
  }



  render() {
    return (
        <div>
                <textarea
                className="inputBox"
                id="textBox"
                name="textBox"
                rows="17"
                cols="75"
                placeholder="Type or paste text here"
                onChange={this.updateWordCount}
                ></textarea>
            <div class="wordCount">Word Count: {this.state.wordCount}</div>
        </div>
      
    );
  }
}

export default Textbox;
