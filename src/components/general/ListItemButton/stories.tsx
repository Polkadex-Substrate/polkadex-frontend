import { Meta,Story } from '@storybook/react/types-6-0'

import ListItemButton, { ListItemProps } from '.'

export default {
  title: 'ListItemButton',
  component: ListItemButton,
} as Meta

export const Default: Story<ListItemProps> = (args) =>
  <ListItemButton  {...args} />
