import React from "react";
import "../style/style.css"
import SophiaPicture from "../pictures/Sophia.jpeg"
import BoPicture from "../pictures/Bo.jpeg"
import BenjaminPicture from "../pictures/Benjamin.jpeg"
import SeanPicture from "../pictures/Sean.jpeg"
import ConnorPicture from "../pictures/Connor.jpg"
 
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
										<p class="bio">Sophia is a first year Computer Science major. Originally from the Bay Area, she grew up learning about technology and is a big advocate for growing women's representation in the STEM field. When not coding, you can find her at the beach enjoying Santa Barbara's beautiful sunsets or at a theatre performance, since she has been an actress herself since age 6.</p>
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
                                                                                 <img src={ConnorPicture}  alt={"Connor Duncan"} class="pictureSize"/>
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
                                                                                 <p class="bio">I am currently a freshman majoring in Computer Science at the University of California, Santa Barbara. In my free time, I like to travel, try new foods, and go on hikes.</p>
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
                                                                                 <p class="bio">Benjamin is an international student from Taiwan at UC Santa Barbara majoring in mathematics. He is extremely passionate about computer science, and he had worked on numerous independent coding projects in high school. In his spare time, he likes to run, play the piano, and trade cryptocurrencies.</p>
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
                                                                                 <p class="bio">Aspiring innovator, Engineer-in-the-making. #HanShotFirst. Nano fabrication enthusiast.

(Entrepreneurship * Vision) ^ (hard work) = (Future Goals)

I respect the future. I believe in the future. I worship at its feet.</p>
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

