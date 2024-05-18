import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, TextField, useTheme } from '@mui/material'
import { Formik } from "formik";
import * as yup from "yup";
import { NavigateBeforeTwoTone } from '@mui/icons-material';

const initialValues = {
    name:"",
    userName: "",
    email:"",
    password: "",
};

const userSchema = yup.object().shape({
    name: yup.string().required("required"),
    userName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    confirm_password: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required("required"),

});

const SignUp = ({toggleForm}) => {

    const theme = useTheme();
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        console.log(values);
        let result = await fetch("http://localhost:5000/register",{
            method:'post',
            body:JSON.stringify(values),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        if(result){
            toggleForm();
        }
        else{
            alert("enter all the details")
        }
    }
  return (
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
                    Welcome to BlogBreeze - SignUp with Your Account
                    </Typography>
                    <TextField
                        variant="filled"
                        type="text"
                        label="Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                        sx={{
                            marginBottom:"10px"
                        }}
                    />
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
                            marginBottom:"10px"
                        }}
                    />
                    <TextField
                        variant="filled"
                        type="email"
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{
                            marginBottom:"10px"
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
                            sx={{
                                marginBottom:"10px"
                            }}
                        />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="password"
                        label="Confirm Password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirm_password}
                        name="confirm_password"
                        error={!!touched.confirm_password && !!errors.confirm_password}
                        helperText={touched.confirm_password && errors.confirm_password}
                    />                        
                    </Box>
                    <Box display="flex" padding="20px" mt="-15px">
                    <Button type="submit" color="primary" variant="contained"fullWidth sx={{
                        fontWeight:"600",
                        backgroundColor :`${theme.palette.mode === "dark" ? "#ffffff" :"#000000" }`,
                        color:`${theme.palette.mode === "dark" ? "#000000" :"#ffffff" }`,
                        "&:hover":{
                            boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                            backgroundColor :`${theme.palette.mode === "dark" ? "#ffffff" :"#000000" }`,
                        color:`${theme.palette.mode === "dark" ? "#000000" :"#ffffff" }`,
                        }
                    }}>
                        Sign up
                    </Button>
                </Box>
                </form>     
        )}
    </Formik>
  )
}

export default SignUp
