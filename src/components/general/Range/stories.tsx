import { Meta,Story } from '@storybook/react/types-6-0'

import Range from '.'

export default {
title: 'Range',
component: Range
} as Meta

export const Default: Story = (args) =>
<Range {...args} values={args.values} setValues={args.setValues} />
