import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Container, Paper } from '@mui/material';
import { useFormik } from 'formik';
import './FormStyling.css';
import { validationSchema } from './formValidationSchema.js';
import {  generateQrCodes, sendFormData } from './formHelpers.js';

import useFieldValues from './useFieldValues.js';
import { convertPathName } from '../../../Constants';

const FormComponent = ({ teamMemberCount, sport }) => {
    const [imgData, setImgData] = useState(null);

    const formik = useFormik({
        initialValues: {
            teamMembers: Array(teamMemberCount).fill({ firstName: '', lastName: '', dateOfBirth: '' }),
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log('Form Submitted', values);
            const qrCodes = await generateQrCodes(values.teamMembers);
            setImgData(qrCodes);
            await sendFormData(values, sport);
        },
    });

    useFieldValues(formik, sport);

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} className="formContainer">
                <Box p={4}>
                    <Typography variant="h5" gutterBottom>Event Details</Typography>
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
                                                error={Boolean(formik.errors.teamMembers?.[index]?.firstName)}
                                                helperText={formik.errors.teamMembers?.[index]?.firstName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                fullWidth
                                                label={`Team Member ${index + 1} Last Name`}
                                                name={`teamMembers[${index}].lastName`}
                                                value={member.lastName}
                                                onChange={formik.handleChange}
                                                error={Boolean(formik.errors.teamMembers?.[index]?.lastName)}
                                                helperText={formik.errors.teamMembers?.[index]?.lastName}
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
                                                error={Boolean(formik.errors.teamMembers?.[index]?.dateOfBirth)}
                                                helperText={formik.errors.teamMembers?.[index]?.dateOfBirth}
                                            />
                                        </Grid>
                                    </React.Fragment>
                                ))}
                                <Grid item xs={12}>
                                    <Button color="primary" variant="contained" fullWidth type="submit">
                                        Submit
                                    </Button>
                                </Grid>
                                {imgData && <img alt="sampleqr" src={imgData} />}
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default FormComponent;
    