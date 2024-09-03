import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Cookies from 'js-cookie';
import { Toaster } from 'sonner';

import { TailwindIndicator } from '@/components/utils';
import { Providers } from '@/providers';
import { db } from '@/testing/mocks/db';
import { AUTH_COOKIE, authenticate, hash } from '@/testing/mocks/utils';

import {
  createDiscussion as generateDiscussion,
  createUser as generateUser,
} from './data-generators';

export const createUser = (userProperties?: any) => {
  const user = generateUser(userProperties) as any;
  db.user.create({ ...user, password: hash(user.password) });
  return user;
};

export const createDiscussion = (discussionProperties?: any) => {
  const discussion = generateDiscussion(discussionProperties);
  const res = db.discussion.create(discussion);
  return res;
};

export const loginAsUser = (user: any) => {
  const authUser = authenticate(user);
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
  { user, ...renderOptions }: Record<string, any> = {},
) => {
  // if you want to render the app unauthenticated then pass "null" as the user
  const initializedUser = await initializeUser(user);

  const returnValue = {
    ...rtlRender(ui, {
      wrapper: () => {
        return (
          <Providers>
            <Toaster closeButton richColors />
            <TailwindIndicator />
          </Providers>
        );
      },
      ...renderOptions,
    }),
    user: initializedUser,
  };

  await waitForLoadingToFinish();

  return returnValue;
};

export * from '@testing-library/react';
export { render as rtlRender } from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
