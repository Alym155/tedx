import React from 'react';
import RegistrationPage from "../components/Form";
import Nav from "../components/Nav";
import Footer from "../components/Footer"; // Import the Footer component
import { Container } from '@mui/material';

function Registration() {
    return ( 
        <>
        <Nav/>
        <Container sx={{ paddingTop: '80px', paddingBottom: '60px' }}>
            <RegistrationPage/>
        </Container>
        <Footer /> {/* Add Footer here */}
        </>
     );
}

export default Registration;
