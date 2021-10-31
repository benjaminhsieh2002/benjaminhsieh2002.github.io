import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Contact from './pages/Contact'
import Test from './pages/Test'

const Main = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/home' exact component={Home}/> 
                <Route exact path='/contact' exact component={Contact}/> 
                <Route exact path='' exact component={Test}/>             
            </Switch>
        </BrowserRouter>

    );


}
export default Main;