import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike', 'link']
  ]
}

const DescriptionForm = () => {

  const { quill, quillRef } = useQuill({ modules });
  const [postValue, setPostValue] = useState()

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        setPostValue(quillRef.current.firstChild.innerHTML)
      })
    }
  }, [quill])


  return (
    <Stack sx={{ display: 'flex', gap: '1em' }}>
      <Box sx={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
        <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '1em', width: 700 }}>
          <TextField
            fullWidth
            label='Title'
            size='small'
            required />
          <TextField
            fullWidth
            label='subtitle'
            size='small'
            required />
        </Box>
        <Box sx={{ width: 700, padding: '1em', backgroundColor: '#23222F', borderRadius: '0.5em', textAlign: 'justify' }}>
          <Typography variant="body1" color="white">Se trata del título y un subtítulo opcional. Debe mostrar de forma clara y directa la esencia de tus ideas.
            Aparecerá visibile en cualquier publicación donde se lo incluya, también en la vista de proyectos así como el perfil propio del proyecto y en el de los participantes.</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
        <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '1em', width: 700 }}>
          <div style={{ width: '100%', height: 100, marginBottom: '2.5em' }}>
            <div ref={quillRef} />
          </div>
          <TextField
            fullWidth
            label='risks and challenges'
            size='small' />
        </Box>
        <Box sx={{ width: 700, padding: '1em', backgroundColor: '#23222F', borderRadius: '0.5em', textAlign: 'justify' }}>
          <Typography variant="body1" color="white">Describe a más profundidad las ideas de tus proyectos, desarrollada por ti y por gente de la comunidad. Como se llevaría a cabo el proyecto, sus objetivos y ambiciones a perseguir.
            Intenta incluir todo aquello que consideres necesario para una persona que entra en la conversación y el debate.

            Incluye también los riesgo y desafíos vistos  </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
        <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '1em', width: 700 }}>

          <TextField
            fullWidth
            label='URL'
            size='small' />
        </Box>
        <Box sx={{ width: 700, padding: '1em', backgroundColor: '#23222F', borderRadius: '0.5em', textAlign: 'justify' }}>
          <Typography variant="body1" color="white">Incluye la url donde se pueda ver tu proyecto desplegado</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
        <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '1em', width: 700 }}>

          <Button variant="contained" component="label">
            Upload Image
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Box>
        <Box sx={{ width: 700, padding: '1em', backgroundColor: '#23222F', borderRadius: '0.5em', textAlign: 'justify' }}>
          <Typography variant="body1" color="white">La imagen debe representar lo mejor posible al proyecto y debe apoyar al título, subtítulo y descripción</Typography>
        </Box>
      </Box>

    </Stack>
  )
}

export default DescriptionForm