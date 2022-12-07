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
  
  const [useAuth, setUseAuth] = useState()
  
  const dispatch = useDispatch()
  
  const user = useSelector(account => account.user)
  const { results } = useSelector(state => state.searchResults)
  const token = localStorage.getItem('token')
  
  useEffect(() => {
    axios.get(`http://localhost:3000/user/tokeninfo`, getConfig())
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
      <Stack pt='5em' sx={{ width: '100%', height: '100vh', display: 'flex', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1 }}>
          <Header />
          <SearchResults items={results?.data}/>
        </Box>
        <Box sx={{ display: 'flex', height: '100%', position: 'relative' }}>
          <Box sx={{ position: 'sticky', right: 0 }}>
            <SideBar />
          </Box>
          <Stack p='1em'>
            <Outlet />
          </Stack>
        </Box>
        <Box sx={{ position: 'fixed', right: 0, bottom: 0 }}>
          <Chat />
        </Box>
      </Stack>
    )
  } else {
    return <Navigate to='/log' />
  }
}

export default ClientLayout