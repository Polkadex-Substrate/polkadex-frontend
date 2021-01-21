import { Meta,Story } from '@storybook/react/types-6-0'

import CustomChart from '.'

export default {
  title: 'CustomChart',
  component: CustomChart
} as Meta

export const Default: Story = (args) =>
  <CustomChart {...args} />
