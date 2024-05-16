import { type User } from '@/modules/users';
import { type BaseEntity } from '@/types';

export type Comment = {
  body: string;
  discussionId: string;
  author: User;
} & BaseEntity;
