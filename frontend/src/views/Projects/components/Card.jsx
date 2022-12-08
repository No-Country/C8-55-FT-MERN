import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Avatar, Button, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BasicCard({project}) {

    const hour = new Date(project.createdAt)

   const navigate = useNavigate()


  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography variant='h6' fontSize="md" sx={{ mb: 0.5 }}>
     <strong>{project.title}</strong>  
      </Typography>
      <Typography level="body2">Creado: {hour.toLocaleString()}</Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
      <Avatar
      variant="rounded"
        src={project.projectImg}
        alt={project.title}
      />
     
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Cantidad a recaudar:</Typography>
          <Typography color='success' fontSize="lg" fontWeight="lg">
            {project.amount}
          </Typography>
        </div>
        <Button
        onClick={() => navigate(`/project/${project._id}`)}
          variant="outlined"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Explorar
        </Button>
      </Box>
    </Card>
  );
}