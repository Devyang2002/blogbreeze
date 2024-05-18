import React from 'react'
import {Box, Typography} from "@mui/material"
import { tokens } from '../../themes'
import { useTheme } from '@emotion/react'
import Random_Blog from '../../components/Random_Blog'
import Popular_Blog from '../../components/Popular_Blog'

const Home = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
        <Random_Blog/>
        <Popular_Blog/>
    </Box>
  )
}

export default Home
