import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_START,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS
} from './types';

export const emailChanged = (email) => ({
  type: EMAIL_CHANGED,
  payload: email
});

export const passwordChanged = (password) => ({
  type: PASSWORD_CHANGED,
  payload: password
});

export const loginUserStart = (user) => ({
  type: LOGIN_USER_START,
  payload: user
});

export const loginUserSuccess = (user) => {
  Actions.main();
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

export const loginUserError = (error) => ({
  type: LOGIN_USER_ERROR,
  payload: error
});

export const loginUser = (user) => (
  (dispatch) => {
    dispatch(loginUserStart(user));
    const { email, password } = user;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => dispatch(loginUserSuccess(user)))
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password))
      .then(() => dispatch(loginUserSuccess(user)))
      .catch((error) => dispatch(loginUserError(error.message)));
  }
);
