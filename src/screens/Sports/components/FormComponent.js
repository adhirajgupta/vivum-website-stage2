import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Container, Paper, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import './FormStyling.css';
import { generateQrCodes, sendFormData } from './formHelpers';
import useFieldValues from './useFieldValues';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import LoadingDialog from './LoadingDialog'; // Import the LoadingDialog component

const FormComponent = ({ teamMemberCount, sport, eventData }) => {
    const [imgData, setImgData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [dataLoading, setDataLoading] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);
    const [incompleteForm, setIncompleteForm] = useState(false);
    const [showDownloadButton, setShowDownloadButton] = useState(false);

    const formik = useFormik({
        initialValues: {
            teamMembers: Array(teamMemberCount).fill({ firstName: '', lastName: '', dateOfBirth: '' }),
        },
        validateOnChange: false, // Disable validation on change
        validateOnBlur: false, // Disable validation on blur
        onSubmit: async (values) => {
            setLoading(true);
            setMessage("");
            console.log('Form Submitted', values);
            const qrCodes = await generateQrCodes(values.teamMembers, sport);
            setImgData(qrCodes);
            await sendFormData(values, sport);
            setLoading(false);
            setMessage("Please download the PDF for entry.");
            setOpenDialog(true);

            // Check if the form is complete
            const isComplete = values.teamMembers.every(member => member.firstName && member.lastName && member.dateOfBirth);
            setIncompleteForm(!isComplete);

            if (isComplete) {
                setShowDownloadButton(true);
            }
        },
    });

    useFieldValues(formik, sport, setDataLoading);

    const generatePDF = () => {
        const doc = new jsPDF();
        const imgWidth = 70;
        const imgHeight = 70;
        const margin = 20;
        const startX = 10;
        let startY = 10;

        doc.text("Team Members QR Codes", startX, startY);
        startY += margin;

        imgData.forEach((member, index) => {
            const yPos = startY + (index * (imgHeight + margin));

            if (yPos + imgHeight + margin > doc.internal.pageSize.height) {
                doc.addPage();
                startY = 10;
            }

            doc.text(`Member ${index + 1}`, startX, startY);
            if (member.qrCode) {
                const qrImage = new Image();
                qrImage.src = member.qrCode;
                doc.addImage(qrImage, 'PNG', startX, startY + 10, imgWidth, imgHeight);
            }
            doc.text(`${member.firstName} ${member.lastName}`, startX + imgWidth + 20, startY + 25);

            startY += imgHeight + margin;
        });

        doc.save("team_members_qr_codes.pdf");
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleConfirm = () => {
        setShowDownloadButton(true);
        setIncompleteForm(false);  // Set this to false to ensure the download button shows up
    };

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} className="formContainer">
                <Box p={4}>
                    <Typography variant="h5" gutterBottom>Event Details</Typography>
                    <Typography variant="body1">Event Name: {eventData?.name || "TBD"}</Typography>
                    <Typography variant="body1">Location: {eventData?.location || "TBD"}</Typography>
                    <Typography variant="body1">Date: {eventData?.date || "TBD"}</Typography>
                    <Typography variant="body1">Time: {eventData?.time || "TBD"}</Typography>
                    <Typography variant="body1">Description: {eventData?.description || "No description available"}</Typography>
                    <Box my={4}>
                        <Typography variant="h6">Add Team Members</Typography>
                        {dataLoading ? (
                            <Box display="flex" justifyContent="center" mt={2}>
                                <CircularProgress />
                            </Box>
                        ) : (
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
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <TextField
                                                    fullWidth
                                                    label={`Team Member ${index + 1} Last Name`}
                                                    name={`teamMembers[${index}].lastName`}
                                                    value={member.lastName}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
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
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                        </React.Fragment>
                                    ))}
                                    <Grid item xs={12}>
                                        <Button color="primary" variant="contained" fullWidth type="submit">
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Box>
                </Box>
            </Paper>
            <LoadingDialog
                open={openDialog}
                loading={loading}
                message={message}
                onDownload={generatePDF}
                onClose={handleCloseDialog}
                incompleteForm={incompleteForm}
                onConfirm={handleConfirm}
            />
        </Container>
    );
};

export default FormComponent;