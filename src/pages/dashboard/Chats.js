import React from 'react';
import { Box, IconButton, Typography,Stack, alpha } from '@mui/material';
import { CircleDashed } from 'phosphor-react'; 
import {styled} from "@mui/material/styles";


const Search=styled("div")(({theme}) => ({
    position:"relative",
    borderRadius:20,
    backgroundColor:alpha(theme.palette.background.paper,1),
    marginRight:theme.spacing(2),
    marginLeft:0,
    width:"100%",

}));

const Chats = () => {
  return (
    <Box sx={{
      position: "absolute", // Changed from 'relative' to 'absolute'
      top:0,
      height: "100vh",
      width: 320,
      backgroundColor: "#F8FAFF",
      boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      left: "100px",
      //top:0, // Adjust this value to match the width of your sidebar
    }}>

        <Stack p={3}>
        <Stack direction="row" alignItems={"center"} justifyContent="space-between">
        <Typography variant='h5'>Chats</Typography>
        <IconButton>
            <CircleDashed/>
        </IconButton>
       </Stack>
        </Stack>
       
         
    </Box>
  );
}

export default Chats;
