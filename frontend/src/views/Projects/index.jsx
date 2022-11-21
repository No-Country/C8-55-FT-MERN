import React from 'react';
import CardProject from "./components/ProjectCard/CardProject";
import TabsProjects from './components/Tabs/TabsProjects';
import { Stack } from "@mui/material";

const Projects = () => {
  return (
    <Stack sx={{display: "flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "center"}}>
      < TabsProjects />
    </Stack>
  )
}

export default Projects;