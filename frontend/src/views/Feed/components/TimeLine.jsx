import { Stack, Box, Typography, Button, Divider, LinearProgress } from '@mui/material'
import React, { useState } from 'react'

import { useEffect } from 'react'
import axios from 'axios'
import getConfig from '../../../config'
import { useNavigate } from 'react-router-dom'
import TimeLinePostDescription from './TimeLinePostDescription'
import { useSelector } from 'react-redux'
import { maxHeight } from '@mui/system'


const style = {
    sideBar: {
        height: '100%',
        maxWidth: 350,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        marginX: '1em',
        gap: '1em',

    },

    topProjectStyle: {
        backgroundColor: '#edf2f4',
        padding: '1.5em',
        borderRadius: '0.5em',
        minHeight: 500,


    }
}

const TimeLine = () => {

    const URL_BASE = import.meta.env.VITE_REACT_APP_API_URI

    const user = useSelector(state => state.user)


    const [projects, setProjects] = useState()

    const [timeLine, setTimeLine] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${URL_BASE}/project/all_projects`, getConfig())
            .then(res => setProjects(res.data))
            .catch(err => console.log(err))

        axios.get(`${URL_BASE}/timeline/${user?.id}`, getConfig())
            .then(res => setTimeLine(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        //? TopProjects 

        <Stack p='1em' sx={style.sideBar}>
            <Box sx={style.topProjectStyle}>
                <Box sx={{ minWidth: 300, justifyContent: 'space-between', display: 'flex' }}>
                    <Typography variant="h6" color="initial"> My Followers Posts</Typography>
                </Box>
                <Divider sx={{ marginY: '1em' }} />

                <Box sx={{
                    display: 'flex', flexDirection: 'column', gap: '1em', overflow: 'scroll   ',
                    maxHeight: 620, mb: '1em'
                }}>
                    {timeLine && timeLine.timeline.map(post =>
                        <TimeLinePostDescription key={post._id} post={post} />
                    )}
                </Box>
            </Box>

        </Stack>
    )
}

export default TimeLine