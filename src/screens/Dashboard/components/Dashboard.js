// Dashboard.js

import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Deposits from './Deposits';
import EventList from './EventList';
import CopyRight from '../../../global/Copyright';
import AvatarComponent from './Avatar';

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [coachName, setCoachName] = useState('');
  const [school, setSchool] = useState('');
  const [event,setEvent] = useState(null)

  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      let storedCoachName = localStorage.getItem('coachName');
      let storedSchool = localStorage.getItem('school');

      if (storedCoachName && storedSchool) {
        setCoachName(storedCoachName);
        setSchool(storedSchool);
      } else {
        const utoken = localStorage.getItem('utoken');
        if (utoken) {
          try {
            const response = await fetch(`https://adityaiyer2k7.pythonanywhere.com/userdata?utoken=${utoken}`);
            const data = await response.json();
            if (data && data.userdata) {
              const fullName = `${data.userdata.fname} ${data.userdata.lname}`;
              setCoachName(fullName);
              setSchool(data.userdata.school);
              setEvent(data.userdata.events)
              localStorage.setItem('coachName', fullName);
              localStorage.setItem('school', data.userdata.school);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <Box sx={{ display: 'flex', }}>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={7}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'row', // Changed from 'column' to 'row'
                  alignItems: 'center', // Align items vertically centered
                  height: 240,
                }}
              >
                <AvatarComponent coachName={coachName} school={school} />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={5}>
              <Grid container spacing={2}> {/* Add a nested Grid container */}
                <Grid item xs={24} sm={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <Deposits events={event}/>
                  </Paper>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <Deposits type={"time"} />
                  </Paper>
                </Grid> */}
              </Grid>
            </Grid>

            {/* Recent EventList */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <EventList />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        {/* <CopyRight /> */}
      </Box>
    </Box>
  );
}
