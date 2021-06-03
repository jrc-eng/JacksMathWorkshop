import React,{useEffect} from "react"
import Jumbo from "../../components/Jumbo"

import NavBar from "../../components/NavBar"
import {Container, Col, Row} from "react-bootstrap"

import { TextField, Button } from "@material-ui/core"

//import DeleteIcon from '@material-ui/icons/Delete';

const Charter = () =>{

    const [errorMessage, setErrorMessage] = React.useState("*");

    const [xValue, setXValue] = React.useState(0);

    const [yValue, setYValue] = React.useState(0);



    const AddCurrentPoint = () =>{




    }



        return(<div>
            <Jumbo></Jumbo>
            <NavBar></NavBar>

            <h1>Table to Graph Charter</h1>


            <Container>
                <Row>
                    <Col>
                        <h2>Insert Values Here.</h2>
                        
                        X-Value
                        <TextField type="number"></TextField> <br/>
                        
                        Y-Value
                        <TextField type="number"></TextField>


                        {/* Good work.  Now, we need to make a Button to Add the Point, and then make a TABLE to add points with. */}
                        <Button onClick={() =>{AddCurrentPoint();}} >Add Values</Button>

                    </Col>


                    <Col>
                        <h2>Graph</h2>
                        <div>{errorMessage}</div>

                        
                    </Col>


                </Row>


            </Container>

        </div>







    )








}

export default Charter