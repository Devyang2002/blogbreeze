import React from 'react'
import {Box,Typography,useTheme,Button} from "@mui/material";
import { tokens } from '../themes';
import img from '../assets/blog.png'
import user from '../assets/bloguser1.JPG';
import {useNavigate} from "react-router-dom"

const PopularBlogs = () =>{
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
                marginLeft:"6%"
            }}/>
        <Box display="flex" paddingTop="5px" >
            <Box sx={
                {
                    marginLeft:"5%"
                }
            }>
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
                    <Button variant='contained' onClick={handleProfile}  sx={{
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

const PopularBloggers = () =>{
    const navigate = useNavigate();

    const handleProfile = () =>{
        navigate("/profile");
    }
    return (
        <Box display="flex" alignItems="center" width="400px" justifyContent="center" padding="7px">
            <img src={user} alt="" width="50px"
                height="50px" style={{
                    borderRadius:"50%"
                }} />
            <Typography variant='h6' sx={{
                marginLeft:"10px"
            }}>
                Devyang Saini
            </Typography>
            <Button variant='contained' sx={
                {
                    marginLeft:"10px"
                }
            }>
                        Follow
                    </Button>
                    <Button variant='contained' onClick={handleProfile} sx={
                {
                    marginLeft:"15px"
                }
            }>
                    View Profile
                    </Button>
        </Box>
    )
}

const Popular_Blog = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box marginBottom="20px">
        <Typography variant='h2' sx={{
            marginTop:"5%",
            marginLeft:"5%",
            marginBottom:"3%"
        }}>
            Popular Blogs
        </Typography>
        <Box display="flex" >
        <Box width="900px" height="600px" sx={{
            overflowY:"scroll"
        }}>
            <PopularBlogs/>
            <PopularBlogs/>
            <PopularBlogs/>
            <PopularBlogs/>
            <PopularBlogs/>
        </Box>
        <Box border="2px solid" borderRadius="20px" marginLeft="40px" width="450px"  height="600px"  padding="10px" >
            <Box border="2px solid" height="570px" borderRadius="20px" display="flex" flexDirection="column" sx={{
            overflowY:"scroll"
        }}>
            <Typography variant='h2' sx={{
                display:"flex",
                justifyContent:"center"
            }}>
                Popular Bloggers
            </Typography>
            <PopularBloggers/>
            <PopularBloggers/>
            <PopularBloggers/>
            <PopularBloggers/>
            <PopularBloggers/>
            <PopularBloggers/>
            <PopularBloggers/>
            <PopularBloggers/>
            <PopularBloggers/>
            <PopularBloggers/>
            </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default Popular_Blog
