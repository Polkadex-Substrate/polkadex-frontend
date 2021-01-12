import { Meta,Story } from '@storybook/react/types-6-0'

import MarketOrderAction from '.'

export default {
title: 'MarketOrderAction',
component: MarketOrderAction
} as Meta

export const Default: Story = (args) =>
<MarketOrderAction {...args} setOpenOrder={args.setOpenOrder} price={args.price} amount={args.amount} setPrice={args.setPrice} setAmount={args.setAmount} account={args.account }  blockchainApi={args.blockchainApi} orderType={args.orderType} setActiveIndex={args.setActiveIndex} />
