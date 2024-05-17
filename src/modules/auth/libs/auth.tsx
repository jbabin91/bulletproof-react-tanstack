import { createContext, useCallback, useContext, useMemo } from 'react';

import { getUser } from '../api/get-user';
import { type LoginInput, loginWithEmailAndPassword } from '../api/login';
import { logout } from '../api/logout';
import {
  type RegisterInput,
  registerWithEmailAndPassword,
} from '../api/register';
import { type AuthUser, type UserResponse } from '../types';
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

const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);

export { AuthLoader, useUser };

export type AuthContext = {
  isAuthenticated: boolean;
  login: (values: LoginInput) => void;
  logout: () => void;
  register: (values: RegisterInput) => void;
  user: AuthUser | undefined;
};

const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: user } = useUser();
  const isAuthenticated = !!user;
  const logoutMutation = useLogout();
  const loginMutation = useLogin();
  const registerMutation = useRegister();

  const logout = useCallback(() => {
    logoutMutation.mutate({});
  }, [logoutMutation]);

  const login = useCallback(
    (values: LoginInput) => {
      loginMutation.mutate(values);
    },
    [loginMutation],
  );

  const register = useCallback(
    (values: RegisterInput) => {
      registerMutation.mutate(values);
    },
    [registerMutation],
  );

  const value = useMemo(
    () => ({
      isAuthenticated,
      login,
      logout,
      register,
      user,
    }),
    [isAuthenticated, login, logout, register, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
