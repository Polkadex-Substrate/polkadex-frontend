import { Meta,Story } from '@storybook/react/types-6-0'

import Icon, { IconProps } from '.'

export default {
  title: 'Icon',
  component: Icon,
} as Meta

export const Default: Story<IconProps> = (args) =>
  <Icon {...args} />
