import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {Box, Button, TextField, styled} from "@mui/material"

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


const TextFieldContactsPersonData = styled((props) => <TextField {...props} />)(({ theme }) => ({
    marginRight: '10px',
    
    [theme.breakpoints.up('tablet')]: {
        width: '250px',
    },

    [theme.breakpoints.up('laptop')]: {
        width: '300px'
    },
  
  }));

const TextFieldContacts = styled((props) => <TextField {...props} />)(({ theme }) => ({
    width: '350px',
    display: 'block',
  
    [theme.breakpoints.up('tablet')]: {
        width: '450px'
    },

    [theme.breakpoints.up('laptop')]: {
        width: '600px'
    },
  
  }));

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
        <Box >
            <form onSubmit={formik.handleSubmit}>
                <TextFieldContactsPersonData 
                    id="name"
                    name="name"
                    label="Name"
                    margin="normal"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextFieldContactsPersonData 
                    id="email"
                    name="email"
                    label="Email"
                    margin="normal"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextFieldContacts 
                    id="message"
                    name="message"
                    label="Message"
                    type="message"
                    multiline
                    fullWidth
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

