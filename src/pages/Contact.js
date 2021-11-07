import React from "react";
import "../style/Style.css"
import SophiaPicture from "../pictures/Sophia.jpg"
import BoPicture from "../pictures/Bo.jpg"
import BenjaminPicture from "../pictures/BenjaminPhoto.jpg"
 
function Contact() {
	return(
		<div>
			<h2 class="team">Meet Our Team...</h2>
			<div class="flex-container">
				<div class="flex-child">
					<div class ="box-contact">
						<h3 class="frontend">Frontend:</h3>
					</div>
					<br/>  
					<div class="flex-container-contact">
						<div class="flex-child-contact">
							 <div class="flip-card">
								<div class=  "flip-card-inner">
									<div class="flip-card-front">
										<img src={SophiaPicture}  alt={"Sophia Weiler"} class="pictureSize"/>
										<br/>
										<br/>
										<h4 class="name"><b>Sophia Weiler</b></h4>
										<p class="description">Frontend Engineer</p>
									</div>
									<div class="flip-card-back">                                             
										<h1>Sophia Weiler</h1>
										<p>email</p>
										<p>phone number</p>
									</div>
								</div>
							</div>
						</div>
						<div class="flex-child-contact">
							<div class="flip-card">
                                                                 <div class=  "flip-card-inner">
                                                                         <div class="flip-card-front">
                                                                                 <img src={SophiaPicture}  alt={"Sean Carter"} class="pictureSize"/>
                                                                                 <br/>
                                                                                 <br/>
                                                                                 <h4 class="name"><b>Sean Carter</b></h4>
                                                                                 <p class="description">Frontend Engineer</p>
                                                                         </div>
                                                                         <div class="flip-card-back">
                                                                                 <h1>Sean Carter</h1>
                                                                                 <p>email</p>
                                                                                 <p>phone number</p>
                                                                         </div>
                                                                 </div>
                                                         </div>
						</div>
					</div>
				</div>
				<div class="flex-child">
					<div class ="box-contact">
						<h3 class="backend">Backend:</h3>
					</div>
					<br/>
					<div class="flex-container-contact">
						<div class="flex-child-contact">
							<div class="flip-card">
                                                                  <div class=  "flip-card-inner">
                                                                         <div class="flip-card-front">
                                                                                 <img src={SophiaPicture}  alt={"Connor Duncan"} class="pictureSize"/>
                                                                                 <br/>
                                                                                 <br/>
                                                                                 <h4 class="name"><b>Connor Duncan</b></h4>
                                                                                 <p class="description">Backend Engineer</p>
                                                                         </div>
                                                                         <div class="flip-card-back">
                                                                                 <h1>Connor Duncan</h1>
                                                                                 <p>email</p>
                                                                                 <p>phone number</p>
                                                                         </div>
                                                                 </div>
                                                         </div>
						
							<div class="flip-card">
                                                                 <div class=  "flip-card-inner">
                                                                         <div class="flip-card-front">
                                                                                 <img src={BenjaminPicture}  alt={"Benjamin Hsieh"} class="pictureSize"/>
                                                                                 <br/>
                                                                                 <br/>
                                                                                 <h4 class="name"><b>Benjamin Hsieh</b></h4>
                                                                                 <p class="description">Backend Engineer</p>
                                                                         </div>
                                                                         <div class="flip-card-back">
                                                                                 <h1>Benjamin Hsieh</h1>
                                                                                 <p>email</p>
                                                                                 <p>phone number</p>
                                                                         </div>
                                                                 </div>
                                                         </div>
						</div> 
					<div class="flex-child-contact">
						<div class="flip-card">
                                                                 <div class=  "flip-card-inner">
                                                                         <div class="flip-card-front">
                                                                                 <img src={BoPicture}  alt={"Bo Kizildag"} class="pictureSize"/>
                                                                                 <br/>
                                                                                 <br/>
                                                                                 <h4 class="name"><b>Bo Kizildag</b></h4>
                                                                                 <p class="description">Backend Engineer</p>
                                                                         </div>
                                                                         <div class="flip-card-back">
                                                                                 <h1>Bo Kizildag</h1>
                                                                                 <p>email</p>
                                                                                 <p>phone number</p>
                                                                         </div>
                                                                 </div>
                                                         </div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
}
export default Contact;

