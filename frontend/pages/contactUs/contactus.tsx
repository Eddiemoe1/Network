import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { MailOutline, Phone, Telegram } from '@mui/icons-material';

const ContactUs: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#0a112b', color: '#fff', py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("/images/background/Slider.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
        }}
      >
        <Box>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
            Contact Us
          </Typography>
          <Typography variant="h6">
            Don't forget to contact us if you need support instantly
          </Typography>
        </Box>
      </Box>

      {/* Contact Info Section */}
      <Box
        sx={{
          backgroundColor: '#0a112b',
          color: '#fff',
          py: 6,
          px: 4,
        }}
      >
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={10}
            md={8} // Reduced width
            sx={{ textAlign: 'left', maxWidth: '600px' }} // Constrained maxWidth
          >
            <Box>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, maxWidth: '50%' }} // Matching the width of the horizontal line
              >
                We are always open and we welcome any questions you have for our team. If you wish to get in touch, please fill out the form below.
              </Typography>

              {/* Email Section */}
              <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
                <IconButton
                  sx={{
                    color: '#fff',
                    mr: 2,
                    border: '4px solid', // Increased distance from icons to rings
                    borderColor: 'linear-gradient(135deg, #f50057, #4fc3f7)', // Pink to light blue variation
                    borderRadius: '50%',
                    padding: '8px',
                  }}
                >
                  <MailOutline fontSize="large" />
                </IconButton>
                <Typography variant="h6">nedinahmora@gmail.com</Typography>
              </Box>

              {/* Phone Section */}
              <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
                <IconButton
                  sx={{
                    color: '#fff',
                    mr: 2,
                    border: '4px solid', // Increased distance from icons to rings
                    borderColor: 'linear-gradient(135deg, #f50057, #4fc3f7)', // Pink to light blue variation
                    borderRadius: '50%',
                    padding: '8px',
                  }}
                >
                  <Phone fontSize="large" />
                </IconButton>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  +254 790650233
                </Typography>
              </Box>

              {/* Telegram Section */}
              <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
                <IconButton
                  sx={{
                    color: '#fff',
                    mr: 2,
                    border: '4px solid', // Increased distance from icons to rings
                    borderColor: 'linear-gradient(135deg, #f50057, #4fc3f7)', // Pink to light blue variation
                    borderRadius: '50%',
                    padding: '8px',
                  }}
                >
                  <Telegram fontSize="large" />
                </IconButton>
                <Typography variant="h6">
                  <a
                    href="https://t.me/Moeednah"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#fff', textDecoration: 'none' }}
                  >
                   https://t.me/Moeednah               
                     </a>
                </Typography>
              </Box>

              {/* Horizontal Line above Addresses */}
              <Box
                sx={{
                  borderBottom: '1px solid #fff',
                  my: 4,
                  maxWidth: '50%', // Reduced the length of the horizontal line
                }}
              />

              {/* Address Section */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    fontSize: '2.5rem',
                  }}
                >
                  Addresses
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Headquarters
                  </Typography>
                  <Typography variant="body1">
                    Lurambi,<br />
                    Kakamega, 100-50100<br />
                    <Typography component="span">
                      Telephone: (254) 790650233
                    </Typography>
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Constitution Center
                  </Typography>
                  <Typography variant="body1">
                    Lurambi.,<br />
                    Kakamega, town<br />
                    <Typography component="span">
                      Telephone: (254) 722471419
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
