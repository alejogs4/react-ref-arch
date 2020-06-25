import Follower from 'types/follower';
import HttpProvider from 'services/http_provider';

export interface FollowersClient {
  getAll(): Promise<Array<Follower>>;
}

function buildFollowersClient(apiProvider: HttpProvider): FollowersClient {
  return {
    getAll() {
      const url = 'https://jsonplaceholder.typicode.com/users';
      return apiProvider.get<Array<Follower>>(url);
    },
  };
}

export default buildFollowersClient;
