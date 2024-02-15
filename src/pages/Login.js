import { AccountCircleRounded,Lock} from '@mui/icons-material';
import {Grid, Paper, TextField, Button, Stack} from '@mui/material'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const LoginPage = ()=>{
  const navigate = useNavigate();
    const paperStyle = {padding :20, height : '60vh', width : 400, margin : '100px auto'}
    const avatarStyle = {width : 100, height : 100}
    const [formData,setFormData] = useState({username:'', password:'',});
    const [errors, setErrors] = useState({ username: '',password: '',});
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    
        // Reset the error for the current field
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '',
        }));
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate the form fields
        const newErrors = {};
        if (formData.username.trim() === '') {
          newErrors.username = 'Username is required';
        }
        if (formData.password.trim() === '') {
          newErrors.password = 'Password is required';
        }
    
        if (Object.keys(newErrors).length > 0) {
          // Set errors and prevent form submission
          setErrors(newErrors);
        } else {
          // Form is valid, you can perform further actions (e.g., submit the form)
          console.log('Form submitted:', formData);
          let response = await fetch('http://localhost:3030/login',{
            method : 'POST',
            headers : {
              'Content-Type': 'application/json',
            },
            body : JSON.stringify(formData)
          });
          // response = await response.json();
          if(response.status===401) {
            alert("Login Failed")
          }
          else{
            const data = await response.json();
            console.log('Login successful:', data);
            if(data.designation === 'admin'){
              navigate('/admin/' + data.adminId);
            }
            else{
              navigate('/doctor/' + data.doctorId);
            }
          }
        }
      };
    return(
        <>

            <Grid container >
                <Paper elevation = {10} style={paperStyle}>
                    <Grid align = 'center' marginBottom={5}>
                        <img src = "/img/hospital-icon-.png" style={avatarStyle}></img>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <Stack direction="column" spacing={4}>
                            <Stack direction="row"spacing ={2}>
                                <AccountCircleRounded sx={{fontSize : 40}}></AccountCircleRounded>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    error={!!errors.username}
                                    helperText={errors.username}
                                />
                            </Stack>
                        <Stack direction="row" spacing={2}>
                            <Lock sx={{fontSize : 40}}></Lock>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                        </Stack>
                        <Grid align = "center">
                            <Button type="submit" variant="contained" color="primary" sx = {{width : 100}}>
                               Submit
                            </Button>
                        </Grid>
                        
                        </Stack>
                    </form>
                </Paper>
            </Grid>
        </>
    );
}
export default LoginPage;