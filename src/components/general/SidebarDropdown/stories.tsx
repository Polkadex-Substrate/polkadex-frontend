import { Meta,Story } from '@storybook/react/types-6-0'

import NavbarDropdown, { NavbarDropdownProps } from '.'

export default {
title: 'NavbarDropdown',
component: NavbarDropdown
} as Meta

export const Default: Story<NavbarDropdownProps> = (args) =>
<NavbarDropdown {...args} />
