import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getConfig from '../../../config'
import EvStationOutlinedIcon from '@mui/icons-material/EvStationOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DoneIcon from '@mui/icons-material/Done';

const ProjectDetails = () => {

  const URL_BASE = import.meta.env.VITE_REACT_APP_API_URI


  const { id } = useParams()
  const [project, setProject] = useState()
  const [principalUserInfo, setPrincipalUserInfo] = useState()

  console.log(principalUserInfo?.userData)

  const getUserInfo = idUser => {
    axios.get(`${URL_BASE}/user/userinfo/${idUser}`, getConfig())
      .then(res => {
        setPrincipalUserInfo(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get(`${URL_BASE}/project/${id}`, getConfig())
      .then(res => {
        setProject(res.data)
        getUserInfo(res.data.founder)
      })
      .catch(err => console.log(err))
  }, [id])

  const createPost = () => {

    const body = {
      text: `<p>Hola comunidad, echen un vistazo a este proyecto llamado <strong>${project?.title}</strong>,
            hasta la fecha se ha recaudado $0 de $${project?.amount} que tiene como meta,
             puedes colaborar contribuyendo con gas para despegar el proyecto o contribuyendo como developer. </p>
              <br>

              <p>El proyecto se describe como: ${project?.description}</p>

              <br>
              <p>Actualmente los riesgos que se presentan son: <strong>${project?.risk}</strong></p>

              <br>
              <p>para mas informacion a continacion les dejo el link del proyecto:</p>
              <a href='http://localhost:5173/?#/project/${id}'>Link</a>
              `
    }
    axios.post(`${URL_BASE}/post/create`, body, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
    console.log(body)
  }

  console.log(id)
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '2em' }}>
      <Card sx={{ width: 900 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={`${project?.projectImg}`}
            alt={`${project?.title}`}
          />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2em', alignItems: 'center' }}>

                <Typography gutterBottom variant="h5" component="div">
                  {project?.title}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'row' }}>

                  <Typography gutterBottom variant="h6" color='success.main'>
                    {`0/ `}
                  </Typography>
                  <Typography gutterBottom variant="h6" color='gray'>
                    {`${project?.amount}`}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1em', alignItems: 'center' }}>
                <Tooltip title="Compartir como post">
                  <IconButton onClick={createPost} color='warning'>
                    <PostAddIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Contribuir como Coder">
                  <IconButton color='primary'>
                    <CodeOffOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Hacer contribución monetaria">
                  <IconButton color='error'>
                    <RocketLaunchOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
            <Divider textAlign="left" sx={{ my: '1em', color: 'success.main' }}>Description</Divider>
            <Typography variant="body2" color="text.secondary" textAlign='justify'>
              <div dangerouslySetInnerHTML={{ __html: project?.description }}  ></div>
            </Typography>

            <Divider textAlign="left" sx={{ my: '1em', color: 'error.main' }}>Risk</Divider>
            <Typography variant="body2" color="text.secondary">
              {project?.risk}
            </Typography>

          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions> */}
      </Card>
      <Stack sx={{ backgroundColor: '#edf2f4', width: 'calc(360px - 2em)', borderRadius: '0.8em', padding: '2em', height: 700 }}>
        <Typography variant="h6" color="initial">Developer team</Typography>
        <Divider sx={{ my: '1em' }} />
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5em', alignItems: 'center' }}>
            <Avatar
              alt={`${principalUserInfo?.userData.name}`}
              src={`${principalUserInfo?.userData.img}`}
            />
            <Box>
              <Typography variant="h6" color="initial">{`${principalUserInfo?.userData.name} ${principalUserInfo?.userData.lastName}`}</Typography>
              {/* <Typography variant="subtitle " color="initial">{`${principalUserInfo?.userData.name} ${principalUserInfo?.userData.lastName}`}</Typography> */}

            </Box>
          </Box>
          <Chip label='Principal owner' variant="outlined" color="info" size="small" deleteIcon={<DoneIcon />} />
        </Box>
        <Divider sx={{ my: '1em' }} />
        <Box>
          <Typography variant="h6" color="initial"></Typography>
        </Box>
      </Stack>
    </Stack>
  )
}

export default ProjectDetails