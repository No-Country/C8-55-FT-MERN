import { Stack, Box, Typography, Button, Divider } from '@mui/material'
import React, { useState } from 'react'
import TopProject from './TopProject'

const projectsDB = [
    { name: 'Holamundo', img: 'not Found' },
    { name: 'Adiosmundo', img: 'not Found' },
    { name: 'UnderTaker', img: 'not Found' },
    { name: 'John projects', img: 'not Found' },
    { name: 'LAravel world', img: 'not Found' }
]


const style = {
    sideBar: {
        height: '100%',
        maxWidth: 350,
        // backgroundColor: 'red',
        flex: 1,
        display: 'flex',
        alignItems: 'center'
    },

    topProjectStyle: {
        backgroundColor: '#edf2f4',
        padding: '1em',
        borderRadius: '0.5em',

    }
}

const SideBar = () => {

    const [projects, setProjects] = useState(projectsDB)

    return (
        <Stack p='2em' sx={style.sideBar}>
            <Box sx={style.topProjectStyle}>
                <Box sx={{ minWidth: 250, justifyContent: 'space-between', display: 'flex' }}>
                    <Typography variant="h6" color="initial">Top Projects</Typography>
                    <Button variant="outlined" color="success">
                        View All
                    </Button>
                </Box>
                <Divider sx={{ marginTop: '0.5em', marginBottom: '0.5em' }} />
                {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    {projects && projects.map(project => {
                        <TopProject key={project.name} project={project} />
                    })}
                </Box> */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                  
                        <TopProject/>
                        <TopProject/>
                        <TopProject/>
                        <TopProject/>
                        <TopProject/>

                </Box>
            </Box>
        </Stack>
    )
}

export default SideBar