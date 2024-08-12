import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, FormControl, InputLabel, MenuItem, Select, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled button with background color #9E2828
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#9E2828',
  color: 'white',
  '&:hover': {
    backgroundColor: '#7a1e1e', // Darker shade on hover
  },
}));

// Custom styled text field with border color #9E2828
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: '#9E2828', // Label color
  },
  '& .MuiInputBase-root': {
    color: 'black', // Input text color
    borderColor: '#9E2828', // Border color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#9E2828', // Border color
    },
    '&:hover fieldset': {
      borderColor: '#7a1e1e', // Darker shade on hover
    },
  },
}));

// Custom styled menu item with color #9E2828
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: '#9E2828',
  '&:hover': {
    backgroundColor: '#fce4e4', // Light red background on hover
  },
}));

function RegistrationPage() {
  const [tickets, setTickets] = useState('');
  const [idFiles, setIdFiles] = useState([]);
  const [receiptFiles, setReceiptFiles] = useState([]);
  const [coupon, setCoupon] = useState('');
  const [price, setPrice] = useState(0);

  const handleTicketsChange = (event) => {
    const ticketCount = event.target.value;
    setTickets(ticketCount);
    updatePrice(ticketCount, coupon);
  };

  const handleCouponChange = (event) => {
    const couponCode = event.target.value;
    setCoupon(couponCode);
    updatePrice(tickets, couponCode);
  };

  const updatePrice = (tickets, coupon) => {
    let newPrice = 0;
    if (tickets === "1") {
      newPrice = coupon === "TEDxKFS" ? 150 : 180;
    } else if (tickets === "5") {
      newPrice = coupon === "TEDxKFS" ? 600 : 750;
    }
    setPrice(newPrice);
  };

  const handleIdFileChange = (event) => {
    setIdFiles(event.target.files);
  };

  const handleReceiptFileChange = (event) => {
    setReceiptFiles(event.target.files);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box
        component="form"
        name="registration"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field" // Netlify honeypot field to avoid spam
        noValidate
        autoComplete="off"
        action="/" // Redirect to success page after submission
        encType="multipart/form-data"
        sx={{
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          color: 'black',
          boxShadow: 3,
        }}
      >
        <input type="hidden" name="form-name" value="registration" />
        <input type="hidden" name="bot-field" />

        <Typography variant="h4" gutterBottom>Pricing Packages for TEDx Kafr Elsheikh STEM Event</Typography>
        <Typography variant="h6" gutterBottom>180 L.E - One ticket</Typography>
        <Typography variant="h6" gutterBottom>750 L.E - 5 tickets</Typography>

        <StyledTextField
          fullWidth
          label="Your full name"
          margin="normal"
          name="fullName"
          required
        />
        <StyledTextField
          fullWidth
          label="If you are signing up for the group offer, write the rest of the group names"
          margin="normal"
          name="groupNames"
        />
        <StyledTextField
          fullWidth
          label="Your email"
          margin="normal"
          type="email"
          name="email"
          required
        />
        <StyledTextField
          fullWidth
          label="If you are signing up for the group offer, write the rest of the group emails"
          margin="normal"
          type="email"
          name="groupEmails"
        />
        <StyledTextField
          fullWidth
          label="School/University Name"
          margin="normal"
          name="school"
          required
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>ID card (If you don't have it, add your birth certificate).</Typography>
        <StyledButton
          variant="contained"
          component="label"
          sx={{ mb: 2 }}
        >
          Upload ID File
          <input type="file" hidden multiple onChange={handleIdFileChange} />
        </StyledButton>
        {idFiles.length > 0 && (
          <List>
            {Array.from(idFiles).map((file, index) => (
              <ListItem key={index}>
                <ListItemText primary={file.name} />
              </ListItem>
            ))}
          </List>
        )}

        <StyledTextField
          fullWidth
          label="Coupon Code"
          margin="normal"
          name="coupon"
          value={coupon}
          onChange={handleCouponChange}
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel sx={{ color: '#9E2828' }}>How many tickets?</InputLabel>
          <Select
            value={tickets}
            onChange={handleTicketsChange}
            name="tickets"
            required
            sx={{ color: '#9E2828', '& .MuiSelect-icon': { color: '#9E2828' } }}
          >
            <MenuItem value=""><em>—Please choose an option—</em></MenuItem>
            <StyledMenuItem value="1">1</StyledMenuItem>
            <StyledMenuItem value="5">5</StyledMenuItem>
          </Select>
        </FormControl>
        <StyledTextField
          fullWidth
          label="Phone Number"
          margin="normal"
          name="phone"
          required
        />
        <StyledTextField
          fullWidth
          label="If you are signing up for the group offer, write the rest of the group phone numbers"
          margin="normal"
          name="groupPhones"
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>Money transfer Receipt</Typography>
        <Typography variant="body2">Vodafone Cash Number: 01006527832</Typography>
        <StyledButton
          variant="contained"
          component="label"
          sx={{ mt: 2, mb: 2 }}
        >
          Upload Receipt
          <input type="file" hidden multiple onChange={handleReceiptFileChange} />
        </StyledButton>
        {receiptFiles.length > 0 && (
          <List>
            {Array.from(receiptFiles).map((file, index) => (
              <ListItem key={index}>
                <ListItemText primary={file.name} />
              </ListItem>
            ))}
          </List>
        )}

        <Typography variant="h6" gutterBottom>Total Price: {price} L.E</Typography>

        <StyledButton type="submit" fullWidth>Submit</StyledButton>
      </Box>
    </Container>
  );
}

export default RegistrationPage;
