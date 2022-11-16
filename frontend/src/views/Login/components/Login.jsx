import { Box, Divider, Stack, TextField, Typography, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { setUser } from '../../../store/slices/user.slice'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = ({ setLogStatus }) => {

  const [log, setLog] = useState()
  const user = useSelector(state => state.user)
  const token = localStorage.getItem('token');

  const dispatch = useDispatch()

  const getUser = user => {
    axios.post('http://localhost:3000/user/signin', user)
      .then(res => {
        console.log(res.data.user)
        localStorage.setItem('token', res.data.token)
        dispatch(setUser(res.data.user))
      })
      .catch(err => console.log(err.response))
  }

  const loginUser = e => {
    e.preventDefault();

    const userData = {
      mail: e.target.mailLogin.value.trim(),
      password: e.target.passwordLogin.value.trim(),
    }
    setLog(userData)
    getUser(userData)
  }

  if (!token) {
    return (
      <Stack component='form' onSubmit={loginUser} p='2em' sx={{ width: '350px', borderRadius: '0.8em', backgroundColor: 'white', gap: '1em' }} >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" color="#FF9F1C"><strong>Hello again!</strong></Typography>
          <Typography variant="subtitle" color="initial">Wellcome back you ha've been missed</Typography>
        </Box>
        <Box sx={{ widht: '100%', display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <Divider />
          <TextField
            required
            label="email"
            id="mailLogin"
            size="small"
            type='mail'
            fullWidth
          />
          <TextField
            required
            label="password"
            id="passwordLogin"
            size="small"
            fullWidth
            type='password'
          />

        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant='text' color='warning' onClick={() => setLogStatus()}>Sign up</Button>
          <Button variant='contained' color='warning' type='submit'>Log In</Button>

        </Box>
        <Divider />
        <Button variant="text" color="primary">
          Forgot password?
        </Button>
      </Stack>
    )
  } else {
    return <Navigate to='/feed' />
  }


}

export default Login