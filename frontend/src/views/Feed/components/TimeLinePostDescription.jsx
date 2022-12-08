/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import axios from 'axios';
import { Button } from '@mui/material';
import getConfig from '../../../config';
import { useNavigate } from 'react-router-dom';

export default function TimeLinePostDescription({post}) {
    const URL_BASE = import.meta.env.VITE_REACT_APP_API_URI

    const [text, setText] = useState()
const navigate= useNavigate()

    const createComment = (postId) => {
        const body = {
            postId,
            text
        }
        axios.post(`${URL_BASE}/comment/`, body, getConfig())
        .then(res => console.log(res.data))
        .catch(err => console.log(err.data))
        // console.log(body)
    }


    // console.log(post)
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 300,
        '--Card-radius': (theme) => theme.vars.radius.xs,
        backgroundColor: 'white'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
        <Box
        onClick={() => navigate(`/profile/${post.userId._id}`)}
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: '-2px',
              borderRadius: '50%',
              background:
                'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
            },
          }}
        >
          <Avatar
          alt={`${post.userId.name} ${post.userId.lastName}`}
            size="sm"
            src={`${post.userId.profileImage}`}
            // sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
          />
        </Box>
        <Typography fontWeight="lg">{post.userId.name} {post.userId.lastName}</Typography>
        <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
          <MoreHoriz />
        </IconButton>
      </Box>
      <CardOverflow>
        {/* <AspectRatio>
          <img src={`${post.image}`} alt="" loading="lazy" />
        </AspectRatio> */}
      </CardOverflow>

      {/* <Link
        component="button"
        underline="none"
        fontSize="sm"
        fontWeight="lg"
        textColor="text.primary"
      >
        8.1M Likes
      </Link> */}
      <Typography fontSize="sm">
   
      <div dangerouslySetInnerHTML={{ __html: post.text }}  ></div>
      </Typography>

      <Link
        component="button"
        underline="none"
        fontSize="10px"
        sx={{ color: 'text.tertiary', my: 0.5 }}
      >
        2 DAYS AGO
      </Link>
      <CardOverflow   sx={{ p: 'var(--Card-padding)', display: 'flex' }}>
        <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
          <Face />
        </IconButton>
        <Input
        onChange={(event)=> setText(event.target.value)}
        id= 'commentTimeline'
          variant="plain"
          size="sm"
          placeholder="Add a comment…"
          sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }}
        />
        <Button variant='text' onClick={() => createComment(post._id)}>
          Post
        </Button>
      </CardOverflow>
    </Card>
  );
}