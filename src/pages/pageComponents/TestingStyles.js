import React from "react"
import "../../style/style.css"
import Hash from "../../Backend.js"

class TestingStyles extends React.Component {
    render() {
    return(
        <div>
        <div> class="Test" Testing styles.css </div>
			<p>Hello!</p>
			<button onclick={Hash('immaculate')}> Hash "Immaculate" </button>
		</div>
    )
}
}

export default TestingStyles;
