import React from "react"
import "../../style/style.css"
import {GetRomancePercent, GetGermanicPercent, GetOtherPercent} from "../../Backend.js"

class TextAnalysis extends React.Component {
	constructor(props){
	super(props);
	this.state = {
		romancePercent : GetRomancePercent(),
		germanicPercent : GetGermanicPercent(),
		otherPercent: GetOtherPercent()
	};
	this.handleChange = this.handleChange.bind(this)
}
	handleChange(event) {
		this.setState({
			romancePercent: GetRomancePercent(),
			germanicPercent : GetGermanicPercent(),
			otherPercent: GetOtherPercent()
		});
	}

    render() {
        return(
           <div>
				<header class="textAnalysis">
					Text Analysis
				</header>

				<div class="box">
					<ul>
						<li style={{color: "gray"}}>Words: </li> {/* TODO: Make same color as the rest*/}
						<li class="box-percent box-percent-Romance">{this.state.romancePercent}% Romance</li>
						<li class="box-percent box-percent-Germanic">{this.state.germanicPercent}% Germanic</li>
						<li class="box-percent box-percent-Other">{this.state.otherPercent}% Other</li>
					</ul>
				</div>
				<button class="analysisButton" onClick={this.handleChange}>Analyze</button>
			</div>          
        )
    }
}

export default TextAnalysis;
