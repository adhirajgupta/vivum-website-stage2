import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const CopyRight = (props) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 0,
        margin: 0,
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://vivum.tisb.org/#/information/overview">
          Vivum
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

export default CopyRight;
