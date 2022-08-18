import Axios from 'axios';
export * from 'axios';

const BASE_URL = 'http://localhost:3001';

const clientHttp = Axios.create({
  baseURL: BASE_URL,
});

export default clientHttp;
