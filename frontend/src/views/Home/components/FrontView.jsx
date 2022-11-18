import { CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'

const FrontView = () => {
  return (
    <Stack sx={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', width: '100%'}}>
        <Typography variant="h3" color="white">RocketCup</Typography>
        <Stack sx={{maxHeight: 300}}>
        <CardMedia
        component="img"
        height="300"
        image="frontArt.svg"
        alt="Paella dish"
      />

      <img src="spa-jupiter.svg" className='spin' />
      <img src="spa-jupiter.svg" className='spin' />
      <img src="spa-jupiter.svg" className='spin' />
      <img src="spa-jupiter.svg" className='spin' />

        </Stack>
    </Stack>
  )
}

export default FrontView