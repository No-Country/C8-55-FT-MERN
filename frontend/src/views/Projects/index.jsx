import React, { useEffect, useState } from 'react';
import CardProject from "./components/ProjectCard/CardProject";
import TabsProjects from './components/Tabs/TabsProjects';
import { Divider, Stack, Typography } from "@mui/material";
import FormVertical from './CreateProject/components/FormVertical';
import BasicCard from './components/Card';
import axios from 'axios';
import getConfig from '../../config';

const Projects = () => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_API_URI

  const [projects, setProjects] = useState()

  useEffect(() => {
    axios.get(`${URL_BASE}/project/all_projects`, getConfig())
      .then(res => setProjects(res.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <Stack>
      <Typography variant="h4" color="initial">Projects</Typography>
      <Divider sx={{ my: '1em' }} />
      <Stack sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "2em", maxHeight: 700, mb: '4em', overflow: 'scroll' }}>
        {projects && projects.map(project => <BasicCard key={project._id} project={project} />
        )}

      </Stack>
    </Stack>
  )
}

export default Projects;