import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { TextField } from '@mui/material';
import LoginPage from './LoginPage';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../redux/slices/TaskSlice';

function HeaderSection() {
  const isloading = useSelector((state)=>state?.app?.isLoading)
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
      return state?.app?.loggedInUser
    });
    const navigate = useNavigate();
    const handleLogin =()=>{
        navigate('/login');
    }
    const handleSignUp =()=>{
        navigate('/signUp');
    }
    const handleLogout =()=>{
      dispatch(logOutUser({userData}))
      navigate('/login');
  }
    const location = useLocation();
  return (
    // <>Hello</>
    <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <IconButton ><EventNoteIcon /></IconButton>
              <div>
              <Button color="inherit" disabled={location.pathname !== "/login" && location.pathname !== "/"} sx={{ textTransform: "none",color:"blue" }} variant="contained" size="small" onClick={handleLogin}>Login</Button>
              <Button color="inherit" disabled={location.pathname !== "/login" && location.pathname !== "/"} sx={{ textTransform: "none" }} onClick={handleSignUp}>Signup</Button>
              <Button color="inherit" disabled={location.pathname !== "/tasks"} sx={{ textTransform: "none" }} onClick={handleLogout}>Logout</Button>
              </div>
            </Toolbar>
          </AppBar>
          <Box sx={{ width: '100%' }}>
          {isloading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </Box>
        </Box>
  )
}

export default HeaderSection
