import { useState } from "react";
import userData from '../../Users.json';
import BarChart from "../../components/chart/BarChart";
import "./ReportScreen.scss"

const ReportScreen = () =>{

    const [data] = useState(userData);
    const [barGraphData,setBarGraphData] = useState([]);

    const handleChange = (value) =>{
        if(value === "locality"){
            let initial = [];
            data.forEach(element => {
                const initialValues = {}
                initialValues.key = element.locality;
                initialValues.value = 0
                initial.push(initialValues);
            });
        }
        else{
            const initialValues = [
                {
                    key : "13-18",
                    value : 0
                },
                {
                    key : "18-25",
                    value : 0
                },
                {
                    key : "25+",
                    value : 0
                }
            ]
            data.forEach(element => {
                if(element.Age >= 13 && element.Age <= 18){
                    initialValues[0].value = initialValues[0].value + 1;
                }
                else if(element.Age >= 18 && element.Age <=25){
                    initialValues[1].value = initialValues[1].value + 1;
                }
                else if(element.Age > 25){
                    initialValues[2].value = initialValues[2].value + 1;
                }
            });
            setBarGraphData(initialValues);
        }
        
        // console.log(initialValues);
    }

    return(
        <div className="report-container">
            <div className="drop-down">
                <p>Search by</p>
                <select id="filter" className="select" name="profession" onChange={(e) => {handleChange(e.target.value)}}>
                    <option defaultValue="">Select filter</option>
                    <option value="age">By age</option>
                    <option value="locality">By Locality</option>
                    <option value="group">By group</option>
                    <option value="profession">By Profession</option>
                </select>
            </div>
            <div className="chart">
                {barGraphData && barGraphData.length > 0 && <BarChart data={barGraphData}/>}
            </div>
        </div>
    )
}

export default ReportScreen;