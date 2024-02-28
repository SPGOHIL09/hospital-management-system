import { Grid,Container, Box, Paper, Typography } from "@mui/material";
import ImageCarousel from "../component/ImageCarousel";
import { red } from "@mui/material/colors";
import SpecialtiesCarousel from "../component/SpecailtiesCarousel";

const HomePage = () => {
  return (
    <>
        <ImageCarousel/>
        <Grid container >
                <Grid xs = {3} sx={{marginTop : 8,marginRight : 5}} >
                <Container sx={{flexGrow : 1}}>  
                        <img src = "/img/carousel/hospital_2.jpeg" style={{height : 400,width : 500, borderRadius : 5,}}></img>
                </Container>
                </Grid>
                <Grid xs = {7}sx={{marginTop : 8, marginLeft :15}}>
                    <Container >
                        <Paper square = {false} variant="elevation" elevation={3} >
                                <Typography variant="h3" sx = {{paddingLeft : 4,paddingTop : 4}}>Hospital Name</Typography>
                                <Typography sx = {{ fontSize : 20, padding : 4}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales lorem id eros mollis, eget sollicitudin lectus laoreet. Integer in accumsan elit. Phasellus dolor dui, finibus at diam sit amet, porta elementum nunc. Curabitur sollicitudin diam quis metus blandit auctor ac id ligula. Etiam at neque dictum justo laoreet tincidunt. Proin eget consectetur velit. Mauris a enim augue.
                                    Donec egestas orci quis interdum cursus. Morbi viverra mollis aliquet. Donec consequat ante quis tempor condimentum. Sed congue in velit at interdum. Proin faucibus ultricies nisi, nec convallis mauris laoreet quis. Duis sit amet aliquam mi. Fusce pharetra lorem non risus posuere pulvinar. Sed in semper enim, sed fermentum enim. Donec sed vestibulum ligula, nec varius elit. Nullam dapibus odio eu sodales tristique.
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In lobortis ullamcorper sapien, eu placerat eros tempor sit amet. Aenean ac nulla ex.
                                </Typography>
                        </Paper>
                    </Container>
                </Grid>
        </Grid>
        
        <SpecialtiesCarousel/>
    </>
  );
};

export default HomePage;
