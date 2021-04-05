import {
  DeleteUserAction,
  UpdateUserType,
  User,
  UserAction,
  UserActionType,
} from '../../types/crud';

export const addUser = (user: User): UserAction => {
  console.log('payload', user);
  return {
    type: UserActionType.ADD_USER,
    payload: user,
  };
};

export const updateUser = (userData: UpdateUserType): UserAction => ({
  type: UserActionType.UPDATE_USER,
  payload: userData,
});

export const deleteUser = (id: number): DeleteUserAction => ({
  type: UserActionType.DELETE_USER,
  payload: id,
});
