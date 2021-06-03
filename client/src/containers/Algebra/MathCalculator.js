import React,{useEffect} from "react"


import Jumbo from "../../components/Jumbo"

import NavBar from "../../components/NavBar"
import {Container, Col, Row} from "react-bootstrap"

import {IconButton, TextField, Tooltip, Button} from "@material-ui/core";

const MathCalculator =()=>{

    const [value, setValue] = React.useState(0);

    const [displayValue, setDisplayValue] = React.useState("0");

    const [errorText, setErrorText] = React.useState("");
    const [prevOp, setPrevOp] = React.useState("");
    const [prevValue, setPrevValue] = React.useState(0);

    //Dead End is my END ALL INPUT Variable.
    //It comes into play in the event the user gets an error.
    //In the event of an error, only CLEARING the output can fix the situation.
    const [deadEnd, setDeadEnd] = React.useState(false);

    //An Operator was picked.  We need to act accordingly.
    const selectOperator = (op) =>{

        if(deadEnd)
        {
            return;
        }

        

        console.log("selectOperator: " + op + " selected");

        let fv = performCalculation();

        console.log("selectOperator: " + fv + " is value of fv");

        setPrevValue(fv);
        setPrevOp(op);

        setValue(0);
        if(!deadEnd)
        setDisplayValue("0")


    }

    const performCalculation = () =>{

        let finalValue = prevValue;
        switch(prevOp)
        {
            case "+":
                finalValue += value;
            break;
            case "-":
                finalValue -= value;
            break;
            case "*":
                finalValue *= value;
                break;
            case "/":
                if(value===0)
                {
                    console.log("DIVIDE BY ZERO CASE REACHED!");
                    setErrorText("Error.  Division By Zero");
                    setDeadEnd(true);
                }
                else
                {
                    finalValue /= value;

                }

            break;



        }

        return finalValue;
    }

    //A Digit was picked.  We need to change the current Number and displayed number accordingly.
    const selectDigit = (digit) =>{


        //If Digit is NOT a Number, we bail.  Ohhhh, no you don't!
        if(typeof digit != "number" || deadEnd)
        {
            return;
        }

        console.log("selectDigit: " + digit + " selected");

        let currentValue = value;

        currentValue *= 10;

        currentValue += digit;

        setValue(currentValue);

        setDisplayValue(currentValue + "")


    }

    //They hit the Calculate Button.  Now is the time to find the answer and display it.
    const calculate = () =>{

        if(deadEnd)
        {
            return;
        }

        let fv = performCalculation();
        console.log("calculate: " + fv + " is value of fv");

        if(!deadEnd)
        {
            setDisplayValue(fv + "");
        }
        else
        {
            setDisplayValue("ERR!");
        }
        

        setPrevValue(fv);

    }

    //Clear.  Everything goes back to normal.
    const clear = () =>{

        //Clear it all.


        setValue(0);
        setDisplayValue("0");
        setDeadEnd(false);

        setErrorText("");

    }

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
                                    <Button variant="contained" onClick={() =>{

                                        selectDigit(7);
                                    }}>7</Button>
                                </td>
                                <td>
                                    <Button variant="contained" onClick={() =>{

                                    selectDigit(8);
                                    }}>8</Button>
                                </td>
                                <td>
                                    <Button variant="contained" onClick={() =>{selectDigit(9);}}>9</Button>
                                </td> 
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="contained" onClick={() =>{selectDigit(4);}}>4</Button>
                                </td>
                                <td>
                                    <Button variant="contained" onClick={() =>{selectDigit(5);}}>5</Button>
                                </td>
                                <td>
                                    <Button variant="contained" onClick={() =>{selectDigit(6);}}>6</Button>
                                </td> 
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="contained" onClick={() =>{selectDigit(1);}}>1</Button>
                                </td>
                                <td>
                                    <Button variant="contained" onClick={() =>{selectDigit(2);}}>2</Button>
                                </td>
                                <td>
                                    <Button variant="contained" onClick={() =>{selectDigit(3);}}>3</Button>
                                </td> 
                                <td></td>
                            </tr>
                            <tr>

                                <td>
                                    <Button variant="contained" onClick={() =>{selectDigit(0);}}>0</Button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>

                            </tr>

                            <tr>

                                <td>
                                    <Button variant="contained" onClick={() =>{selectOperator("+");}}>+</Button>
                                </td>
                                <td>
                                    <Button variant="contained" onClick={() =>{selectOperator("-");}}>-</Button>
                                </td>
                                <td>
                                    <Button variant="contained" onClick={() =>{selectOperator("*");}}>*</Button>
                                </td>
                                <td>
                                    <Button variant="contained" onClick={() =>{selectOperator("/");}}>/</Button>
                                </td>

                            </tr>

                            <br/>
                            <tr>
                                <td>
                                <Button variant="contained" onClick={() =>{calculate();}}>GO</Button>
                                
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                <Button variant="contained" onClick={() =>{clear();}}>CLEAR</Button>
                                </td>
                            </tr>

                        </table>

                    </Col>
                    <Col>
                        <h2>Output</h2>

                        <h3>{displayValue}</h3>

                        <h5>{errorText}</h5>

                    </Col>
                </Row>
            </Container>
        
        </div>





    )





}

export default MathCalculator