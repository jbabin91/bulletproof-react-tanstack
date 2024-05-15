import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  argTypes: {
    asChild: { control: 'boolean' },
    size: { control: 'select', options: ['default', 'sm', 'lg', 'icon'] },
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'ghost',
        'link',
        'outline',
        'secondary',
      ],
    },
  },
  args: {
    asChild: false,
    children: 'Button',
    size: 'default',
    variant: 'default',
  },
  component: Button,
  tags: ['autodocs'],
  title: 'UI/Button',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
