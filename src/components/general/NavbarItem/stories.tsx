import { Meta,Story } from '@storybook/react/types-6-0'

import NavbarItem from '.'

export default {
title: 'NavbarItem',
component: NavbarItem
} as Meta

export const Default: Story = (args) =>
<NavbarItem {...args} />
