import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const AppDownload: React.FC = () => {
  // Hard-coded links
  const androidLink = '';
  const iosLink = '';

  const handleButtonClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <Box sx={{ backgroundColor: '#050278', color: '#fff', minHeight: '40vh', py: 2 }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("/images/background/Slider.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          py: 15,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
            App Download
          </Typography>
          <Typography variant="h6">
            Download your desired apps for better performance
          </Typography>
        </Box>
      </Box>

      {/* Download Buttons */}
      <Box sx={{ mt: 6, display: 'flex', justifyContent: 'space-between', px: 4 }}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #0000ff, #ff00ff)',
              color: '#fff',
              borderRadius: '8px',
              px: 4,
              py: 1,
              fontSize: '1.25rem',
              textTransform: 'none',
              transition: 'background 0.3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(to right, #ff00ff, #0000ff)',
              },
              // Fixed width for the button
              width: '150px', // Set your desired width
            }}
            onClick={() => handleButtonClick(androidLink)}
          >
            Android
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #0000ff, #ff00ff)',
              color: '#fff',
              borderRadius: '8px',
              px: 4,
              py: 1,
              fontSize: '1.25rem',
              textTransform: 'none',
              transition: 'background 0.3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(to right, #ff00ff, #0000ff)',
              },
              // Fixed width for the button
              width: '150px', // Set your desired width
            }}
            onClick={() => handleButtonClick(iosLink)}
          >
            iOS
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AppDownload;
