import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin, isSignUp } from '../redux/slices/TaskSlice';
function SignUp() {
  const [open, setOpen] = useState(false);
  const [validation,setValidation] = useState("")
  const [credentialsList,setCredentialsList]= useState([])
  const [credentials,setCredentials]= useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const totalUserList = useSelector((state)=>state?.app?.getusersList)
    useEffect(()=>{
      dispatch((isLogin()))
    },[])
    useEffect(()=>{
      setCredentialsList(totalUserList)
    },totalUserList)

   const handleSignUp =async()=>{
    const value =[...credentialsList,credentials]
    setCredentialsList(value)
   
    const isAnyFieldEmpty = Object.values(credentials).some(value => value === "");
    
    if(!isAnyFieldEmpty){
    try {
      dispatch(isSignUp(value))
        navigate('/login');
        
    } catch (error) {
      setValidation(error?.response?.data?.error?.details[0]?.message)
      setOpen(true);
    }
  }else{
    setOpen(true);
  }
   }
   const handleLogin =()=>{
    navigate('/login');
   }
   const handleInput =(e)=>{

    const { name, value } = e.target;
    setCredentials((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
   }
   const handleClose = (event, reason) => {
    setValidation("")
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
   const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
   
  return (
    <Box sx={{ flexGrow: 1 }}>
         
          <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column" ,alignItems: "center",}}>
          <Typography sx={{ display:"flex",justifyContent:"center",mt:"5vh", fontWeight:"bold"}}>Signup</Typography>
          <Box sx={{p:"10px",display:"flex",justifyContent:"center",flexDirection:"column" ,border: "1px solid",borderColor:"blue", width:"40%",alignItems: "center"}}>
          <TextField
           sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        }
      }} id="outlined-basic" name="firstName" label="First Name" variant="outlined" onChange={(e)=>{handleInput(e)}} />
          <TextField sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        },
      }} id="outlined-basic" name="lastName" label="Last Name" variant="outlined" onChange={(e)=>{handleInput(e)}}/>
      <TextField sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        },
      }} id="outlined-basic" name="email" label="Email" variant="outlined" onChange={(e)=>{handleInput(e)}}/>
      <TextField sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        },
      }} id="outlined-basic" name="password" label="Password" variant="outlined" onChange={(e)=>{handleInput(e)}}/>
      <TextField sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        },
      }} id="outlined-basic" name="confirmPassword" label="Confirm Password" variant="outlined" onChange={(e)=>{handleInput(e)}}/>
          <Button onClick={handleSignUp} variant="contained" sx={{mt:"10px",width:"100%"}}>Signup</Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Already have an account?</Typography>
          <Button sx={{textTransform: "none"}} onClick={handleLogin}>Login</Button>
        </Box>
          {/* <Button variant="contained" sx={{textTransform: "none"}}>Signup with Google</Button> */}
          </Box>
          </Box>
          <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={validation ? validation : "No datas found"}
        action={action}
      />
        </Box>
  )
}

export default SignUp
