
import React from "react-dom"
import logo from './logo.svg';
import './App.css';

import Jumbo from "./components/Jumbo"
import NavBar from "./components/NavBar"

require("./App.css")

//App will be the home page.
//And now, we need to make some pages for the Math Elements!
function App() {
  return (
    <div className="App">
      <Jumbo/>
      <NavBar supp={"reg"}/>






    </div>
  );
}

export default App;
