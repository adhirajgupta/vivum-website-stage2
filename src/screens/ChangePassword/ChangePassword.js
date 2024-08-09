import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CopyRight from '../../global/Copyright';

export default function ChangePassword() {
  const [errors, setErrors] = React.useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const currentPassword = data.get('currentPassword');
    const newPassword = data.get('newPassword');
    const confirmPassword = data.get('confirmPassword');

    let valid = true;
    const newErrors = { newPassword: '', confirmPassword: '' };

    if (newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
      valid = false;
    }

    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'New password and confirm password do not match';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log({
        currentPassword,
        newPassword,
        confirmPassword,
      });

      // Call your helper function here
      changePasswordHelper(currentPassword, newPassword);
    }
  };

  const changePasswordHelper = (currentPassword, newPassword) => {
    // Implement your change password logic here
    console.log('Password change logic goes here');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="currentPassword"
            label="Current Password"
            type="password"
            id="currentPassword"
            autoComplete="current-password"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="newPassword"
            label="New Password"
            type="password"
            id="newPassword"
            autoComplete="new-password"
            error={!!errors.newPassword}
            helperText={errors.newPassword}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm New Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Change Password
          </Button>
          <CopyRight />
        </Box>
      </Box>
    </Container>
  );
}
