import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Contact from './pages/Contact'
import Test from './pages/Test'
import Navbar from './pages/Navbar'

const Main = () => {
    return(
        <BrowserRouter>
	    <Navbar/>
            <Switch>
                <Route exact path='/' exact component={Home}/> 
                <Route exact path='/contact' exact component={Contact}/> 
            </Switch>
        </BrowserRouter>

    );


}
export default Main;
