import React from 'react'
import {Box,Typography,useTheme,Button,IconButton} from "@mui/material";
import { tokens } from '../../themes';
import img from '../../assets/blog.png'
import user from '../../assets/bloguser1.JPG'
import PostAddIcon from '@mui/icons-material/PostAdd';
import {useNavigate} from "react-router-dom"

const BlogItem = () =>{
    const theme= useTheme();
    const colors= tokens(theme.palette.mode);
    const navigate = useNavigate();

    const handleProfile = () =>{
        navigate("/profile");
    }

    const handleReadMore = () =>{
        navigate("/blogdetail");
    }

    return(
        <>
            <hr style={{
                width:"790px",
                display:"flex",
                justifyContent:"center"
            }}/>
        <Box display="flex" >
            <Box >
                <img src={img} alt="" 
                style={{
                    width:"400px",
                    height:"250px",
                    borderRadius:"20px"
                }}
                />
            </Box>
            <Box width="400px"
                    height="250px"
                    borderRadius="20px" 
                    sx={{
                        backgroundColor :`${theme.palette.mode === "dark" ? "#000000" :"#ffffff" }`
                    }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    marginLeft="10px"
                    >
                <Box marginTop="10px" marginLeft="10px">
                <Typography variant='h5' sx={{
                    display:"flex",
                }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, corrupti!
                </Typography>
                </Box>
                <Box display="flex" alignItems="center"  marginLeft="10px">
                <img src={user} alt="" width="50px"
                height="50px" style={{
                    borderRadius:"50%"
                }}/>
                <Box display="flex"
                    flexDirection="column"
                    marginLeft="10px">
                <Typography variant='h6'>Devyang Saini</Typography>
                <Typography variant='h6' color >Time</Typography>
                </Box>
                <Box display="flex" flexDirection="column" ml="40px">
                    <Button variant='contained' sx={{
                        m:"5px"
                    }}>
                        Follow
                    </Button>
                    <Button onClick={handleProfile} variant='contained'  sx={{
                        m:"5px"
                    }}>
                    View Profile
                    </Button>
                </Box>
                </Box>
                <Box  marginLeft="10px">
                <Typography variant='h6'>
                    Category
                    <Button sx={{
                        color:"#004d99"
                    }}>
                        Fashion
                    </Button>
                </Typography>
            </Box>
                <Box  marginLeft="10px">
                <Typography variant='h6'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, minus? 
                    <Button onClick={handleReadMore} sx={{
                        color:"#b30000"
                    }}>
                        Read more
                    </Button>
                </Typography>
            </Box>
            </Box>
        </Box>
        </>
    )
}

const Blogs = () => {
    const theme= useTheme();
    const colors= tokens(theme.palette.mode);
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/addblog");
    }

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
        <Box>
        <Typography variant='h2' sx={{
            margin:"10px"
        }}>
                All Blogs
            </Typography>
            </Box>
            <Box display="flex">
            <Button variant='contained' sx={{
                        m:"5px",
                        backgroundColor:"#004d99",
                        '&:hover':{
                            // backgroundColor:"#004d99",
                        }
                    }}>
                        Fashion
                    </Button>
                    <Button variant='contained' sx={{
                        m:"5px",
                        backgroundColor:"#6c036c",
                        
                    }}>
                        Coding
                    </Button>
                    <Button variant='contained' sx={{
                        m:"5px",
                        backgroundColor:"#ab0505"
                    }}>
                        Sports
                    </Button>
                    <Button variant='contained' sx={{
                        m:"5px",
                        backgroundColor:"#026402"
                    }}>
                        News
                    </Button>
                    <Button variant='contained' sx={{
                        m:"5px",
                        backgroundColor:"#c57f00"
                    }}>
                        Education
                    </Button>
                    <IconButton onClick={handleClick} sx={{
                       width:"50px",
                       height:"50px",
                       position:'fixed',
                       right:"35px",
                       border:"2px solid",
                       marginTop:"-40px"
                    }} >
                        <PostAddIcon sx={{
                            width:"30px",
                            height:"30px",
                        }}/>
                    </IconButton>
            </Box>
        
        <Box height="500px" sx={
            {
                overflowY:"scroll",
                width:"100vw",
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }
        }>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
        </Box>
    </Box>
  )
}

export default Blogs

