import axios from 'axios';
const Api = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {}
});
export default Api