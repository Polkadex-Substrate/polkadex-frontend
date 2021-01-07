import { Meta,Story } from '@storybook/react/types-6-0'

import OpenOrderTable from '.'

export default {
  title: 'OpenOrderTable',
  component: OpenOrderTable
} as Meta

export const Default: Story = (args) =>
  <OpenOrderTable {...args} />
