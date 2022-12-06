//import React from 'react'
import NotificationsCard from './NotificationsCard';
import { Notifications as NotificationsIcon } from '@mui/icons-material';

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {createTheme} from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Badge, Box, Avatar } from '@mui/material';

import { onSocketIO, emitSocketIO, socket } from "../../../../socketIO/socketIO";
import { fetchNotifications, generateNotification, patchNotification } from '../../../../utils/notificationsUtils';
import { useSelector, useDispatch } from "react-redux";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    overflow: "scroll",
    maxHeight: "70vh",
    borderRadius: 1,
    marginTop: theme.spacing(4),
    minWidth: 430,
    border: "solid 1px red",
    [theme.breakpoints.down("md")]: {
      display: "none"
    },
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function Notifications() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const theme = createTheme()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { notificationsList: notifications } = useSelector(state => state.notification);
  let dispatch = useDispatch()

  return (
    <div>
      <Badge
        badgeContent={notifications ? notifications.length : 0}
        color="warning"
      >
        <NotificationsIcon
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          sx={{ 
            color: "gainsboro", 
            cursor: "pointer",
            [theme.breakpoints.up("sm")]: {
                fontSize: "35px"
            },
            [theme.breakpoints.down("md")]: {
              color: "var(--color-complement-black)"
            }
           }}
          onClick={(e) => {
            console.log("OnCLick")
            handleClick(e)
            emitSocketIO(socket)
            onSocketIO(socket)
          }}
        />
      </Badge>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
          notifications && notifications.length > 0
            ?
            notifications.map((notification, id) => (
              <Box key={id}>
                <NotificationsCard notification = {notification}/>
              </Box>

            ))
            :
            <Box>
              <MenuItem
                onClick={handleClose}
                disableRipple
                sx={
                  {
                    height: "100px",
                    borderBottom: "solid 1px lightGray"
                  }
                }
              >
                <FileCopyIcon />
                Sin notificaciones.
              </MenuItem>
            </Box>

        }
      </StyledMenu>
    </div>
  );
}