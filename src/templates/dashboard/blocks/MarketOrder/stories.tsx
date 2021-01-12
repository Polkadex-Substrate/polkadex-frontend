import { Meta,Story } from '@storybook/react/types-6-0'

import MarketOrder from '.'

export default {
title: 'MarketOrder',
component: MarketOrder
} as Meta

export const Default: Story = (args) =>
<MarketOrder {...args} setOpenOrder={args.setOpenOrder} price={args.price} amount={args.amount} setPrice={args.setPrice} setAmount={args.setAmount} validAccount={args.validAccount} latestTransaction={args.latestTransaction} blockchainApi={args.blockchainApi} setActiveIndex={args.setActiveIndex} />
