import { Meta,Story } from '@storybook/react/types-6-0'

import OrderBookTable from '.'

export default {
  title: 'OrderBookTable',
  component: OrderBookTable
} as Meta

export const Default: Story = (args) =>
  <OrderBookTable latestTransaction={args.latestTransaction} latestTransactionType={args.latestTransactionType} orderBookAsks={args.orderBookAsks} orderBookBids={args.orderBookBids} {...args} />
