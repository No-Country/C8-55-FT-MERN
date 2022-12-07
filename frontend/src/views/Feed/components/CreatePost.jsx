import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Stack, Typography, Button } from '@mui/material';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import axios from 'axios';
import getConfig from '../../../config';


const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike', 'link', "image"]
    ]
}

const CreatePost = ({createPostVisibility, getAllPosts}) => {
    const URL_BASE = import.meta.env.VITE_REACT_APP_API_URI


    const { quill, quillRef } = useQuill({modules});
    const [postValue, setPostValue] = useState()

    useEffect(() => {
      if (quill) {
        quill.on('text-change', () => {
            setPostValue(quillRef.current.firstChild.innerHTML)
        })
      }
    }, [quill])

    const createPost = () => {

        const body = {
            text: postValue.toString()
        }
            axios.post(`${URL_BASE}/post/create`, body, getConfig())
            .then(res => {
                quillRef.current.firstChild.innerHTML = ''
                return getAllPosts()
            })
            .catch(err => console.log(err.data))
    }
    
    return (
        <div style={{ width: '100%', minHeight:20, maxHeight: 300, display: createPostVisibility, marginBottom: 70}}>
            <div ref={quillRef} />

            <Button onClick={createPost} variant="text" color="primary">
              Create Post
            </Button>
        </div>
    )
}

export default CreatePost