import { Meta,Story } from '@storybook/react/types-6-0'

import OrderBookIcon from '.'

export default {
title: 'OrderBookIcon',
component: OrderBookIcon
} as Meta

export const Default: Story = (args) =>
<OrderBookIcon icon={args.icon} handleChange={args.handleChange} {...args} />
