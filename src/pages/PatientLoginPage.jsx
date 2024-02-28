import { AccountCircleRounded, Lock, Phone, } from "@mui/icons-material";
import { Button, Grid, Paper, Stack, TextField } from "@mui/material";

import { useState } from "react";

const PatientLoginPage = () => {
    const paperStyle = {padding :20, height : '60vh', width : 400, margin : '100px auto'}
    const avatarStyle = {width : 100, height : 100}
    const [formData, setFormData] = useState({patientId: '',mobile: '',password: '',});
    const [errors, setErrors] = useState({patientId: '',mobile: '',password: '',});
    
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
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate the form fields
        const newErrors = {};
        if (formData.patientId.trim() === '') {
          newErrors.patientId = 'Patient ID is required';
        }
        if (formData.mobile.trim() === '') {
          newErrors.mobile = 'Mobile number is required';
        }
        if (formData.password.trim() === '') {
            newErrors.password = 'Password is required';
        }
        if (!/^[A-Z]/.test(formData.password)) {
          newErrors.password = 'Password must start with a capital letter';
        } else if (formData.password.length < 8) {
          newErrors.password = 'Password should have a minimum length of 8 characters';
        } else if (!/\d/.test(formData.password)) {
          newErrors.password = 'Password should contain at least one digit';
        } else if (!/[\W_]/.test(formData.password)) {
          newErrors.password = 'Password should contain at least one special character';
        }
    
        if (Object.keys(newErrors).length > 0) {
          // Set errors and prevent form submission
          setErrors(newErrors);
        } else {
          // Form is valid, you can perform further actions (e.g., submit the form)
          console.log('Form submitted:', formData);
        }
      };
    
    return (
        <>
            <Grid container >
                <Paper elevation = {10} style={paperStyle}>
                    <Grid align = 'center' marginBottom={3}>
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
                            <Stack direction = "row" spacing={2}>
                                <Phone sx={{fontSize : 40}}></Phone>
                                <TextField
                                    fullWidth
                                    label="Mobile Number"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    error={!!errors.mobile}
                                    helperText={errors.mobile}
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
export default PatientLoginPage;