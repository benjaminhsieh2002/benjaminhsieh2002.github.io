import React from "react"
import "../style/style.css"


class Test extends React.Component {
    render() {
        return(
            <div>
                <h1>This is a test!</h1>
                <div>To test the homepage, go to /home</div>
                <div>To test the contact page, go to /contact</div>
                <div>For updates or other URLs, consult Main.js</div>
            </div>
        )
    }
}

export default Test