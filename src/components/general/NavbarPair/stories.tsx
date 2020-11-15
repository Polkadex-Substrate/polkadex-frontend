import { Meta,Story } from '@storybook/react/types-6-0'

import NavbarPair from '.'

export default {
title: 'NavbarPair',
component: NavbarPair
} as Meta

export const Default: Story = (args) =>
<NavbarPair {...args} />
