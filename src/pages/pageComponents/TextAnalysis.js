import React from "react"
import "../../style/style.css"

class TextAnalysis extends React.Component {
    render() {
        return(
           <div>
            <header class="textAnalysis">
TextAnalysis
</header>

<div class="box">
<ul>
<li class="box-percent box-percent-Romance">x % Romance</li>
<li class="box-percent box-percent-Germanic">y % Germanic</li>
<li class="box-percent box-percent-Other">z % Other</li>

</ul>
</div>
 </div>          
        )
    }
}

export default TextAnalysis;