import "./style/style.css"

function Home() {
	return(
		<html>
		<title>
			Linguistory
		    </title>
		    <head>
			<div>
			<link href = "style.css"/>

			 <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"/>

			 <link href="/etymLogo.png" rel="icon" />
			</div>
		    </head>

		    <body>
		  <nav class="navbar sticky-top">
			      <a class="title" href="#title"> 
				  Linguistory</a>
		       <a class="contact"  href="/Contact">Contact</a>
			  </nav>  


		    <main>


		     <div class="flex-container">
			  <div class="flex-child">


			    <textarea class="inputBox" id="textBox" name="textBox" rows="20" cols="50" placeholder="Type or paste text here"></textarea>

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
			</div>

			</div>


			</main>

		    </body>

		</html>
	)
}

export default Home;
