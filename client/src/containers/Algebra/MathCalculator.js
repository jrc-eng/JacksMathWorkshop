import React,{useEffect} from "react"


import Jumbo from "../../components/Jumbo"

import NavBar from "../../components/NavBar"
import {Container, Col, Row} from "react-bootstrap"

import {IconButton, TextField, Tooltip, Button} from "@material-ui/core";

const MathCalculator =()=>{

    const [value, setValue] = React.useState(0);

    const [displayValue, setDisplayValue] = React.useState("0");

    const [currentOp, setCurrentOp] = React.useState("");

    const [answer, previousAnswer] = React.useState(0);

    return(
        <div>        
            
            <Jumbo></Jumbo>
        
            <NavBar></NavBar>
        

            <h1>Basic Calculator</h1>
            
            <Container>
                <Row>
                    <Col>
                        <h2>Input</h2>

                        <table>
                            <tr>
                                <td>
                                    <Button variant="contained">7</Button>
                                </td>
                                <td>
                                    <Button variant="contained">8</Button>
                                </td>
                                <td>
                                    <Button variant="contained">9</Button>
                                </td> 
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="contained">4</Button>
                                </td>
                                <td>
                                    <Button variant="contained">5</Button>
                                </td>
                                <td>
                                    <Button variant="contained">6</Button>
                                </td> 
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="contained">1</Button>
                                </td>
                                <td>
                                    <Button variant="contained">2</Button>
                                </td>
                                <td>
                                    <Button variant="contained">3</Button>
                                </td> 
                            </tr>
                            <tr>

                                <td>
                                    <Button variant="contained">0</Button>
                                </td>

                            </tr>

                            <tr>

                                <td>
                                    <Button variant="contained">+</Button>
                                </td>
                                <td>
                                    <Button variant="contained">-</Button>
                                </td>
                                <td>
                                    <Button variant="contained">*</Button>
                                </td>
                                <td>
                                    <Button variant="contained">/</Button>
                                </td>

                            </tr>

                            <tr>
                                <td>
                                <Button variant="contained">GO</Button>
                                
                                </td>
                                <td>
                                <Button variant="contained">CLEAR</Button>
                                </td>
                            </tr>

                        </table>

                    </Col>
                    <Col>
                        <h2>Output</h2>

                        <h3>{displayValue}</h3>

                    </Col>
                </Row>
            </Container>
        
        </div>





    )





}

export default MathCalculator