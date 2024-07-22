// src/components/Login.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();


    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      if (err.response && err.response.status === 403) {
        setError('Giriş bilgileri hatalı. Lütfen tekrar deneyin.');
      } else {
        setError('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      }
    }

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop="8"
      >
        <Typography component="h1" variant="h5">
          Giriş Yap
        </Typography>
        {error && <Typography color="error" variant="body2">{error}</Typography>}
        <form onSubmit={handleLogin} style={{ width: '100%', marginTop: '1em' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-Mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Şifre"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '1em' }}
          >
            Giriş Yap
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
