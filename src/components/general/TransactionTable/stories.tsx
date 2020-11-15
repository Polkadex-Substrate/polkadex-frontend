import { Meta,Story } from '@storybook/react/types-6-0'

import TransactionTable from '.'

export default {
  title: 'TransactionTable',
  component: TransactionTable
} as Meta

export const Default: Story = (args) =>
  <TransactionTable {...args} />
