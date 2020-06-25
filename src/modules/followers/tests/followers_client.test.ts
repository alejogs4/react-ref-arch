import buildFollowersClient from '../services/followers_client';
import HttpProvider from 'services/http_provider';

describe('Tests for followers client', () => {
  test('Should return an FollowerClientInstance and execute getAll with proper url', async () => {
    const provider: HttpProvider = {
      get: jest.fn(),
      post: jest.fn(),
    };

    const client = buildFollowersClient(provider);
    await client.getAll();

    expect(provider.get).toHaveBeenCalled();
  });
});
