import { Box, CardMedia, Typography, IconButton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const style = {
    topProject: {
        width: '100%',
        height: '2em',
        border: '0.5px solid gray',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0.3em',
        overflow: 'hidden',
        boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)!important'

    }
}

const TopProject = ({project}) => {

    console.log(project)
    return (
        <Box sx={style.topProject}>
            <Box sx={{ backgroundColor: '#23222F', width: '2em', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body1" color="white">1</Typography>
            </Box>
            <Box sx={{position: 'relative', flex: 1, height: '100%', paddingX: '0.5em', display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '0.5em' }}>
                <Box sx={{ maxWidth: 25, borderRadius: '100%', overflow: 'hidden' }}>
                    <CardMedia
                        component="img"
                        height="25"
                        width="25"
                        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt="green iguana"
                    />
                </Box>
                <Typography variant="body1" >Proyecto</Typography>
                <IconButton sx={{position: 'absolute', right: 0}} >
                  <AddIcon/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default TopProject