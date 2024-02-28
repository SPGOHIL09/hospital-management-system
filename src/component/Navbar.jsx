
import {Grid,AppBar,Box,Toolbar,Stack,Typography,Link } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import React from 'react';

const Navbar = ()=>{
    return (
        <>
            <Grid container >
                <Grid item xs = {12} sx = {{minHeight : 30,height : 30}}>
                    <AppBar position='static' sx ={{minHeight : 30, height : 30 ,maxHeight : 30}} >
                            <Toolbar sx = {{minHeight : 30, height : 30}} disableGutters>
                                <Box component= "div" sx = {{flexGrow : 1, }}>  </Box>
                                <Stack direction="row" spacing={3}>
                                <Typography component="div"  sx = {{height : 55}}><Link href = "/home" underline='none' sx ={{color : 'white'}}>Online Payment</Link></Typography>
                                <Typography component="div" sx = {{height : 55,}}><Link href = "" underline='none' sx ={{color : 'white'}}>Emergency Number</Link></Typography>
                                <Typography component="div" sx = {{height : 55}}><Link href = "" underline='none' sx ={{color : 'white'}}>Book an Appointment</Link></Typography>
                                <Typography component="div" sx = {{height : 55, paddingRight : 5}}><Link href = "" underline='none' sx ={{color : 'white'}}>Portal</Link></Typography>
                                </Stack>
                                
                            </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
            <MainNavbar/> 
        </>
    );
}
const MainNavbar = ()=>{
    return(
        <> 
            <Grid container >
                <Grid item xs = {12}>
                    <AppBar position='static' sx = {{backgroundColor : 'white', boxShadow : 1}} >
                            <Toolbar  disableGutters>
                                <Box component= "div" sx = {{flexGrow : 1, }}></Box>
                                <Stack direction="row" spacing={3}>
                                <Link href = "/" underline='none'><HomeRoundedIcon sx ={{color : 'black',fontSize : 30}}></HomeRoundedIcon></Link>
                                <Typography component="div" variant='subtitle1' sx ={{borderRight : 1,paddingRight : 2 ,borderRightColor : 'black'}}><Link href = "" underline='none' sx ={{color : 'black'}}>About Us</Link></Typography>
                                <Typography component="div" variant='subtitle1' sx ={{borderRight : 1, paddingRight : 2,borderRightColor : 'black'}}><Link href = "" underline='none' sx ={{color : 'black'}}>Our Specialties</Link></Typography>
                                <Typography component="div" variant='subtitle1' sx ={{borderRight : 1, paddingRight : 2,borderRightColor : 'black'}}><Link href = "" underline='none' sx ={{color : 'black'}}>Our Dcotors</Link></Typography>
                                <Typography component="div" variant= 'subtitle1'sx = {{ paddingRight : 5}}><Link href = "" underline='none' sx ={{color : 'black'}}>Contact </Link></Typography>
                                </Stack>
                                
                            </Toolbar>
                    </AppBar>
   
                </Grid>
            </Grid>
        </>
    );
}
export default Navbar;