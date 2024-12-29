import { Box } from '@mui/material'
import React from 'react'
import img from "../assets/logIMG2.avif"

function FrontPage() {
  return (
    <Box
      sx={{
        height: "100vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${img})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          height: "500px", 
          width: "600px", 
          marginTop:"10px",
          '@media (max-width:600px)': {
            height: '50%',
            width: '90%', 
          },
          '@media (max-width:400px)': {
            height: '40%', 
            width: '95%',  
          }
        }}
      />
    </Box>
  )
}

export default FrontPage
