import { Meta,Story } from '@storybook/react/types-6-0'

import Transactions from '.'

export default {
title: 'Transactions',
component: Transactions
} as Meta

export const Default: Story = (args) =>
<Transactions {...args} />
