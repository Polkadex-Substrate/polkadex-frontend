import React from 'react';
import { Meta,Story } from '@storybook/react/types-6-0'

import OrderBookTableBody from '.'

export default {
  title: 'OrderBookTableBody',
  component: OrderBookTableBody
} as Meta

export const Default: Story = (args) =>
  <OrderBookTableBody data={args.data} isScrollBottom={args.isScrollBottom} exchangeImg={args.exchangeImg} {...args} />
