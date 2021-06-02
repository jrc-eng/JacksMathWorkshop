import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import PowerRule from "./containers/Calc/PowerRule"

import Charter from "./containers/Algebra/Charter"
import MathCalculator from "./containers/Algebra/MathCalculator"
//Import some React routing.
import {BrowserRouter, Route} from 'react-router-dom'

require("./index.css")

const AppContainer = () =>
{
    return(


        <BrowserRouter>

            <Route component={App} exact path="/" />
            <Route component={PowerRule} exact path="/calc/powerRule"/>
            <Route component={Charter} exact path="/algebra/charter" />
            <Route component={MathCalculator} exact path="/algebra/calculator"></Route>

        </BrowserRouter>
    )

}






ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
