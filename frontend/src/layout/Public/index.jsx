import { Stack, Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Particle from '../../components/Particles'
import Header from './components/Header'
import Footer from "./components/footer/Footer"

const PublicLayout = () => {
return(
  <Stack >
    <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100}}>
       <Header />

    </Box>
       <Outlet />
  </Stack>
)

  // return (
  //   <Stack sx={{ width: '100%', height: '100vh', border: '1px dashed black', backgroundColor: '#242F40', flexDirection: 'row', position: 'relative' }}>
  //     <Particle />
  //     <Box sx={{ position: 'fixed', left: 0, right: 0, top: 0, zIndex: 200}}>
     
  //     </Box>
  //     <Stack pt='5em' sx={{ zIndex: 100 }} >
       
  //     </Stack>
  //     <Box>
  //       <Footer />
  //     </Box>
  //   </Stack>
  // )
}

export default PublicLayout