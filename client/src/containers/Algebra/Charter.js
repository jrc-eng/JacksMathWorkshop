import React,{useEffect} from "react"
import Jumbo from "../../components/Jumbo"

import NavBar from "../../components/NavBar"
import {Container, Col, Row} from "react-bootstrap"

import CharterTable from "../../components/CharterTable"

const Charter = () =>{

    const [errorMessage, setErrorMessage] = React.useState("*");

    const [xValues, setXValues] = React.useState([0]);

    const [yValues, setYValues] = React.useState([0]);

    const [numberOfPoints, setNumberOfPoints] = React.useState(1);



        return(<div>
            <Jumbo></Jumbo>
            <NavBar></NavBar>

            <h1>Table to Graph Charter</h1>


            <Container>
                <Row>
                    <Col>
                        <h2>Insert Values Here.</h2>
                        <CharterTable xValue="X Points" yValue="Y Points"></CharterTable>
                        

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