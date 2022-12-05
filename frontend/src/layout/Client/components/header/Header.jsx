import React, { useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import { useSelector } from 'react-redux';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import { useNavigate } from 'react-router-dom';

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
import {
  Notifications as NotificationsIcon
} from '@mui/icons-material';
import { onSocketIO, emitSocketIO, socket } from "../../../../socketIO/socketIO";
import NavbarMobile from './NavbarMobile';
import TemporaryDrawer from "./TemporaryDrawer";
import Notifications from "./Notifications";

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
  console.log(theme)

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
          variant='h6'
          color="var(--color-gray-lofi)"
          sx={{
            fontFamily: "var(--font-secondary)",
            flexGrow: 0.5
          }}
        >
          RocketCup
        </Typography>

        <Box sx={{ display: 'flex', alignItems: "center", flexGrow: 1 }}>

          <IconButton
            sx={{
              color: 'var(--color-gray-lofi)',
              /* p: '10px', */
              [theme.breakpoints.down("md")]: {
                display: "none"
              }
            }}
            aria-label="menu"
          >
            <TemporaryDrawer navbar={navbar} />
          </IconButton>

          <Paper
            component="form"
            sx={{
              /* p: '2px 4px', */
              display: 'flex',
              alignItems: 'center',
              height: "fit-content",
              width: '100%',
              maxWidth: 400,
              position: "relative",
              [theme.breakpoints.down("md")]: {
                display: "none"
              }
            }}
          >
            <InputBase
              sx={{ pl: 5,/* ml: 30, */ /* flex: 1, */ width: "100%" }}
            /* placeholder="Buscar Proyecto" */
            // inputProps={{ 'aria-label': 'search google maps' }}
            />
            {/* <IconButton
              type="button"
              sx={{ p: '1px', border: "solid 1px red" }}
              aria-label="search"
            > */}
            <SearchIcon sx={{ position: "absolute", left: 5 }} />
            {/* </IconButton> */}
          </Paper>
        </Box>
        <Box sx={style.boxUser}>

          {/* <Notifications
            sx={{
              color: "gainsboro",
              cursor: "pointer",
              [theme.breakpoints.down("md")]: {
                display: "none"
              }
            }}
            onClick={() => {
              console.log("OnCLick")
              emitSocketIO(socket)
              onSocketIO(socket)
            }}
          /> */}

          <Box
            sx={{
              [theme.breakpoints.down("md")]: {
                display: "none"
              }
            }}
          >
            <Notifications />
          </Box>

          <Button
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

            <Box sx={{ p: '1em', display: 'flex', gap: '0.5em', alignItems: 'center', cursor: "pointer" }}>
              <SettingsApplicationsOutlinedIcon />
              <Typography>Configuration</Typography>
            </Box>

            <Divider sx={{ mx: '1em' }} />
            <Box onClick={signOut} sx={{ p: '1em', display: 'flex', gap: '0.5em', alignItems: 'center', cursor: "pointer" }}>
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