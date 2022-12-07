import React from 'react'

import {
  Box,
  MenuItem,
  Avatar
} from "@mui/material";

import { 
  fetchNotifications, 
  generateNotification, 
  patchNotification } from '../../../../utils/notificationsUtils';

import useScreenSize from '../../../../hooks/useScreenSize';
import { useDispatch } from 'react-redux';

const NotificationsCard = ({notification}) => {

  const setFormatDate = (date) => {
    let newDate = new Date(date)

    return newDate
  }

  let screen = useScreenSize()
  const dispatch = useDispatch()

  return (
    <MenuItem
      onClick={() => {
        screen.widthResize >= 900 && handleClose()
        patchNotification(notification._id)
        fetchNotifications(dispatch)
      }}
      disableRipple
      sx={
        {
          backgroundColor: 'var(--color-background-notifications)',
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "90px",
          borderBottom: "solid 1px lightGray",
          paddingTop: "20px"
        }
      }
    >
      <Box sx={{ display: "flex", alignItems: "center", padding: 0 }}>
        < Avatar
          alt="avatar"
          src={notification.profileImage}
          sx={{ marginRight: "10px" }}
        />
        {generateNotification(notification.senderName, notification.type)}
      </Box>
      <Box sx={{ fontSize: "14px", width: "100%", textAlign: "end", color: "gray" }}>
        {setFormatDate(notification.updatedAt).toLocaleString()}
      </Box>
    </MenuItem>
  )
}

export default NotificationsCard;