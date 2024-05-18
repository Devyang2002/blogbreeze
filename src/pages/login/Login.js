import React from 'react';
import { useState } from 'react';
import { Box, Typography, Button, TextField, useTheme } from '@mui/material'
import { Formik } from "formik";
import * as yup from "yup";
import SignUp from '../../components/SignUp';
import { useUser } from '../../UserContext';
import { loginUser } from '../../sessionStorage/auth';
import { useNavigate } from 'react-router-dom';


const initialValues = {
    userName: "",
    password: "",

};

const userSchema = yup.object().shape({
    userName: yup.string().required("required"),
    password: yup.string().required("required"),
});

const Login = () => {
    const {setUser} = useUser();
    const theme = useTheme();
    const navigate = useNavigate();
    const [signUp,setSignUp] = useState(false);
    const toggleForm = () => {
        setSignUp(!signUp);
    }

    const handleSignUp = ()=>{
        setSignUp(!signUp);
    }

    const handleSubmit = async (values) => {
        console.log(values);
        try {
            let result = await fetch("http://localhost:5000/login", {
                method: "post",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!result.ok) {
                let errorResponse = await result.json();
                throw new Error(errorResponse.error);
            }
    
            result = await result.json();
            console.log(result);
    
            if (result && !result.error) {
                loginUser(result);
                setUser(result);
                alert("User logged in successfully");
                navigate("/blogbreeze");
            } else {
                alert("Please enter valid details");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please enter valid details.");
        }
    };
  return (
    <Box display="flex" justifyContent="space-between" width="1200px" marginLeft="150px" marginTop="50px">
        <Box width="500px" height={signUp ? "540px" : "500px"} sx={{
            background: "rgba( 40, 38, 38, 0.15 )",
            backdropFilter:"blur( 0px )",
            WebkitBackdropFilter:"blur(0px)",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            borderRadius:"20px",
            border:"2px solid rgba( 255, 255, 255, 0.18 )"
        }} >
            <Box display="flex" justifyContent="center">
            <Typography fontSize="250px" fontWeight="600" display="flex" height="280px" alignItems="center" sx={{
                background: "linear-gradient(90deg, #b30000, #5A274D)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor: "transparent",
             }}>B</Typography>
            <Typography fontSize="250px" fontWeight="600" height="320px"   sx={{
                background: "linear-gradient(90deg, #5A274D, #004d99)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor: "transparent"
             }}>B</Typography>
            </Box>
            <Box width="450px">
                <Typography variant="h3" marginTop={signUp
                    ? "20px" :  "0px"
                }  sx={{
                    display:"flex",
                    justifyContent:"center",
                    marginLeft:"39px",
                }}>
                Stay Ahead with BlogBreeze - Where Innovation Meets Creativity in Blogging.
                </Typography>
            </Box>
            <Box width="410px" mt={signUp ? "50px" : "45px"} ml="39px">
                <hr style={{
                    borderStyle:"solid",
                    borderWidth:"2.2px",
                    borderColor:"#b30000"
                }}/>
                <hr style={{
                    borderStyle:"solid",
                    borderWidth:"2px",
                    borderColor:"#004d99"
                }}/>
            </Box>
        </Box>
        {!signUp &&
        
        <Box width="500px" border="2px solid" sx={{
            background: "rgba( 40, 38, 38, 0.15 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter:"blur( 0px )",
            WebkitBackdropFilter:"blur(0px)",
            borderRadius:"20px",
            border:"2px solid rgba( 255, 255, 255, 0.18 )"
        }}>
            <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
        >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Box display="flex" 
                    flexDirection="column"
                    padding="20px"
                    >
                        <Typography variant="h3" sx={{
                            marginBottom:"20px"
                        }}>
                        Welcome Back to BlogBreeze - Log In to Your Account
                        </Typography>
                        <TextField
                            variant="filled"
                            type="text"
                            label="Username"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.userName}
                            name="userName"
                            error={!!touched.userName && !!errors.userName}
                            helperText={touched.userName && errors.userName}
                            sx={{
                                marginBottom:"20px"
                            }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="password"
                            label="Password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            error={!!touched.password && !!errors.password}
                            helperText={touched.password && errors.password}
                        />
                        </Box>
                        <Box display="flex" padding="20px" mt="-15px">
                        <Button type="submit" color="primary" variant="contained" fullWidth sx={{
                            fontWeight:"600",
                            backgroundColor :`${theme.palette.mode === "dark" ? "#ffffff" :"#000000" }`,
                            color:`${theme.palette.mode === "dark" ? "#000000" :"#ffffff" }`,
                            "&:hover":{
                                boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                                backgroundColor :`${theme.palette.mode === "dark" ? "#ffffff" :"#000000" }`,
                            color:`${theme.palette.mode === "dark" ? "#000000" :"#ffffff" }`,
                            }
                        }}>
                            Login
                        </Button>
                    </Box>
                    </form>     
            )}
        </Formik>
        <Box display="flex" justifyContent="center">
            <Typography variant='h6'>
            If you don't have an account,
            <Button
            onClick={handleSignUp}
            sx={{
                color:"#004d99",
                fontWeight:"800",
                fontSize:"13px"
            }}
            >
                sign up here
            </Button>
            </Typography>
        </Box>
        </Box>}
        {signUp && <Box width="500px" height="540px" border="2px solid"
        sx={{
        background: "rgba( 40, 38, 38, 0.15 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter:"blur( 0px )",
        WebkitBackdropFilter:"blur(0px)",
        borderRadius:"20px",
        border:"2px solid rgba( 255, 255, 255, 0.18 )",
        overflowY:"auto"
    }}>
        <SignUp toggleForm={toggleForm}/>
        <Box display="flex" justifyContent="center">
        <Typography variant='h6'>
        Already have an account,
        <Button
        onClick={handleSignUp}
        sx={{
            color:"#004d99",
            fontWeight:"800",
            fontSize:"13px"
        }}
        >
            Login here
        </Button>
        </Typography>
    </Box>
    </Box>}
        
    </Box>
  )
}

export default Login
