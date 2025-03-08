// @project
import { AUTH_USER_KEY } from 'src/config';
import axios from 'src/utils/axios';

export function logout() {
  axios.get('/api/auth/logout');
  localStorage.removeItem(AUTH_USER_KEY);
  window.location.pathname = '/login';
}
