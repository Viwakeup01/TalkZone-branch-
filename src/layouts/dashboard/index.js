import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const DashboardLayout = () => {

  const theme=useTheme();
  
  console.log(theme);
  return (
    <>
      <Box sx={{backgroundColor:theme.palette,height:"100vh",widht:100}}>

      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
