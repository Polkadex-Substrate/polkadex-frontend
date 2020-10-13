import { Meta,Story } from '@storybook/react/types-6-0'

import MarketOrderInput from '.'

export default {
title: 'MarketOrderInput',
component: MarketOrderInput
} as Meta

export const Default: Story = (args) =>
<MarketOrderInput {...args} />
