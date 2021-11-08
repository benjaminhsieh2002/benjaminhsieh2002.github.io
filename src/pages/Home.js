import "../style/style.css"
import React from "react"
import hash from "../Backend"
import "../Backend"
import { Link } from "react-router-dom";
import Textbox from "./pageComponents/Textbox"

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

			  <header class="textAnalysis">
			    Analysis
			</header>

			<div class="box">
			    <ul>
				<li class="box-percent box-percent-Romance">x % Romance</li>
				<li class="box-percent box-percent-Germanic">y % Germanic</li>
				<li class="box-percent box-percent-Other">z % Other</li>

			    </ul>
		</div>

		 <header class="key">
			      Key
			  </header>

			 <div>
			 <ul class="list-group">

		  <li class="list-group-item list-group-item-romance">Romance</li>
		  <li class="list-group-item list-group-item-germanic">Germanic</li>
		  <li class="list-group-item list-group-item-other">Other</li> 
		  </ul>
			 </div>
			 <div class="Test"> Testing styles.css</div>
			 <p>Hello!</p>
			<button onclick={hash('immaculate')}> Hash "Immaculate" </button>
			</div>

			</div>


			</main>


		</div>

		)

	}


}
export default Home;
