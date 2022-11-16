import React, { useEffect, useState } from 'react'
import { Stack, Box, Divider, CardMedia, Typography } from '@mui/material'
import axios from 'axios'


const CommentDetails = ({comment}) => {

    const [commentDetails, setCommentDetails] = useState()
console.log(comment)

    useEffect(() => {
      axios.get( `http://localhost:3000/comment/${comment}`)
      .then(res => {console.log(res.data)})
      .catch(err => console.log(err))
    }, [])
    

    return (
        <Box p='1em' pr='0' sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ maxWidth: 40, borderRadius: '100%', overflow: 'hidden' }}>
                <CardMedia
                    component="img"
                    height="40"
                    width="40"
                    image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="green iguana"
                />
            </Box>
            <Box ml='0.5em' sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="initial"><strong>Federico Valdez</strong></Typography>
                    <Typography variant="body2" color="gray">12:00am, 13 nov</Typography>
                </Box>
                <Box my='0.3em' p='0.8em' sx={{ width: '100%', height: 'auto', minHeight: '1em', borderRadius: '0.3em', backgroundColor: '#ffffff98', boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)' }}>
                    sdfsdfsdfsdsfsdfsdfsdfnskdjfsdklfskdnfs lkdnflsdnflsndfsndkfsndklfnsdlfknsldkfsdf jwebfkjadbfkjbdfkjsbdfkjsbdkfjbsdkfbskjdfbskjbdf

                </Box>
            </Box>
        </Box>
    )
}

export default CommentDetails