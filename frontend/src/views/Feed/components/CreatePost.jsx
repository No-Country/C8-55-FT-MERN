import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Stack, Typography } from '@mui/material';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme



const CreatePost = ({createPostVisibility}) => {

    const { quill, quillRef } = useQuill();


    return (
        <div style={{ width: '100%', minHeight:20, maxHeight: 300, display: createPostVisibility, marginBottom: 70}}>
            <div ref={quillRef} />
        </div>
    )
}

export default CreatePost