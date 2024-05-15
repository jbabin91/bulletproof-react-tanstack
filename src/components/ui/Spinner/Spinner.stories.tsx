import { type Meta, type StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: {
    size: 'md',
  },
  component: Spinner,
  tags: ['autodocs'],
  title: 'UI/Spinner',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
