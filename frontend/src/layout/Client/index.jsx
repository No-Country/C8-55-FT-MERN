import { Stack, Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'

const ClientLayout = () => {
  return (
    <Stack sx={{ width: '100%', height: '100vh', display: 'flex', border: '1px dashed black', position: 'relative' }}>
      <Header />
      <Box sx={{ display: 'flex', height: '100%' }}>
        <SideBar />
        <Stack p= '2em'>
        <Outlet />

        </Stack>
      </Box>
    </Stack>
  )
}

export default ClientLayout