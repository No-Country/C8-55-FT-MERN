import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {
  Stack,
  Box,
  Button,
  Paper,
  IconButton,
  InputBase,
  Divider,
  Drawer,
  Avatar,
  Typography,
  Popover,
  createTheme
} from '@mui/material';

import NavbarMobile from './NavbarMobile';
import TemporaryDrawer from "./TemporaryDrawer";
import Notifications from "./Notifications";
import { emitSocketIO, onSocketIO, socket } from '../../../../socketIO/socketIO';
import SearchResults from "./SearchResults";
import Search from "./Search";

const style = {
  header: {
    width: '100%',
    height: '5em',
    backgroundColor: '#23222F',
    padding: '2em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  boxUser: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-evenly",
    gap: '1em',
    flexGrow: 0.5
  }
}

const navbar = [
  {
    side: "left",
    name: "Menu",
    component: <MenuIcon />,
    items: [
      {
        name: "Descubre",
        icon: ""
      },
      {
        name: "Crear Proyecto",
        icon: ""
      },
      {
        name: "Sobre Nosotros",
        icon: ""
      },
    ]
  }
]

const Header = () => {

  const user = useSelector(state => state.user)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const theme = createTheme();

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
    <Stack>
      <Stack sx={style.header}>

        <Typography
          onClick={() => navigate('/feed')}
          variant='h6'
          color="var(--color-gray-lofi)"
          sx={{
            fontFamily: "var(--font-secondary)",
            flexGrow: 0.5,
            cursor: 'pointer',
          }}
        >
          RocketCup
        </Typography>

        <Box sx={{ display: 'flex', alignItems: "center", flexGrow: 1 }}>

          <IconButton
            sx={{
              color: 'var(--color-gray-lofi)',
              [theme.breakpoints.down("md")]: {
                display: "none"
              }
            }}
            aria-label="menu"
          >
            <TemporaryDrawer navbar={navbar} />
          </IconButton>
          <Box 
            sx={{
              width: "100%",
              [theme.breakpoints.down("md")]: {
                display: "none"
              }
            }}
          >
            <Search/>
          </Box>
        </Box>
        <Box sx={style.boxUser}>

          <Box
            sx={{
              [theme.breakpoints.down("md")]: {
                display: "none"
              }
            }}
          >
            <Notifications />
          </Box>

          <Button onClick={() => navigate('/projects/create')}
            variant='text'
            sx={{
              color: 'var(--color-gray-lofi)',
              display: "none",
              [theme.breakpoints.up("lg")]: {
                display: "block"
              }
            }}
          >
            Crear Proyecto
          </Button>

          <Button
            onClick={() => navigate('/projects')}
            variant='text'
            sx={{
              color: 'var(--color-gray-lofi)',
              display: "none",
              [theme.breakpoints.up("lg")]: {
                display: "block"
              }
            }}
          >
            Descubrir
          </Button>

          <IconButton aria-describedby={id} onClick={handleClick} sx={{ color: '#74F7AE' }}>
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

            <Box onClick={()=> navigate(`/profile/${user.id}`) } sx={{
              p: '1em',
              display: 'flex',
              gap: '0.5em',
              alignItems: 'center',
              cursor: "pointer"
            }}
            >
              <AccountCircleIcon />
              <Typography>Profile</Typography>
            </Box>

            <Divider sx={{ mx: '1em' }} />
            <Box
              onClick={signOut}
              sx={{
                p: '1em',
                display: 'flex',
                gap: '0.5em',
                alignItems: 'center',
                cursor: "pointer"
              }}
            >
              <LockPersonOutlinedIcon sx={{ color: 'error.main' }} />
              <Typography>Sign out</Typography>

            </Box>
          </Popover>
        </Box>
      </Stack>

      <NavbarMobile />

    </Stack>
  )
}

export default Header