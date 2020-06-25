import Follower from 'types/follower';
import State from '../types/state';

// Actions for followers reducers
enum FollowersActions {
  FILL_FOLLOWERS = 'FILL_FOLLOWERS',
  ADD_FOLLOWER = 'ADD_FOLLOWER',
}

interface Action {
  type: FollowersActions;
  payload: Follower;
}

export default function followers(state: Array<Follower> = [], action: Action): Array<Follower> {
  switch (action.type) {
    case FollowersActions.ADD_FOLLOWER: {
      const isAlreadyAdded = state.some((follower) => follower.id === action.payload.id);
      return isAlreadyAdded ? state : [...state, action.payload];
    }
    default:
      return state;
  }
}

// actions creators
export function addFollower(follower: Follower): Action {
  return {
    type: FollowersActions.ADD_FOLLOWER,
    payload: follower,
  };
}

// Selectors
export function getFollowers(state: State): Array<Follower> {
  return state.followers;
}
