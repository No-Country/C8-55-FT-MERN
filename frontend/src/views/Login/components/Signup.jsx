import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import SelectSmall from './SelectRole'

const Signup = ({ setLogStatus }) => {

  const [userCreate, setUserCreate] = useState()

  const createUser = e => {
    e.preventDefault();

    const userData = {
      name: e.target.name.value.trim(),
      lastName: e.target.lastname.value.trim(),
      mail: e.target.mail.value.trim(),
      password: e.target.password.value.trim()
    }

    if (e.target.password.value.trim() != e.target.confirmPassword.value.trim()) {
      console.log('error')
     
    } else {
      if (e.target.password.value.trim().length > 6) {
       
      axios.post('http://localhost:3000/user/signup', userData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

      } else {
        console.log('error')
      }

    }

  }

  return (
    <Stack component='form' onSubmit={createUser} p='2em' sx={{ width: '350px', borderRadius: '0.8em', backgroundColor: 'white', gap: '1em' }} >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" color="#FF9F1C"><strong>Sign up!</strong></Typography>
        <Typography variant="subtitle" color="initial">Have a good experience, flying with us</Typography>
      </Box>
      <Divider />
      <Box sx={{ widht: '100%', display: 'flex', justifyContent: 'space-between', gap: '1em' }}>
        <TextField
          label="name"
          id="name"
          size="small"
          fullWidth
          required
        />
        <TextField
          label="lastname"
          id="lastname"
          size="small"
          fullWidth
          required
        />
      </Box>
      <Box sx={{ widht: '100%', gap: '1em', display: 'flex', flexDirection: 'column' }}>
        <TextField
          label="email"
          id="mail"
          size="small"
          fullWidth
          required
        />
        <TextField
          label="password"
          id="password"
          size="small"
          fullWidth
          required
          type='password'
        />
        <TextField
          label="confirm password"
          id="confirmPassword"
          size="small"
          fullWidth
          required
          type='password'
        />
        {/* <SelectSmall/> */}

      </Box>

      <Button variant='contained' color='warning' type='submit' >Create</Button>
      <Divider />
      <Button variant="text" color="primary" onClick={() => setLogStatus(true)}>
        Do you already have an account?
      </Button>
    </Stack >
  )
}

export default Signup