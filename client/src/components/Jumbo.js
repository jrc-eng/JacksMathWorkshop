import React from "react-dom"


import {Jumbotron} from "react-bootstrap";

import {Link} from "react-router-dom"

require("./Jumbo.css")

const Jumbo = () =>{


return(

    <div>
        
    
    <Jumbotron fluid className={"jumbo"}>

        <h1 className={"header"}><Link to={"/"}>Jack's Math Workshop</Link></h1>

    </Jumbotron>



    </div>



)





}


export default Jumbo