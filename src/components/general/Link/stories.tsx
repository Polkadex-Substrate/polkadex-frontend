import { Meta,Story } from '@storybook/react/types-6-0'

import Link, { LinkProps } from '.'

export default {
title: 'Link',
component: Link
} as Meta

export const Default: Story<LinkProps> = (args) =>
<Link {...args} />
