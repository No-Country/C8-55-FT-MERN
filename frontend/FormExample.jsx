import React from 'react'
import { TextField, Button } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";

import {
    initialValues,
    valuesSchema,
    formSchema
} from './src/utils/formValidation';

const FormExample = () => {

    const ex = [1, 2, 3, 4, 5]

     const example = ex.reverse()

     console.log(example)

    const { name, email } = valuesSchema;

    let initValues = {
        name: initialValues.name,
        email: initialValues.email
    }

    const handleSubmit = (e) => {
        console.log("submit")
    }


    return (
        <Formik
            initialValues={initValues}
            validationSchema={formSchema({ name, email })}
            onSubmit={(e, {setValues}) => handleSubmit(e, setValues)}
        >
            {({ errors, touched, handleChange, values }) => {
                // console.log(values)
                return (
                <Form>
                    <TextField
                        label="name"
                        id="name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                    />
                    
                    <TextField
                        label="email"
                        id="email"
                        type="text"
                        name="email"
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                    />

                    <Button
                        variant="outlined"
                        type="submit"
                    >
                        Submit
                    </Button>

                </Form>)
            }}

        </Formik>
    )
}

export default FormExample