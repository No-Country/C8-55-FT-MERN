import { Stack, Box, Typography, Button, Divider, LinearProgress } from '@mui/material'
import React, { useState } from 'react'
import TopProject from './TopProject'
import projectsDB from '../../../utils/topProjectsDB'
import { useEffect } from 'react'
import axios from 'axios'
import getConfig from '../../../config'
import { useNavigate } from 'react-router-dom'


const style = {
    sideBar: {
        height: '100%',
        maxWidth: 350,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        marginX: '1em',
        gap: '1em'
    },

    topProjectStyle: {
        backgroundColor: '#edf2f4',
        padding: '1.5em',
        borderRadius: '0.5em',

    }
}

const SideBar = () => {

    const [projects, setProjects] = useState()

    const navigate = useNavigate()
   
    useEffect(() => {
      axios.get('http://localhost:3000/project/all_projects', getConfig())
      .then(res => setProjects(res.data))
      .catch(err => console.log(err))
    }, [])
    


    return (
        //? TopProjects 

        <Stack p='1em' sx={style.sideBar}>
            <Box sx={style.topProjectStyle}>
                <Box sx={{ minWidth: 300, justifyContent: 'space-between', display: 'flex' }}>
                    <Typography variant="h6" color="initial"> Last Projects</Typography>
                    <Button variant="outlined" color="success" onClick={() => navigate('/projects')}>
                        View All
                    </Button>
                </Box>
                <Divider sx={{ marginY: '1em' }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    {
                        projects?.map(project =>
                            <TopProject key={project.wallet} project={project} />

                        )
                    }
                </Box>
            </Box>

            <Box sx={style.topProjectStyle}>
                <Box sx={{ minWidth: 300, justifyContent: 'space-between', display: 'flex' }}>
                    <Typography variant="h6" color="initial">Tendencies</Typography>
                </Box>
                <Divider sx={{ marginY: '1em' }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    <Box>
                        <Typography variant="subtitle" color="initial">Webs 3.0</Typography>
                        <LinearProgress variant="determinate" value={98} />
                    </Box>
                    <Box>
                        <Typography variant="subtitle" color="initial">Gaming projects</Typography>
                        <LinearProgress variant="determinate" value={82} />
                    </Box>
                    <Box>
                        <Typography variant="subtitle" color="initial">Charity</Typography>
                        <LinearProgress variant="determinate" value={78} />
                    </Box>
                    <Box>
                        <Typography variant="subtitle" color="initial">Gaming projects</Typography>
                        <LinearProgress variant="determinate" value={75} />
                    </Box>
                
                </Box>
            </Box>
        </Stack>
    )
}

export default SideBar