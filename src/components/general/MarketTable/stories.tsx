import { Meta,Story } from '@storybook/react/types-6-0'

import MarketTable from '.'

export default {
title: 'MarketTable',
component: MarketTable
} as Meta

export const Default: Story = (args) =>
<MarketTable coins={args.coins} {...args} />
