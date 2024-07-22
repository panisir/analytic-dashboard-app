// src/components/Home.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button, Container, Typography, Box } from '@mui/material';

const Home = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <Container component="main" maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop="8"
      >
        <Typography component="h1" variant="h4">
          Hoş Geldiniz, {currentUser.username}!
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={logout} 
          style={{ marginTop: '1em' }}
        >
          Çıkış Yap
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
