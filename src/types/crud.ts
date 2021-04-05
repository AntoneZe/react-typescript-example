export enum UserActionType {
  ADD_USER = 'ADD_USER',
  UPDATE_USER = 'UPDATE_USER',
  GET_USER = 'GET_USER',
  DELETE_USER = 'DELETE_USER',
}

export interface UserState {
  id: number;
  users: Array<any>;
}

interface AddUserAction {
  type: UserActionType.ADD_USER;
  payload: object;
}

interface GetUserAction {
  type: UserActionType.GET_USER;
  payload: number;
}

export interface DeleteUserAction {
  type: UserActionType.DELETE_USER;
  payload: number;
}

export type UpdateUserType = {
  id: number;
  name: string;
};

export interface UpdateUserAction {
  type: UserActionType.UPDATE_USER;
  payload: UpdateUserType;
}

export type UserAction =
  | AddUserAction
  | GetUserAction
  | DeleteUserAction
  | UpdateUserAction;

export type User = {
  id?: number;
  name: string;
};
