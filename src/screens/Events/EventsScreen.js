import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import EventComponent from './components/Card';

// Generate Event Data
function createEvent(id, date, sport, location, description) {
  return { id, date, sport, location, description };
}

const eventData = [
  createEvent(
    0,
    '2024-07-01',
    'Football',
    'Location 1',
    'Description for Event 1. Lots of details about this event.',
  ),
  createEvent(
    1,
    '2024-07-02',
    'Basketball',
    'Location 2',
    'Description for Event 2. Lots of details about this event.',
  ),
  createEvent(
    2,
    '2024-07-03',
    'Tennis',
    'Location 3',
    'Description for Event 3. Lots of details about this event.',
  ),
];

export default function Events() {


  const [events, setEvents] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const utoken = localStorage.getItem('utoken');
      if (utoken) {
        try {
          const response = await fetch(`https://adityaiyer2k7.pythonanywhere.com/userdata?utoken=${utoken}`);
          const data = await response.json();
          setEvents(data.userdata.events)
          // data.map(val,index => {
          //   crea
          // })
          console.log(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        console.error('No utoken found in localStorage');
      }
    };

    fetchUserData();
  }, []);

  return (
    <Container>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <EventComponent events={events} navigate={navigate} />
        </Paper>
      </Grid>
    </Container>
  );
}
