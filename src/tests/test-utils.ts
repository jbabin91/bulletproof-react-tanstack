import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Cookies from 'js-cookie';

import { Providers } from '@/providers';

import {
  createDiscussion as generateDiscussion,
  createUser as generateUser,
} from './data-generators';
import { db } from './mocks/db';
import { AUTH_COOKIE, authenticate, hash } from './mocks/utils';

export const createUser = async (userProperties?: any) => {
  const user = generateUser(userProperties);
  await Promise.resolve(
    db.user.create({ ...user, password: hash(user.password) }),
  );
  return user;
};

export const createDiscussion = async (discussionProperties?: any) => {
  const discussion = generateDiscussion(discussionProperties);
  const response = await Promise.resolve(db.discussion.create(discussion));
  return response;
};

export const loginAsUser = async (user: any) => {
  const authUser = await Promise.resolve(authenticate(user));
  Cookies.set(AUTH_COOKIE, authUser.jwt);
  return authUser;
};

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [
      ...screen.queryAllByTestId(/loading/i),
      ...screen.queryAllByText(/loading/i),
    ],
    { timeout: 4000 },
  );

const initializeUser = async (user: any) => {
  if (user === undefined) {
    const newUser = await createUser();
    return loginAsUser(newUser);
  } else if (user) {
    return loginAsUser(user);
  } else {
    return null;
  }
};

export const renderApp = async (
  ui: any,
  { route = '/', user, ...renderOptions }: Record<string, any> = {},
) => {
  // if you want to render the app unauthenticated then pass "null" as the user
  const initializedUser = await initializeUser(user);

  window.history.pushState({}, 'Test page', route);

  const returnValue = {
    ...rtlRender(ui, {
      wrapper: Providers,
      ...renderOptions,
    }),
    user: initializedUser,
  };

  await waitForLoadingToFinish();

  return returnValue;
};
