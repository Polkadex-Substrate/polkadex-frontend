import { Meta,Story } from '@storybook/react/types-6-0'

import Navbar from '.'

export default {
title: 'Navbar',
component: Navbar
} as Meta

export const Default: Story = (args) =>
<Navbar currentToken={args.currentToken} {...args} />
