import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Container,
    Paper,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './FormStyling.css';

const FormComponent = ({ teamMemberCount }) => {
    const [imgData, setImgData] = useState(null);

    const formik = useFormik({
        initialValues: {
            teamMembers: Array(teamMemberCount).fill({ firstName: '', lastName: '', dateOfBirth: '' }),
        },
        validationSchema: Yup.object({
            teamMembers: Yup.array()
                .of(
                    Yup.object({
                        firstName: Yup.string().required('Required'),
                        lastName: Yup.string().required('Required'),
                        dateOfBirth: Yup.date().required('Required'),
                    })
                )
                .required('Required'),
        }),
        onSubmit: async (values) => {
            console.log('Form Submitted', values);
            await generateQrCodes(values.teamMembers);
            await sendFormData(values);
        },
    });

    // const generateQrCode = async (member) => {
    //     console.log(member, "member");
    //     const endpoint = `https://adityaiyer2k7.pythonanywhere.com/userdata/qr?fname=${member.firstName}&lname=${member.lastName}`;

    //     try {
    //         const response = await fetch(endpoint);
    //         console.log(response);
    //         const data = await response.blob();
    //         console.log(data);
    //         const imageObjectURL = URL.createObjectURL(data);
    //         setImgData(imageObjectURL);

    //         if (data.success) {
    //             // navigate('/dashboard');
    //         } else {
    //         }
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    const generateQrCodes = async (teamMembers) => {
        console.log('Generating QR Codes for team members', teamMembers);
        const promises = teamMembers.map(async (member) => {
            const endpoint = `https://adityaiyer2k7.pythonanywhere.com/userdata/qr?fname=${member.firstName}&lname=${member.lastName}`;
            try {
                const response = await fetch(endpoint);
                console.log(`Response for ${member.firstName} ${member.lastName}:`, response);
                const data = await response.blob();
                console.log(`Blob data for ${member.firstName} ${member.lastName}:`, data);
                const imageObjectURL = URL.createObjectURL(data);
                return { ...member, qrCode: imageObjectURL };
            } catch (error) {
                console.error("Error fetching data:", error);
                return { ...member, qrCode: null };
            }
        });
        const results = await Promise.all(promises);
        console.log('QR Code Results:', results);
        setImgData(results);
    };

    const sendFormData = async (formData) => {
        let utoken = localStorage.getItem('utoken')
        console.log("utoken",utoken)
        formData.utoken = utoken
        const endpoint = 'https://adityaiyer2k7.pythonanywhere.com/userdata/teamchange'; // Replace with your endpoint
        
        console.log('Sending form data to endpoint:', endpoint);
        console.log('Form data:', formData);

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
                
            const data = await response.json();
            console.log('Response from server:', data);

            if (data.success) {
                console.log('Form data successfully sent');
            } else {
                console.error('Failed to send form data');
            }
        } catch (error) {
            console.error('Error sending form data:', error);
        }
    };

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} className="formContainer">
                <Box p={4}>
                    <Typography variant="h5" gutterBottom>
                        Event Details
                    </Typography>
                    <Typography variant="body1">Some details about the event.</Typography>
                    <Typography variant="body1">Location: XYZ</Typography>
                    <Typography variant="body1">Date: 2024-07-01</Typography>
                    <Typography variant="body1">Time: 10:00 AM</Typography>
                    <Box my={4}>
                        <Typography variant="h6">Add Team Members</Typography>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2}>
                                {formik.values.teamMembers.map((member, index) => (
                                    <React.Fragment key={index}>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                fullWidth
                                                label={`Team Member ${index + 1} First Name`}
                                                name={`teamMembers[${index}].firstName`}
                                                value={member.firstName}
                                                onChange={formik.handleChange}
                                                error={
                                                    formik.touched.teamMembers &&
                                                    formik.touched.teamMembers[index] &&
                                                    Boolean(formik.errors.teamMembers && formik.errors.teamMembers[index]?.firstName)
                                                }
                                                helperText={
                                                    formik.touched.teamMembers &&
                                                    formik.touched.teamMembers[index] &&
                                                    formik.errors.teamMembers &&
                                                    formik.errors.teamMembers[index]?.firstName
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                fullWidth
                                                label={`Team Member ${index + 1} Last Name`}
                                                name={`teamMembers[${index}].lastName`}
                                                value={member.lastName}
                                                onChange={formik.handleChange}
                                                error={
                                                    formik.touched.teamMembers &&
                                                    formik.touched.teamMembers[index] &&
                                                    Boolean(formik.errors.teamMembers && formik.errors.teamMembers[index]?.lastName)
                                                }
                                                helperText={
                                                    formik.touched.teamMembers &&
                                                    formik.touched.teamMembers[index] &&
                                                    formik.errors.teamMembers &&
                                                    formik.errors.teamMembers[index]?.lastName
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                fullWidth
                                                label={`Team Member ${index + 1} Date of Birth`}
                                                name={`teamMembers[${index}].dateOfBirth`}
                                                type="date"
                                                InputLabelProps={{ shrink: true }}
                                                value={member.dateOfBirth}
                                                onChange={formik.handleChange}
                                                error={
                                                    formik.touched.teamMembers &&
                                                    formik.touched.teamMembers[index] &&
                                                    Boolean(formik.errors.teamMembers && formik.errors.teamMembers[index]?.dateOfBirth)
                                                }
                                                helperText={
                                                    formik.touched.teamMembers &&
                                                    formik.touched.teamMembers[index] &&
                                                    formik.errors.teamMembers &&
                                                    formik.errors.teamMembers[index]?.dateOfBirth
                                                }
                                            />
                                        </Grid>
                                    </React.Fragment>
                                ))}
                                <Grid item xs={12}>
                                    <Button color="primary" variant="contained" fullWidth type="submit">
                                        Submit
                                    </Button>
                                </Grid>
                                <img alt="sampleqr" src={imgData} />
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default FormComponent;
