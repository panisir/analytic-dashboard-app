import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');
  };

  return (
    <Container>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="100vh"
      >
        <Typography variant="h1" component="h2" gutterBottom>
            404
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
            Sayfa Bulunamadı
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Anasayfaya Dön
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
