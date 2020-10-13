import { Meta,Story } from '@storybook/react/types-6-0'

import TransactionsHeader from '.'

export default {
title: 'TransactionsHeader',
component: TransactionsHeader
} as Meta

export const Default: Story = (args) =>
<TransactionsHeader {...args} />
