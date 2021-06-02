import React,{useEffect} from "react"


const CharterTable = (props) =>{


    const [numberOfPoints, setNumberOfPoints] = React.useState(1);

    const [xValues, setXValues] = React.useState([0,1]);

    const [xYalues, setYValues] = React.useState([0,1]);


    return(
        <div>
            <table>
                <th>
                    <td>{props.xValue}</td>
                    <td>{props.yValue}</td>
                </th>





            </table>





        </div>


    )


    const renderTableRows = () =>{
        


    }

}

export default CharterTable