import { Box, CardMedia, Typography, IconButton, Avatar } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import MobileScreenShareOutlinedIcon from '@mui/icons-material/MobileScreenShareOutlined';
import { useNavigate } from 'react-router-dom';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';

const style = {
    topProject: {
        width: '100%',
        height: '3em',
        border: '0.5px solid gray',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0.3em',
        overflow: 'hidden',
        boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)!important',
        cursor: 'pointer'

    }
}

const TopProject = ({project}) => {

    const navigate = useNavigate()
    return (
        <Box sx={style.topProject}>
            <Box sx={{ backgroundColor: '#23222F', width: '3em', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body1" color="white">{project.id}</Typography>
            </Box>
            <Box sx={{position: 'relative', flex: 1, height: '100%', paddingX: '0.5em', display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '0.5em' }}>
                <Box sx={{ maxWidth: 40, borderRadius: '100%', overflow: 'hidden' }}>
                <Avatar
                alt={<BuildCircleOutlinedIcon />}
                src={project.projectImg}
                sx={{ width: 35, height: 35 }}
              />
                </Box>
                <Typography onClick={()=> navigate(`/project/${project._id}`)} variant="body1" >{project.title}</Typography>
                <IconButton onClick={()=> navigate(`/project/${project._id}`)} sx={{position: 'absolute', right: 0}} >
                  <MobileScreenShareOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default TopProject