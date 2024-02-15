
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function DoctorPage(){
    const [doctorData, setDoctorData] = useState({});
    const param = useParams();
    useEffect(()=>{
        fetch('http://localhost:3030/doctor/' + param.id,{method: 'GET'})
        .then(res=>res.json())
        .then(res=>{
            setDoctorData(res);
        })
        if(!doctorData) {
            alert("No data found!!!")
        }
        else{
            console.log(doctorData);
        }
    },[]);


    return (
        <>
            {/* <h1>{doctorData.firstname}</h1>
            <h1>{doctorData.lastname}</h1> */}
        </>
    )
}