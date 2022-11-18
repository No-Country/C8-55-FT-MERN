import { Stack, Box, Button, Paper, IconButton, InputBase, Divider } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MenuIcon from '@mui/icons-material/Menu';

const style = {
  header: {
    width: '100%',
    height: '5em',
    backgroundColor: '#34445d90',
    padding: '2em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  boxUser: {
    display: 'flex',
    alignItems: 'center',
    gap: '1em'
  }
}

const Header = () => {
  return (
    <Stack sx={style.header}>

      <Typography variant='h6' color="#FF9F1C">rocketCup</Typography>
     

      <Box sx={style.boxUser}>
        {/* <Button variant='text' sx={{ color: 'white' }} >Crear Proyecto</Button> */}
        <Button variant='text' sx={{ color: '#EDF2F4' }} >Descubrir</Button>
        <AccountCircleIcon sx={{ cursor: 'pointer', color: '#FF9F1C' }} />
      </Box>
    </Stack>
  )
}

export default Header