import { Table } from '@/components/ui';
import { Spinner } from '@/components/ui/Spinner';
import { formatDate } from '@/utils/format';

import { useUsers } from '../api/get-users';
import { DeleteUser } from './DeleteUser';

export function UsersList() {
  const users = useUsers();

  if (users.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!users.data) return null;

  return (
    <Table
      columns={[
        {
          field: 'firstName',
          title: 'First Name',
        },
        {
          field: 'lastName',
          title: 'Last Name',
        },
        {
          field: 'email',
          title: 'Email',
        },
        {
          field: 'role',
          title: 'Role',
        },
        {
          Cell: ({ entry: { createdAt } }) => {
            return <span>{formatDate(Number.parseInt(createdAt))}</span>;
          },
          field: 'createdAt',
          title: 'Created At',
        },
        {
          Cell: ({ entry: { id } }) => {
            return <DeleteUser id={id} />;
          },
          field: 'id',
          title: '',
        },
      ]}
      data={users.data}
    />
  );
}
