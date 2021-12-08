import axios from 'axios';

import { config as appConfig } from '@constants';

const instance = axios.create({
  baseURL: appConfig.baseURL,
  timeout: 1000,
});

export default instance;
