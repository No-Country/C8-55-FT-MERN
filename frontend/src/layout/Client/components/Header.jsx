import { Stack, Box, Button, Paper, IconButton, InputBase, Divider, Drawer, Avatar } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';

const style = {
  header: {
    width: '100%',
    height: '5em',
    backgroundColor: '#23222F',
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

  const user = useSelector(state => state.user)

  return (
    <Stack sx={style.header}>

      <Typography variant='h6' color="#74F7AE">rocketCup</Typography>

      <Box sx={{ display: 'flex' }}>

        <IconButton sx={{ color: 'white', p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', maxWidth: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar Proyecto"
          // inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <ManageSearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Box sx={style.boxUser}>
        <Button variant='text' sx={{ color: 'white' }} >Crear Proyecto</Button>
        <Button variant='text' sx={{ color: 'white' }} >Descubrir</Button>
        <IconButton sx={{ color: '#74F7AE' }}>
          {/* <AccountCircleIcon /> */}
          <Avatar
            alt={`${user?.name} ${user?.lastName}`}
            src={`${user?.profileImage}`}
          />
        </IconButton>
      </Box>
    </Stack>
  )
}

export default Header