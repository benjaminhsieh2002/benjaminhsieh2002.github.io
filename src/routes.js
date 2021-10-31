// Format taken from the following guide: https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react

import React from "react"
import { Route, IndexRoute } from 'react-router';

import Home from "./pages/Home.js"
import App from "./App"
import Contact from "./pages/Contact.js"

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="./pages/Contact.js" component={Contact}/>     
    </Route>

)