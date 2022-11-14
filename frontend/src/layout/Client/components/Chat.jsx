import { Skeleton, SwipeableDrawer, Typography } from '@mui/material'
import React from 'react'

const Chat = () => {
  return (
    <SwipeableDrawer
    anchor="bottom"
    open={true}
    onClose={false}
    onOpen={true}
    disableSwipeToOpen={false}
    ModalProps={{
      keepMounted: true,
    }}
  >

      <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>


      <Skeleton variant="rectangular" height="100%" />

  </SwipeableDrawer>
  )
}

export default Chat