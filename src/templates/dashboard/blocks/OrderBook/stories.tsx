import { Meta,Story } from '@storybook/react/types-6-0'

import OrderBook from '.'

export default {
title: 'OrderBook',
component: OrderBook
} as Meta

export const Default: Story = (args) =>
<OrderBook data={args.data} {...args} />
