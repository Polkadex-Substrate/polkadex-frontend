import { Meta,Story } from '@storybook/react/types-6-0'

import DateRange from '.'

export default {
title: 'DateRange',
component: DateRange
} as Meta


export const Default: Story = (args) =>
<DateRange position={args.position} {...args} />
