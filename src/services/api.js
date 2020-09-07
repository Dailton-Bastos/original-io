import axios from 'axios';

const api = axios.create({
  baseURL: 'https://original-io-api.herokuapp.com/',
});

export default api;
