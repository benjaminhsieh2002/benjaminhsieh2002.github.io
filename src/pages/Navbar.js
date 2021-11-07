import React from "react"
import "../style/Style.css"
import { Link } from "react-router-dom";
import Logo from "../pictures/TraceRootLogo.jpg"

function Navbar(){
	return(
		<div class="sticky-top">
			 <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"/>
			<nav class="navbar sticky-top">
				<a href="/">
					<img class="logo" src={Logo} alt={"TraceRoot"}/>
				</a>
				<Link to='/contact'>
				<button class="contact" variant="outlined">Contact</button>
				</Link>
			</nav>
		</div>
	);
}

export default Navbar;
