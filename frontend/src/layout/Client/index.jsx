import { Stack, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Chat from './components/Chat'
import Header from './components/header/Header'
import SideBar from './components/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import getConfig from '../../config'
import { setUser } from '../../store/slices/user.slice'

import { fetchNotifications } from '../../utils/notificationsUtils';
import SearchResults from "./components/header/SearchResults"

const ClientLayout = () => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_API_URI

  
  const [useAuth, setUseAuth] = useState()
  
  const dispatch = useDispatch()
  
  const user = useSelector(account => account.user)
  const { results, displaySearch } = useSelector(state => state.searchResults)
  const token = localStorage.getItem('token')
  
  useEffect(() => {
    axios.get(`${URL_BASE}/user/tokeninfo`, getConfig())
      .then(res => {
        setUseAuth(res.data.auth)
        dispatch(setUser(res.data.user))
        fetchNotifications(dispatch)
        //console.log(res.data.user)
      })
      .catch(err => {
        // console.log(err.response.data)
        if (err.response.data.auth == false) {
          localStorage.removeItem('token');
        }
      })
  }, [])

  if (token) {
    return (
      <Stack>
         <Box sx={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 100 }}>
          <Header />
        </Box>
        <Outlet />
        <Box sx={{ position: 'fixed', right: 0, bottom: 0, zIndex: 200 }}>
          <Chat />
        </Box>
      </Stack>
    )

  } else {
    return <Navigate to='/log' />
  } 
}

export default ClientLayout