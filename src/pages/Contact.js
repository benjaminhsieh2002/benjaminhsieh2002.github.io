import React from "react";
import "../style/Style.css"
import SophiaPicture from "../pictures/Sophia.jpg"
import BoPicture from "../pictures/Bo.jpg"
import BenjaminPicture from "../pictures/BenjaminPhoto.jpg"
import SeanPicture from "../pictures/Sean.jpg"
 
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
										<br/>
										<h1>Sophia Weiler</h1>
										<br/>
										<a href = "mailto: sophiaweiler@ucsb.edu">sophiaweiler@ucsb.edu</a>
										<br/> <br/>
										<p class="bio">Sophia is a first year Computer Science major. Originally from the Bay Area, she grew up learning about technology and is a big advocate for growing women's representation in the STEM field. When not coding,you can find her at the beach enjoying Santa Barbara's beautiful sunsets or at a theatre performance, since she has been an actress herself since age 6.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="flex-child-contact">
							<div class="flip-card">
                                                                 <div class=  "flip-card-inner">
                                                                         <div class="flip-card-front">
                                                                                 <img src={SeanPicture}  alt={"Sean Carter"} class="pictureSize"/>
                                                                                 <br/>
                                                                                 <br/>
                                                                                 <h4 class="name"><b>Sean Carter</b></h4>
                                                                                 <p class="description">Frontend Engineer</p>
                                                                         </div>
                                                                         <div class="flip-card-back">
										 <br/>
                                                                                 <h1>Sean Carter</h1>
										 <br/>
                                                                                 <a href = "mailto: seancarter@ucsb.edu">seancarter@ucsb.edu</a>
										 <br/> <br/>
                                                                                 <p class="bio">Sean is a computer Science major at UC Santa Barbara who's curious about the capabilities of AI to understand human languages. He loves books, cats, and open source software.</p>
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
										 <br/>
                                                                                 <h1>Connor Duncan</h1>
										 <br/>
                                                                                 <a href = "mailto: connorduncan@ucsb.edu">connorduncan@ucsb.edu</a>
										 <br/> <br/>
                                                                                 <p class="bio">phone number</p>
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
										 <br/>
                                                                                 <h1>Benjamin Hsieh</h1>
										 <br/>
                                                                                 <a href = "mailto: hhsieh@ucsb.edu">hhsieh@ucsb.edu</a>
										 <br/> <br/>
                                                                                 <p class="bio">phone number</p>
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
										 <br/>
                                                                                 <h1>Bo Kizildag</h1>
										 <br/>
                                                                                 <a href = "mailto: bkizildag@ucsb.edu">bkizildag@ucsb.edu</a>
										 <br/> <br/>
                                                                                 <p class="bio">phone number</p>
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

