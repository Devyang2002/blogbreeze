import React from 'react'
import {Box, useTheme, Typography,IconButton,Button} from "@mui/material"
import { tokens } from '../../themes'
import { useRef, useState } from 'react'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const AddBlogs = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageClick = () =>{
        inputRef.current.click();
    }

    const handleImageChange = (e) =>{
        const file = e.target.files[0];
        console.log(file);
        setImage(file);
    }

  return (
    <>
    <Box width="100vw" height="90vh" display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" flexDirection="column" border="2px dashed" borderRadius="20px" width="1000px" padding="30px">
            <label htmlFor="file" style={{
                display:"flex",
                justifyContent:"center"
            }}>{image ? image.name : (
                <Typography variant='h4'>
                    Choose an Image
                </Typography>
            )}</label>
            <div onClick={handleImageClick} style={{
                display:"flex",
                justifyContent:"center"
            }}>
                {image ? (
                    <img src={URL.createObjectURL(image)} alt="" style={{
                        width:"400px",
                        height:"250px"
                    }}/>
                ):(
                    <IconButton >
                        <AddPhotoAlternateOutlinedIcon  sx={{
                        width:"300px",
                        height:"300px"
                    }}/>
                    </IconButton>
                )}
            <input type="file"  ref={inputRef} onChange={handleImageChange} style={{display:"none"}} />
            </div>
            </Box>
            <Box width="1000px" border="2px solid" padding="30px" borderRadius="20px" marginTop="20px">
        <form action="">
            <Box display="flex" flexDirection="column">
            <label htmlFor="">
                <Typography variant='h6'>
                    Add Title
                </Typography>
            </label>
            <input type="text" style={{
                backgroundColor:`${theme.palette.mode === "dark" ? "black" : "white"}`, 
                color:`${theme.palette.mode === "dark" ? "white" : "black"}`
            }} />
            </Box>
            
            <Box display="flex" flexDirection="column">
            <label htmlFor="">
                <Typography variant='h6'>
                    Category
                </Typography>
                </label>
                <select name="category" style={{
                    backgroundColor:`${theme.palette.mode === "dark" ? "black" : "white"}` ,
                    color:`${theme.palette.mode === "dark" ? "white" : "black"}`
                }}>
                <option value="">
                    <Typography variant='h6'>
                        Select a Category
                    </Typography>
                </option> 
               <option value="fashion"><Typography variant='h6'sx={{
                    }}>
                        Fashion
                    </Typography></option>
               <option value="sports"><Typography variant='h6'sx={{
                    }}>
                        Sports
                    </Typography></option>
              <option value="news"><Typography variant='h6'sx={{
                    }}>
                        News
                    </Typography></option>
              <option value="education"><Typography variant='h6'sx={{
                    }}>
                        Education
                    </Typography></option>
               <option value="coding"><Typography variant='h6'sx={{
                    }}>
                        Coding
                    </Typography></option>
               </select>
            </Box>
            <Box display="flex" flexDirection="column">
            <label htmlFor="">
                <Typography variant='h6'>
                    Content
                </Typography>
                </label>
            <textarea type="text" rows={30} style={{
                backgroundColor:`${theme.palette.mode === "dark" ? "black" : "white"}`, 
                color:`${theme.palette.mode === "dark" ? "white" : "black"}`
            }}/>
            </Box>
        </form>
        </Box>
            <Box width="1000px" margin="20px" display="flex" justifyContent="right">
                <Button variant='contained' sx={{
                    marginBottom:"20px",
                }} >
                    Submit Post 
                </Button>
            </Box>
    </Box>
    </>
  )
}

export default AddBlogs
