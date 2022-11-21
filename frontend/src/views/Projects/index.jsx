import React from 'react';
import CardProject from "./components/ProjectCard/CardProject";
import { Stack, Avatar } from "@mui/material";

const Projects = () => {
  return (
    <Stack sx={{display: "flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "center", overflow: 'scroll'}}>
      < CardProject />
      < CardProject />
      < CardProject />
      < CardProject />
      < CardProject />
      < CardProject />
      < CardProject />
      < CardProject />
    </Stack>
  )
}

export default Projects;