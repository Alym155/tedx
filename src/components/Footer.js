import React from 'react';
import { Typography, Box } from '@mui/material';

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333', // Footer background color
    color: '#fff', // Footer text color
    textAlign: 'center',
    padding: '10px 0',
    zIndex: 1000, // Ensures footer is above other content
  },
};

function Footer() {
  return (
    <Box sx={styles.footer}>
      <Typography variant="body2">
        © 2024 TEDxYouth Kafr El-Sheikh STEM
      </Typography>
    </Box>
  );
}

export default Footer;
