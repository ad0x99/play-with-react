import axios from 'axios';
import { API_URL } from '../../utils/constant';

const register = async (userData) => {
  const response = await axios.post(API_URL.REGISTER, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL.LOGIN, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const logout = (uerData) => {
  return localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export { authService };
