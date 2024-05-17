import { useCallback } from 'react';

import { type Comment } from '@/modules/comments';
import { type User } from '@/modules/users';
import { type EnumValue } from '@/types';

import { useUser } from './auth';

export const Roles = {
  Admin: 'ADMIN',
  User: 'USER',
} as const;

type RoleTypes = EnumValue<typeof Roles>;

export const Policies = {
  'comment:delete': (user: User, comment: Comment) => {
    if (user.role === Roles.Admin) {
      return true;
    }

    if (user.role === Roles.User && comment.author?.id === user.id) {
      return true;
    }

    return false;
  },
};

export function useAuthorization() {
  const user = useUser();

  if (!user.data) {
    throw new Error('User does not exist!');
  }

  const checkAccess = useCallback(
    ({ allowedRoles }: { allowedRoles: RoleTypes[] }) => {
      if (allowedRoles && allowedRoles.length > 0 && user.data) {
        return allowedRoles?.includes(user.data.role);
      }
      return true;
    },
    [user.data],
  );

  return { checkAccess, role: user?.data?.role };
}

type AuthorizationProps = {
  forbiddenFallback?: React.ReactNode;
  children: React.ReactNode;
} & (
  | { allowedRoles: RoleTypes[]; policyCheck?: never }
  | { allowedRoles?: never; policyCheck: boolean }
);

export function Authorization({
  policyCheck,
  allowedRoles,
  forbiddenFallback = null,
  children,
}: AuthorizationProps) {
  const { checkAccess } = useAuthorization();

  let canAccess = false;

  if (allowedRoles) {
    canAccess = checkAccess({ allowedRoles });
  }

  if (policyCheck !== undefined) {
    canAccess = policyCheck;
  }

  return <>{canAccess ? children : forbiddenFallback}</>;
}
