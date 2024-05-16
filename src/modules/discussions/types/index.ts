import { type User } from '@/modules/users';
import { type BaseEntity } from '@/types';

export type Discussion = {
  title: string;
  body: string;
  teamId: string;
  author: User;
} & BaseEntity;
