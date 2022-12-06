import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {Box, Button, TextField} from "@mui/material"

const validationSchema = yup.object({
    name: yup
        .string('Enter your Name')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    message: yup
        .string('Enter your Message').required('Message is required'),
});

const ContactsForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values) => {
            // eslint-disable-next-line no-console
            console.log(values)
        },
    });

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <TextField sx={{ width: '300px' }}
                    id="name"
                    name="name"
                    label="name"
                    margin="normal"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField sx={{ marginLeft: '10px', width: '300px' }}
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    margin="normal"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField sx={{ width: '610px' }}
                    id="message"
                    name="message"
                    label="Message"
                    type="message"
                    multiline
                    margin="normal"
                    rows={6}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                />
                <Button margin="normal" sx={{ display: 'block', marginTop: '15px' }} color="primary" type="submit">
                    Send
                </Button>
            </form>
        </Box>
    );
}

export default ContactsForm;

