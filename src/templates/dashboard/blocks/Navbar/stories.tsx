import { Meta,Story } from '@storybook/react/types-6-0'

import Navbar from '.'

export default {
title: 'Navbar',
component: Navbar
} as Meta

export const Default: Story = (args) =>
<Navbar blockValues={args.blockValues} lastTradePrice={args.lastTradePrice} lastTradePriceType={args.lastTradePriceType} account={args.account} {...args} />
