import React from 'react';
import { Meta,Story } from '@storybook/react/types-6-0'

import OrderBookTable from '.'

export default {
  title: 'OrderBookTableBody',
  component: OrderBookTableBody
} as Meta

export const Default: Story = (args) =>
  <OrderBookTableBody data={args.data} {...args} />
