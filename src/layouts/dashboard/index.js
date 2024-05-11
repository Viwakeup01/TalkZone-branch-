import React, { useState } from "react";
import { Avatar, Box, Divider, IconButton, Switch } from "@mui/material"
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico"
import { Stack } from "@mui/material";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";

const DashboardLayout = () => {

  const theme=useTheme();
  const [selected,setselected] = useState(0);
  
  console.log(theme);
  return (
    <>
      <Box
      p={2}
       sx={{backgroundColor:theme.palette.background.paper, boxShadow:"0px 0px 2px rgba(0,0,0,0.25)",height:"100vh",width:100}}>
      
      <Stack direction="column" alignItems={"center"} justifyContent="space-between" sx={{height:"100%"}} spacing={4}>
      <Stack alignItems="center" spacing={4}>
      <Box sx={{
        backgroundColor: theme.palette.primary.main,
        height:64,
        width:64,
        borderRadius:1.5,
      }}>
     
     <img src={Logo} alt={"TalkZone Logo"} />
      </Box>
      <Stack sx={{width:"max-content"}} direction="column" alignItems="center" spacing={4}>
      {Nav_Buttons.map((el) =>(
        el.index === selected ? 
        <Box p={1}
        sx={{backgroundColor:theme.palette.primary.main,borderRadius:1.5}}>
           <IconButton sx={{width:"max-content",color:"white"}} key={el.index}>{el.icon}</IconButton>
        </Box>
         :<IconButton onClick={() =>  {
            setselected(el.index);
         }} 
         sx={{width:"max-content",color:"black"}} key={el.index}>{el.icon}</IconButton>

      ))}
      <Divider sx={{width:"50px"}}/>
      {selected === 3 ? 
      <Box 
      p={1}
      sx={{backgroundColor:theme.palette.primary.main,borderRadius:1.5}}>
         <IconButton sx={{width:"max-content",color:"white"}}>
        <Gear/>
      </IconButton>
      </Box>

      :<IconButton onClick={() => {
        setselected(3);;
      }}
      sx={{width:"max-content",color:"black"}} 
      >
      <Gear/>
    </IconButton>
    }
      </Stack>
      </Stack> 
      <Stack>
      <Switch defaultChecked />
      <Avatar src={faker.image.avatar()} />
      </Stack>  
      </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
