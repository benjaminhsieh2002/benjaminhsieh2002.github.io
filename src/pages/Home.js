import "../style/style.css"
import React from "react"
import hash from "../Backend"
import "../Backend"
import { Link } from "react-router-dom";
import Textbox from "./pageComponents/Textbox"
import TextAnalysis from "./pageComponents/TextAnalysis";
import Key from "./pageComponents/Key";
import TestingStyles from "./pageComponents/TestingStyles";

class Home extends React.Component {
	render() {
		return(
		<div>

		    <main>


		     <div class="flex-container">
			<div class="flex-child">	
			 <Textbox />
			</div>
		<div class="flex-child">

		<TextAnalysis />

		<Key />

			 <TestingStyles />

			</div>
			</div>


			</main>


		</div>

		)

	}


}
export default Home;
