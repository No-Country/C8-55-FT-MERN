import { Stack, Box, Button, Paper, IconButton, InputBase, Divider, Drawer, Avatar, Typography, Popover } from '@mui/material'
import React, {useEffect} from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import { useNavigate } from 'react-router-dom';

import {Notifications} from '@mui/icons-material';
import {onSocketIO, emitSocketIO, socket} from "../../../socketIO/socketIO";

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const navigate = useNavigate()

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    localStorage.removeItem('token')
    navigate('/')

  }

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

        <Notifications 
          sx={{color: "gainsboro", cursor: "pointer"}}
          onClick={()=> {
            console.log("OnCLick")
            emitSocketIO(socket)
            onSocketIO(socket)
          }}
        />

        <Button variant='text' sx={{ color: 'white' }} >Crear Proyecto</Button>
        <Button variant='text' sx={{ color: 'white' }} >Descubrir</Button>
        <IconButton aria-describedby={id} onClick={handleClick} sx={{ color: '#74F7AE' }}>
          {/* <AccountCircleIcon /> */}
          <Avatar
            alt={`${user?.name} ${user?.lastName}`}
            src={`${user?.profileImage}`}
          />
        </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >

            <Box sx={{ p: '1em', display: 'flex', gap: '0.5em', alignItems: 'center' }}>
              <SettingsApplicationsOutlinedIcon />
              <Typography >Configuration</Typography>
            </Box>

            <Divider sx={{mx: '1em'}} />
            <Box onClick={signOut} sx={{ p: '1em', display: 'flex', gap: '0.5em', alignItems: 'center' }}>
              <LockPersonOutlinedIcon sx={{color:'error.main'}} />
              <Typography >Sign out</Typography>

            </Box>
          </Popover>
      </Box>
    </Stack>
  )
}

export default Header