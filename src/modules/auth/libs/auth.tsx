import { getUser } from '../api/get-user';
import { type LoginInput, loginWithEmailAndPassword } from '../api/login';
import { logout } from '../api/logout';
import {
  type RegisterInput,
  registerWithEmailAndPassword,
} from '../api/register';
import { type UserResponse } from '../types';
import { configureAuth } from './react-query-auth';

function handleUserResponse(data: UserResponse) {
  const { user } = data;
  return user;
}

async function userFn() {
  return getUser();
}

async function loginFn(data: LoginInput) {
  const response = await loginWithEmailAndPassword(data);
  const user = handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterInput) {
  const response = await registerWithEmailAndPassword(data);
  const user = handleUserResponse(response);
  return user;
}

async function logoutFn() {
  await logout();
  // window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
  loginFn,
  logoutFn,
  registerFn,
  userFn,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);
