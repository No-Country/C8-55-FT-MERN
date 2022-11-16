import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import Particle from '../../components/Particles'
import Login from './components/Login'
import Signup from './components/Signup'

const LogIndex = () => {

    const [logStatus, setLogStatus] = useState(true)


    return (
        <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%' }}>
            <Box sx={{ zIndex: 100 }}>
                {logStatus ? <Login setLogStatus={setLogStatus} /> : <Signup setLogStatus={setLogStatus} />}
            </Box>
            <Particle />
        </Stack>
    )
}

export default LogIndex