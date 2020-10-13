import { Meta,Story } from '@storybook/react/types-6-0'

import MarketOrder from '.'

export default {
title: 'MarketOrder',
component: MarketOrder
} as Meta

export const Default: Story = (args) =>
<MarketOrder {...args} />
