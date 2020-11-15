import { Meta,Story } from '@storybook/react/types-6-0'

import DropdownItem, { DropdownItemProps } from '.'

export default {
title: 'DropdownItem',
component: DropdownItem
} as Meta

export const Default: Story<DropdownItemProps> = (args) =>
<DropdownItem {...args} />
