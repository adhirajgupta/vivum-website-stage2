import React from 'react';
import { Dialog, DialogContent, DialogContentText, Button, Box, CircularProgress, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const LoadingDialog = ({ open, loading, message, onDownload, onClose, incompleteForm, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <DialogContentText>
                        {loading ? 'Uploading...' : message}
                    </DialogContentText>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                {incompleteForm && !loading && (
                    <Typography variant="body1" color="error" fontWeight="bold" mt={2}>
                        The form is incomplete. Are you sure you want to continue?
                    </Typography>
                )}
                <Box display="flex" justifyContent="center" mt={2}>
                    {loading ? (
                        <CircularProgress />
                    ) : incompleteForm ? (
                        <Button color="primary" variant="contained" onClick={onConfirm}>
                            Yes, I'm sure
                        </Button>
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