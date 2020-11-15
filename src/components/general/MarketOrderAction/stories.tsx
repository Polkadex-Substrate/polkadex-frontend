import { Meta,Story } from '@storybook/react/types-6-0'

import MarketOrderAction from '.'

export default {
title: 'MarketOrderAction',
component: MarketOrderAction
} as Meta

export const Default: Story = (args) =>
<MarketOrderAction {...args} />
