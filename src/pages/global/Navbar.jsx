import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ColorModeContext,tokens } from '../../themes';
import { Box, IconButton, useTheme,Typography } from '@mui/material';
import {InputBase} from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useUser } from '../../UserContext';


const Navbar = () => {
  const theme = useTheme();
  const {user} = useUser();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  const handleLogin = () =>{
    navigate('/login')
  }
  return (
    <Box  display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" 
      borderRadius="3px" >
         <Typography variant='h2'
         sx={{
            background: "linear-gradient(90deg, #b30000, #004d99)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor: "transparent"
         }}
         >
                BlogBreeze
              </Typography>
      </Box>
      {user && <Box
        display="flex"
        borderRadius="3px"
        width="300px"
        border="1px solid"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search a Blogger" fullWidth/>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>}
      <Box display="flex">
        <Box>
        </Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon/>
          ):(
            <LightModeOutlinedIcon/>
          )}
          
        </IconButton>
        {/* <IconButton>
          <PersonOutlinedIcon/>
        </IconButton> */}
        {!user && <IconButton onClick={handleLogin}>
          <LoginOutlinedIcon/>
        </IconButton>}
        {user && <IconButton onClick={handleLogin}>
          <LogoutOutlinedIcon/>
        </IconButton>}
        {/* <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton> */}
        
      </Box>
    </Box>
  )
}

export default Navbar
