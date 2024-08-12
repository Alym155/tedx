import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../components/Nav';

// Define the styles in a separate object
const styles = {
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '60vh', // Adjust the height as needed
    overflow: 'hidden',
    mb: 6, // Adds margin-bottom to create space between the image and text
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the image covers the container without distortion
  },
  textContainer: {
    textAlign: 'center',
    mb: 4,
  },
  section: {
    marginBottom: '40px',
    textAlign: 'left',
  },
  mainHeading: {
    fontWeight: 'bold',
    fontSize: '2rem', // Adjust size as needed
    color: '#9E2828', // Adjust color as needed
    marginBottom: '10px',
    fontFamily: 'Roboto Mono, monospace', // Applies the Roboto Mono font
  },
  paragraph: {
    fontSize: '1rem', // Adjust size as needed
    lineHeight: '1.6',
    color: '#000000', // Adjust color as needed
    marginBottom: '10px',
    fontFamily: 'Roboto Mono, monospace', // Applies the Roboto Mono font
  },
  finalImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover', // Ensures the image covers the container without distortion
    mt: 4, // Adds margin-top to create space between the text and image
  },
  gradientContainer: {
    width: '100%', // Full width of the screen
    height: '252px',
    background: 'linear-gradient(to right, red, black)', // Gradient from red to black
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    mt: 4, // Margin-top to create space from the previous section
    position: 'relative',
  },
  gradientText: {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#ffffff', // White text color for contrast
    mb: 2,
    fontFamily: 'Roboto Mono, monospace',
  },
  button: {
    fontWeight: 'bold',
    fontSize: '1rem', // Adjust size as needed
    color: '#ffffff', // Button text color
    backgroundColor: '#000000', // Button background color
    padding: '10px 20px', // Button padding
    borderRadius: '5px', // Button border radius
    textDecoration: 'none', // Remove underline from link
    '&:hover': {
      backgroundColor: '#444', // Darker button color on hover
    },
  },
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
  buttonFixed: {
    position: 'fixed',
    bottom: '60px', // Adjust this value based on the height of your footer
    right: '20px',
    fontWeight: 'bold',
    fontSize: '1rem', // Adjust size as needed
    color: '#ffffff', // Button text color
    backgroundColor: '#000000', // Button background color
    padding: '10px 20px', // Button padding
    borderRadius: '5px', // Button border radius
    textDecoration: 'none', // Remove underline from link
    '&:hover': {
      backgroundColor: '#444', // Darker button color on hover
    },
    // zIndex: 1000, // Ensures button is above other content
  },
};

function HomePage() {
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={styles.imageContainer}>
        <Box
          component="img"
          src="background.jpg" // Replace with your image path
          alt="Event"
          sx={styles.image}
        />
      </Box>
      <Container sx={styles.textContainer}>
        <Box sx={styles.section}>
          <Typography variant="h2" component="div" sx={styles.mainHeading}>
            About TEDxYouth Kafr El-Sheikh STEM
          </Typography>
          <Typography component="p" sx={styles.paragraph}>
            Welcome to TEDxYouth Kafr ElSheikh STEM—a branch of the TED organization dedicated to sharing and curating ideas worth spreading in the realms of Science, Technology, Engineering, and Mathematics (STEM). Our goal is to nurture innovation, promote interdisciplinary collaboration, and inspire the next generation of problem-solvers and creative thinkers.
          </Typography>
          <Typography component="p" sx={styles.paragraph}>
            At TEDxYouth Kafr ElSheikh STEM, we organize engaging events that feature forward-thinking speakers, industry leaders, educators, and curious minds from various disciplines. We aim to spark dialogue, present cutting-edge research, and delve into the boundless opportunities that STEM offers in shaping the future.
          </Typography>
          <Typography component="p" sx={styles.paragraph}>
            Join our vibrant community to stay updated on upcoming TEDxYouth Kafr ElSheikh STEM events, engage in meaningful discussions, and connect with professionals driving knowledge and innovation forward. Discover pioneering research, revolutionary technologies, and inspiring stories that highlight the transformative impact of STEM in driving positive change. Whether you’re a scientist, engineer, technologist, educator, entrepreneur, or simply passionate about STEM, TEDxYouth Kafr ElSheikh STEM is your gateway to turning ideas into action and exploring cutting-edge advancements that are making a difference in our world.
          </Typography>
        </Box>
        <Box sx={styles.section}>
          <Typography variant="h2" component="div" sx={styles.mainHeading}>
            About TEDx
          </Typography>
          <Typography component="p" sx={styles.paragraph}>
            TEDx events bring the TED experience to local communities through independently organized gatherings. These events combine TED Talk videos with live speakers to spark discussion and connection on a range of topics. While TED provides overall guidance, each TEDx event is self-organized and tailored to its local audience, fostering innovation and sharing ideas worth spreading.
          </Typography>
        </Box>
        <Box sx={styles.section}>
          <Typography variant="h2" component="div" sx={styles.mainHeading}>
            About TED
          </Typography>
          <Typography component="p" sx={styles.paragraph}>
            TED (Technology, Entertainment, Design) is a global platform that shares "ideas worth spreading" through engaging talks by experts across various fields. Founded in 1984, TED features TED Talks, TEDx events (locally organized gatherings), TED-Ed (educational content), and TED Fellows (supporting emerging leaders). TED aims to inspire and spark conversations that drive positive change worldwide.
          </Typography>
        </Box>
        <Box
          component="img"
          src="location1.jpg" // Replace with your image path
          alt="TEDxYouth Event"
          sx={styles.finalImage}
        />
      </Container>
      <Box sx={styles.gradientContainer}>
        <Typography variant="h2" component="div" sx={styles.gradientText}>
          Book Your Ticket Now
        </Typography>
        <Button
          component={Link}
          to="/registration"
          sx={styles.button}
        >
          Register
        </Button>
      </Box>
      
      <Box sx={styles.footer}>
        <Typography variant="body2">
          © 2024 TEDxYouth Kafr El-Sheikh STEM
        </Typography>
      </Box>
    </>
  );
}

export default HomePage;
