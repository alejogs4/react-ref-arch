import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import FollowersContainer from '../containers/FollowersContainer';
import { FollowersClient } from '../services/followers_client';
import store from 'store';
import Followers from '../views/Followers';
import Follower from 'types/follower';

function renderWithRedux(ui: React.ReactElement, { ...renderOptions } = {}) {
  const Wrapper: React.SFC = ({ children }) => <Provider store={store}>{children}</Provider>;
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

describe('Followers tests', () => {
  describe('Followers container', () => {
    test('Should render with no error', () => {
      const mockFollowersClient: FollowersClient = {
        getAll: jest.fn().mockResolvedValue([]),
      };

      const { container } = renderWithRedux(<FollowersContainer followersClient={mockFollowersClient} />);

      expect(container).toBeTruthy();
      expect(mockFollowersClient.getAll).toBeCalled();
    });
  });

  describe('Followers views', () => {
    test('Should render with no error', () => {
      const { container } = render(<Followers followers={[]} choosenFollowers={[]} addFollower={jest.fn()} />);
      expect(container).toBeTruthy();
    });
  });
});
