import { Meta,Story } from '@storybook/react/types-6-0'

import Transactions from '.'

export default {
title: 'Transactions',
component: Transactions
} as Meta

export const Default: Story = (args) =>
  <Transactions {...args} data={args.data} openOrderData={args.openOrderData} newTradeData={args.newTradeData} remove={args.remove} activeIndex={args.activeIndex} setActiveIndex={args.setActiveIndex} />
