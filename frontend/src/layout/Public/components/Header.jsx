import { Stack, Box, Button, Paper, IconButton, InputBase, Divider } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate()
  return (
    <Stack sx={style.header}>

<Typography
          onClick={() => navigate('/')}
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


      <Box sx={style.boxUser}>
        {/* <Button variant='text' sx={{ color: 'white' }} >Crear Proyecto</Button> */}
        <Button
        onClick={() => navigate('/projects')}
         variant='text'
          sx={{ color: '#EDF2F4' }} 
          >Descubrir</Button>
        <IconButton aria-label="">
          <Link to={'/log'}>
            <AccountCircleIcon sx={{ cursor: 'pointer', color: '#FF9F1C' }} />
          </Link>
        </IconButton>
      </Box>
    </Stack>
  )
}

export default Header