import React from 'react'
import { tokens } from '../themes'
import {Box, Typography, useTheme,Button} from '@mui/material'
import img from '../assets/blog.png'
import user from '../assets/bloguser1.JPG'

const Random_Blog = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <Box display="flex" m="2% 0 0 10% ">
        <img src={img} alt="random_blog" 
        style={{
            width:"700px",
            height:"350px",
            borderRadius:"20px"
        }}/>
        <Box width="600px"
                height="200px"
                sx={{
                    backgroundColor :`${theme.palette.mode === "dark" ? "#000000" :"#ffffff" }`
                }}
                padding="20px"
                zIndex="1"
                boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
                borderRadius="20px"
                marginLeft="-50px"
                marginTop="200px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                >
            <Typography variant='h4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Typography>
            <Box display="flex">
                <img src={user} alt="" width="50px" height="50px"style={{
              backgroundPosition: "center 20%",
              borderRadius:"50%"
                }} />
                <Box display="flex"
                    flexDirection="column"
                    marginLeft="10px">
                <Typography variant='h6'>Devyang Saini</Typography>
                <Typography variant='h6' color >Time</Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant='h6'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, minus? 
                    <Button sx={{
                        color:"#b30000"
                    }}>
                        Read more
                    </Button>
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Random_Blog
