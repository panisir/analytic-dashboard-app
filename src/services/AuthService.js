// src/services/authService.js
import axios from 'axios';

// Spring Boot uygulamanızın URL'i
const API_URL_AUTHENTICATE = process.env.REACT_APP_API_URL + '/api/v1/auth/authenticate';
const API_URL_EXPIRE_TOKEN = process.env.REACT_APP_API_URL + '/api/v1/auth/expire-token';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL_AUTHENTICATE}`, {
    email,
    password,
  });

  if (response.data.access_token && response.data.refresh_token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

export const logout = async () => {
  await axios.post(`${API_URL_EXPIRE_TOKEN}`,{},{
    headers: {
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token
    }
  });
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};
