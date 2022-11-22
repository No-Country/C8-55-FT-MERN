import { Stack, Box, Typography, IconButton, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreatePost from './components/CreatePost'
import PostShared from './components/PostShared'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'
import getConfig from '../../config';
import { CloudinaryContext, Image } from 'cloudinary-react'

const Feed = () => {

  const [createPostVisibility, setCreatePostVisibility] = useState('none')
  const [posts, setPosts] = useState()
  const [image, setImage] = useState()

  const addPost = () => {
    if (createPostVisibility === 'none') {
      setCreatePostVisibility('inline')
    } else {
      setCreatePostVisibility('none')
    }
  }


  useEffect(() => {
    axios.get('http://localhost:3000/post/all_posts', getConfig())
      .then(res => {
        setPosts(res.data.posts)
      })
      .catch(err => console.log(err))
  }, [])

  const submitImage = () => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'rbzpjt8a')
    data.append('cloud_name', 'da8xnpdpx')

    axios.post('https://api.cloudinary.com/v1_1/da8xnpdpx/image/upload', data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  return (
    <Stack>
      <Stack sx={{ width: '600px', display: 'flex', gap: '1em' }}>
        <CloudinaryContext cloudName="da8xnpdpx">
          <div>
            <Image publicId="cld-sample" width="50" />
          </div>
          <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
          <Button onClick={submitImage} variant="text" color="primary">
            UPLOAD
          </Button>

        </CloudinaryContext>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <Typography variant="h6" color="initial">Create post</Typography>
          <IconButton color='success' onClick={addPost}>
            <AddIcon />
          </IconButton>
        </Box>

        <CreatePost createPostVisibility={createPostVisibility} />

        <Stack sx={{ display: 'flex', gap: '1em', overflow: 'scroll', maxHeight: 700, paddingBottom: '8em' }}>
          {posts && posts.map(post => <PostShared key={post._id} post={post} />)}

        </Stack>
      </Stack>
    </Stack>
  )
}

export default Feed