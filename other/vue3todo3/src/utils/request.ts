import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:5002/todos',
});

export default request;
