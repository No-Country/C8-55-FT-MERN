import { Box, Button, Divider, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import SelectSmall from './SelectRole'
import PhotoCamera from '@mui/icons-material/PhotoCamera';


const Signup = ({ setLogStatus }) => {

  const [userCreate, setUserCreate] = useState()
  const [image, setImage] = useState()
  const [imageURL, setImageURL] = useState()


  const submit = e => {
    e.preventDefault()
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'rbzpjt8a')
    data.append('cloud_name', 'da8xnpdpx')

    axios.post('https://api.cloudinary.com/v1_1/da8xnpdpx/image/upload', data)
    .then(res => {
      setImageURL(res.data.url)
      createUser(e)
    })
    .catch(err => console.log(err))
  }

  const createUser = e => {
    const userData = {
      name: e.target.name.value.trim(),
      lastName: e.target.lastname.value.trim(),
      mail: e.target.mail.value.trim(),
      password: e.target.password.value.trim(),
      role: e.target.userRole.value.trim(),
      userType: 'user',
      profileImage: imageURL
    }

    if (e.target.password.value.trim() != e.target.confirmPassword.value.trim()) {
      console.log('error')

    } else {

      


      if (e.target.password.value.trim().length >= 6) {

        axios.post('http://localhost:3000/user/signup', userData)
          .then(res => {
            console.log(res.data)
          })
          .catch(err => console.log(err))

      } else {
        console.log('error')
      }

    }

  }
console.log(imageURL)
  return (
    <Stack component='form' onSubmit={submit} p='2em' sx={{ width: '350px', borderRadius: '0.8em', backgroundColor: 'white', gap: '1em' }} >
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
        <Box sx={{display: 'flex'}}>
        <TextField
          label="Rol"
          id="userRole"
          size="small"
          fullWidth
          required
        />
        <IconButton  color="primary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" onChange={(e) => setImage(e.target.files[0])} />
          <PhotoCamera />
        </IconButton>
          
        </Box>
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