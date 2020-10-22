import { Meta,Story } from '@storybook/react/types-6-0'

import TransactionTab from '.'

export default {
title: 'TransactionTab',
component: TransactionTab
} as Meta

export const Default: Story = (args) =>
<TransactionTab {...args} />
