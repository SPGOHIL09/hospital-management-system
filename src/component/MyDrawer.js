import { Box, IconButton, Typography,Drawer } from "@mui/material";
import { useState } from "react";

const MyDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      ></IconButton>
        <Drawer anchor ='left' open = {isDrawerOpen} onClose = {()=> setIsDrawerOpen(false)}>
                <Box p = {2} width="250px" textAlign='center' >
                    <Typography variant="h6" component='div'>
                            Side Panel
                    </Typography>
                </Box>
        </Drawer>
    </>
  );
};
export default MyDrawer;
