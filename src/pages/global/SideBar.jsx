import React from 'react'
import { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography,useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../themes';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

const Item =({ title, to, icon, selected, setSelected}) =>{
  const theme=useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
    <MenuItem
    active={selected === title}
    style={{color: colors.grey[100]}}
    onClick={()=>setSelected(title)}
    icon={icon}
    >
       
    <Typography variant='h6'>{title}</Typography>
    </MenuItem>
    </Link>
  )
}


const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const[selected, setSelected] = useState("Dashboard");
  return (
    <Box 
    sx={{
      "& .ps-sidebar-root": {
          background: `${colors.primary[400]} !important`,
          border:"none",
          position:"fixed",
          top:"30%",
          right:"1%",
          borderRadius:"20px",
          zIndex:"10"
      },
      "& .ps-sidebar-container": {
          background: `${theme.palette.mode === "dark" ? "#000000" : "#ffffff"} !important`,
          boxShadow:`${theme.palette.mode === "dark" ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "0px 4px 8px rgba(0, 0, 0, 0.2)"} !important`,
          height: "auto !important",
          borderRadius:"20px"
      },
      "& .ps-menu-button": {
      },
      "& .ps-menu-button:hover":{
          color:"#b30000 !important",
          background:"none !important"
      },
      "& .ps-menu-button.active":{
        color: "#868dfb !important",
    },
  }}
    >
      <Sidebar collapsed={isCollapsed}
      width={isCollapsed ? 80 : 250}
      >
        <Menu iconShape="square">
         {/* Logo And Menu Icons */}
          <MenuItem
          onClick={()=>setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon/> :undefined}
          style={{
            color: colors.grey[100],
            marginTop:"10px"
          }}
          >
            {!isCollapsed && (
              <Box 
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              >
              <IconButton
              onClick={()=> setIsCollapsed(!isCollapsed)}
              >
                <MenuOutlinedIcon />
              </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
              <Item 
              title="Home" to="/blogbreeze" icon={<HomeOutlinedIcon/>}  selected={selected} setSelected={setSelected}
              />
              <Item 
              title="About Us" to="/about" icon={<InfoOutlinedIcon/>}  selected={selected} setSelected={setSelected}
              />
              <Item 
              title="Blogs" to="/blogs" icon={<MenuBookOutlinedIcon/>}  selected={selected} setSelected={setSelected}
              />
              <Item 
              title="Contact Us" to="/contact" icon={<ContactsOutlinedIcon/>}  selected={selected} setSelected={setSelected}
              />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SideBar
