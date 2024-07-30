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
import { useFormik, FieldArray } from 'formik';
import * as Yup from 'yup';
import './FormStyling.css';

const FormComponent = ({ teamMemberCount }) => {

    const [imgData,setImgData] = useState(null)

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
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const generateQrCode = async() => {
        const endpoint = `https://adityaiyer2k7.pythonanywhere.com/userdata/qr?fname=${"aditya"}&lname=${"gupta"}`;

    try {
      const response = await fetch(endpoint);
      console.log(response)
      const data = await response.blob();
      console.log(data);
      const imageObjectURL = URL.createObjectURL(data);
      setImgData(imageObjectURL)

      if (data.success) {
        // navigate('/dashboard');
      } else {
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    }

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
                                    <>
                                            {/* <Typography>
                                                {` Team Member ${index}`}
                                            </Typography> */}
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
                                    </>
                                ))}
                                <Grid item xs={12}>
                                    <Button color="primary" variant="contained" fullWidth type="submit" onClick={()=>generateQrCode()}>
                                        Submit
                                    </Button>
                                </Grid>
                                <img alt="sampelqr" src={imgData}/>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default FormComponent;
