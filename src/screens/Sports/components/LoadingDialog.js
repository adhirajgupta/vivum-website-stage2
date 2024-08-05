import React from 'react';
import { Dialog, DialogContent, DialogContentText, Button, Box, CircularProgress, Typography } from '@mui/material';

const LoadingDialog = ({ open, loading, message, onDownload }) => {
    return (
        <Dialog open={open}>
            <DialogContent>
                <DialogContentText>
                    {loading ? 'Uploading...' : 'Please download the PDF for entry.'}
                </DialogContentText>
                <Box display="flex" justifyContent="center" mt={2}>
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <Button color="primary" variant="contained" onClick={onDownload}>
                            Download PDF
                        </Button>
                    )}
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default LoadingDialog;
