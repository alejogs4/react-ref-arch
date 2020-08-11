import axios, { AxiosError } from 'axios';
import HttpProvider from './http_provider';
import HttpError, { HttpErrors } from './exceptions/httpError';

function throwHttpError(error: AxiosError) {
  if (error.response) {
    const message: string = error.response.data.error ? error.response.data.error.message : 'Something went wrong';
    return new HttpError(error.response.status, message);
  }
  if (error.request) {
    return new HttpError(HttpErrors.SOCKET_ERROR, 'Network problems');
  }
  return error;
}

const axiosProvider: HttpProvider = {
  async get<T>(url: string, headers?: Record<string, unknown>) {
    try {
      const response = await axios.get<T>(url, { headers });
      return response.data;
    } catch (error) {
      throw throwHttpError(error);
    }
  },
  async post<T, U>(url: string, body: U, headers?: Record<string, unknown>) {
    try {
      const response = await axios.post<T>(url, body, { headers });
      return response.data;
    } catch (error) {
      throw throwHttpError(error);
    }
  },
};

export default axiosProvider;