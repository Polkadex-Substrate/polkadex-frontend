import { Meta,Story } from '@storybook/react/types-6-0'

import NavbarLanguage from '.'

export default {
title: 'NavbarLanguage',
component: NavbarLanguage
} as Meta

export const Default: Story = (args) =>
<NavbarLanguage {...args} />
