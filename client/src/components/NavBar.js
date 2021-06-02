import React from "react-dom"

import { Nav, Navbar, NavDropdown, Dropdown} from 'react-bootstrap';

require("./NavBar.css")

const NavBar = () =>{


    
    
        return(
            <Navbar bg={"dark"} variant={"dark"}>

                <ul class={"hlist"}>

                    <Nav className="mr-auto">
                        <Nav.Link href="/">HOME</Nav.Link>
                        
                        
                        <NavDropdown title="Algebra" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/algebra/calculator">Basic Calculator</NavDropdown.Item>
                        <NavDropdown.Item href="/algebra/Charter">Graph Charter</NavDropdown.Item>

                        </NavDropdown>


                        <NavDropdown title="Calculus" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/calc/powerRule">Power Rule</NavDropdown.Item>

                        </NavDropdown>
                        

                    </Nav>

                    





                </ul>
            </Navbar>
    
    
    
    )
    

    }
    
    
    export default NavBar