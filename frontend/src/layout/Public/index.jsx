import { Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const PublicLayout = () => {
  return (
    <Stack sx={{ width: '100%', height: '100vh', border: '1px dashed black', backgroundColor: '#15141D', flexDirection: 'row' }}>
      <Header />
      <Outlet />
    </Stack>
  )
}

export default PublicLayout