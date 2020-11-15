import { Meta,Story } from '@storybook/react/types-6-0'

import MarketOrderForm from '.'

export default {
title: 'MarketOrderForm',
component: MarketOrderForm
} as Meta

export const Default: Story = (args) =>
<MarketOrderForm {...args} />
