export type Headers = {
  [key: string]: string;
};

interface HttpProvider {
  get<T>(url: string): Promise<T>;
  post<T, U>(url: string, body: U, headers?: Headers): Promise<T>;
}

export default HttpProvider;
