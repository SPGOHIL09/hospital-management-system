import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom";
import Topbar from "../component/dashboard_comp/Topbar";
import Admin_Sidebar from "../component/dashboard_comp/Sidebar";
import { Box } from "@mui/material";




export default function AdminPage(){
    const [adminData, setAdminData] = useState([]);
    const param = useParams();
    useEffect(()=>{
        fetch('http://localhost:3030/admin/' + param.id,{method: 'GET'})
        .then(res=>res.json())
        .then(res=>{
            setAdminData(res);
        })
        if(adminData === null) {
            alert("No data found!!!")
        }
        
    },[]);
    return (
        <>
          
        
        <Box  display='flex'>
            <Box display='flex'><Admin_Sidebar admin = {adminData}/></Box>
            <Box >
                <Topbar/>
                <Outlet/>
                </Box>
        </Box>
        
         

        </>
    )
}