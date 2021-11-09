import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Contact from './pages/Contact'
import Test from './pages/Test'
import Navbar from './pages/Navbar'

const Main = () => {
    return(
        <BrowserRouter>
	    <Navbar/>
                <Route exact path='/' exact component={Home}/> 
                <Route exact path='/contact' exact component={Contact}/> 
        </BrowserRouter>

    );


}
export default Main;
