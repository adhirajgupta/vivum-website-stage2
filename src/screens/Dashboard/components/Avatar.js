
import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const AvatarComponent = ({ coachName, school }) => {
  // Function to generate initials from the name
  const getInitials = (name) => {
    const namesArray = name.split(' ');
    if (namesArray.length > 1) {
      return namesArray[0][0] + namesArray[1][0];
    }
    return namesArray[0][0];
  };

  return (
    <>
      <Avatar
        style={{
          height: '100%',
          width: '35%',
          display: 'flex',
          backgroundColor: "#7b0101",
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontSize: {
              xs: '3rem', // Adjust the font size for small screens
              sm: '5rem',
              md: '7rem',
              lg: '9rem', // Adjust the font size as needed
            },
            fontFamily: 'Roboto, sans-serif', // Default font in create-react-app
            color: '#fff' // Ensures the initials are visible on the background color
          }}
        >
          {coachName ? getInitials(coachName) : 'NA'}
        </Typography>
      </Avatar>

      <Box sx={{ ml: 2 }}> {/* Add a margin-left */}
        <Typography
          variant="h4" // Adjust the variant for smaller font size
          component="div"
          sx={{
            fontWeight: 'bold',
            fontSize: {
              xs: '2rem', // Adjust the font size for small screens
              sm: '2.5rem',
              md: '3rem',
              lg: '4rem', // Adjust the font size as needed
            },
            verticalAlign: 'top',
          }}
        >
          {coachName || 'Your Name'}
        </Typography>
        <Typography
          variant="h5" // Adjust the variant for smaller font size
          component="div"
          sx={{
            fontWeight: 'bold',
            fontSize: {
              xs: '1.5rem', // Adjust the font size for small screens
              sm: '2rem',
              md: '2.5rem',
              lg: '3rem', // Adjust the font size as needed
            },
            color: 'text.secondary',
            textTransform: 'uppercase' // Make the text all caps
          }}
        >
          {school || 'Your subtitle text'}
        </Typography>
      </Box>
    </>
  );
};

export default AvatarComponent;
