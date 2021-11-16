import React from "react"
import "../../style/style.css"
import {GetRomancePercent} from "../../Backend.js"
import {GetGermanicPercent} from "../../Backend.js"
import {GetOtherPercent} from "../../Backend.js"

class TextAnalysis extends React.Component {
    render() {
        return(
           <div>
            <header class="textAnalysis">
TextAnalysis
</header>

<div class="box">
<ul>
<li class="box-percent box-percent-Romance">{GetRomancePercent} % Romance</li>
<li class="box-percent box-percent-Germanic">{GetGermanicPercent}% Germanic</li>
<li class="box-percent box-percent-Other">{GetOtherPercent}% Other</li>

</ul>

</div>
 </div>          
        )
    }
}

export default TextAnalysis;
