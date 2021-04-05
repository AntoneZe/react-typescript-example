import { UserAction, UserActionType, UserState } from '../../types/crud';

const initialState: UserState = {
  id: 0,
  users: [],
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.ADD_USER: {
      const incId = state.id + 1;
      return {
        users: [...state.users, { ...action.payload, id: incId }],
        id: incId,
      };
    }
    case UserActionType.DELETE_USER: {
      return {
        ...state,
        users: state?.users.filter((el) => el.id !== +action.payload),
      };
    }
    case UserActionType.UPDATE_USER: {
      const cloneUpdatedUser = state.users.slice(0);

      cloneUpdatedUser.map((el) => {
        if (el.id === action.payload.id) {
          el.name = action.payload.name;
        }
      });

      return {
        ...state,
      };
    }
    default:
      return { ...state };
  }
};
