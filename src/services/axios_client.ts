import HttpProvider, { Headers } from './http_provider';
import axios from 'axios';

const axiosProvider: HttpProvider = {
  get<T>(url: string) {
    return axios.get(url).then((response) => response.data as T);
  },
  post<T, U>(url: string, body: U, headers: Headers) {
    return axios.post(url, body, { headers }).then((response) => response.data as T);
  },
};

export default axiosProvider;
