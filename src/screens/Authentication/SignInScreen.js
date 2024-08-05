import * as React from 'react';
import { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  IconButton,
  InputAdornment,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import CopyRight from '../../global/Copyright';
import loginScreenImage from '../../images/loginscreenImage.png'; // Import the image

function NotificationDialog({ open, onClose }) {
  return (
    <Dialog open={open} >
      <DialogTitle>Need Help? </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please check your inbox for your email id and password.
          <br />
          Still can't find it? Write to us at &nbsp;
          <a href="mailto:vivum@tisb.ac.in" style={{ textDecoration: 'underline', color: 'inherit' }}>
            vivum@tisb.ac.in
          </a>.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Ok
        </Button>
       
      </DialogActions>
    </Dialog>
  );
}

export default function SignInSide() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      email,
      password,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async () => {
    console.log("pressed");
    const endpoint = `https://adityaiyer2k7.pythonanywhere.com/userdata/login?userid=${email}&pwdh=${password}`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);

      if (data.success) {
        localStorage.setItem('utoken', data?.utoken);
        console.log("data from signinscreen", data)
        navigate('/dashboard');
      } else {
        setError('Authentication failed. Please check your email and password.');
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError('An error occurred while trying to log in. Please try again later.');
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${loginScreenImage})`, // Use the imported image here
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {error && <Alert severity="error">{error}</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Button variant="text" onClick={handleClickOpen} style={{ textDecoration: 'underline', textTransform: 'none' }}>
                  Forgot password?
                </Button>
              </Grid>
              <Grid item>
                <Button variant="text" onClick={handleClickOpen} style={{ textDecoration: 'underline', textTransform: 'none' }}>
                  Don't have an account? Sign up
                </Button>
              </Grid>
            </Grid>
            <CopyRight sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
      <NotificationDialog open={open} onClose={() => handleClose()} />
    </Grid>
  );
}
