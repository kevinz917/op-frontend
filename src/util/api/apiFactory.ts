import axios from 'axios';

const api = axios.create();

api.defaults.baseURL = 'https:/';

export default api;
