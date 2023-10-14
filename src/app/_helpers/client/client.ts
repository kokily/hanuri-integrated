import axios from 'axios';

const client = axios.create({
  baseURL: 'https://hanuri.or.kr/api',
  withCredentials: true,
});

export default client;
