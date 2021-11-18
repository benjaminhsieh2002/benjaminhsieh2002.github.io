import React from "react";
import "../../style/style.css"
import {SeparateInput} from "../../Backend.js"
export let wordCount

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
    if(SeparateInput(text) != null && SeparateInput(text) < 1){ //Makes sure we're not trying to read the length of a null object, which would produce an error.
      wordCount = SeparateInput(text).length;
    }
    else {
      wordCount = 0;
    }
  }

  countWords(text) {
    if(!text.length){
      return 0;
    }
    if(text[text.length-1] != " "){
      return text.split(' ').length;
    }
    else {
      return text.split(' ').length - 1;
    }
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
