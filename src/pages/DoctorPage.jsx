
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";




export default function DoctorPage(){
    const [doctorData, setDoctorData] = useState({firstNamec: '', lastName : ''});
    const param = useParams();
    useEffect(()=>{
        fetch('http://localhost:3030/doctor/' + param.id,{method: 'GET'})
        .then(res=>res.json())
        .then(res=>{
            setDoctorData(res);
        })
        if(doctorData === null) {
            alert("No data found!!!")
        }
        
    },[]);


    return (
        <>
            
            
        </>
    )
}