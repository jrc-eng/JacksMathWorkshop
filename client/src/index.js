import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Import some React routing.
import {BrowserRouter, Route} from 'react-router-dom'

const AppContainer = () =>
{
    return(


        <BrowserRouter>

            <Route component={App} exact path="/" />
            

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
