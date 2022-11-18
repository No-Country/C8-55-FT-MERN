//React
import React, { useRef } from 'react';

//MUI Components
import {
  Stack,
  CardMedia,
  Box,
  Typography,
  Button
} from "@mui/material";

//MUI Icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const styles = {
  article: {
    cursor: "pointer",
    margin: "20px",
    maxWidth: "320px"
  },
  frontCard: {
    position: "relative"
  },
  imgFront: {
    height: "100%",
    width: "100%"
  },
  icon: {
    color: "var(--color-complement-black)",
    fontSize: "30px"
  },
  descriptionIcon: {
    color: "var(--color-orange-base)",
    fontFamily: "var(--font-secondary)",
    padding: "4px"
  },
  hoverDescription: {
    backgroundColor: "var(--color-black-lofi)",
    bottom: 0,
    color: "white",
    display: "none",
    fontSize: "20px",
    height: "100%",
    left: 0,
    opacity: "0.7",
    padding: "10px",
    position: "absolute",
    right: 0,
    top: 0,
    transition: "all 5s",
    width: "100%"
  },
  proyectData: {
    alignItems: "center",
    backgroundColor: "var(--color-black-lofi)",
    bottom: "0",
    display: "flex",
    justifyContent: "space-evenly",
    opacity: "0.8",
    padding: "10px",
    position: "absolute",
    width: "100%"
  },
  displayDescription: {
    display: "block"
  },
  bottomContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px"
  },
  btnTechnology: {
    border: "solid 1px var(--color-orange-base)",
    borderRadius: "20px",
    color: "var(--color-orange-base)",
    fontSize: "12px",
    padding: "4px 8px"
  }
}

const CardProject = () => {

  const descriptionRef = useRef();

  const HandleMouseEnter = (ref) => {
    ref.current.style.display = "block";
  }

  const HandleMouseLeave = (ref) => {
    ref.current.style.display = "none";
  }

  return (
    <Stack sx={styles.article}>

      <Box sx={styles.frontCard}>
        <CardMedia
          sx={styles.imgFront}
          component="img"
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="green iguana"
          onMouseEnter={() => HandleMouseEnter(descriptionRef)}
        />
        <Box sx={styles.proyectData}>
          <Typography
            variant="h5"
            sx={{ color: "var(--color-gray-lofi)" }}>
            Re:Clothes
          </Typography>
          <Button
            sx={styles.btnTechnology}
            size="medium"
            disableElevation>
            technology
          </Button>
        </Box>
        <Box
          onMouseLeave={() => HandleMouseLeave(descriptionRef)}
          sx={styles.hoverDescription}
          ref={descriptionRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia illo debitis, suscipit nobis incidunt asperiores
          iste tempora vero sed, et porro, modi possimus delectus
        </Box>
      </Box>

      <Box sx={styles.bottomContainer}>
        <Box
          sx={{ display: "flex", alignItems: "flex-end" }}>
          <CardMedia
            sx={{ borderRadius: "40px", width: "40px", height: "40px" }}
            component="img"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="green iguana" />
          <Typography variant="small">
            name user
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          < ThumbUpIcon sx={styles.icon} />
          <Typography sx={styles.descriptionIcon}>
            4k
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          < ModeCommentIcon sx={styles.icon} />
          <Typography sx={styles.descriptionIcon}>
            4k
          </Typography>
        </Box>
      </Box>

    </Stack>
  );
}

export default CardProject;