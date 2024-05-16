import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { ConfirmationDialog } from './ConfirmationDialog';

const meta: Meta<typeof ConfirmationDialog> = {
  component: ConfirmationDialog,
  tags: ['autodocs'],
  title: 'UI/ConfirmationDialog',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Danger: Story = {
  args: {
    body: 'Hello World',
    confirmButton: <Button>Confirm</Button>,
    icon: 'danger',
    title: 'Confirmation',
    triggerButton: <Button>Open</Button>,
  },
};

export const Info: Story = {
  args: {
    body: 'Hello World',
    confirmButton: <Button>Confirm</Button>,
    icon: 'info',
    title: 'Confirmation',
    triggerButton: <Button>Open</Button>,
  },
};
