import { Meta,Story } from '@storybook/react/types-6-0'

import Graph from '.'

export default {
title: 'Graph',
component: Graph
} as Meta

export const Default: Story = (args) =>
<Graph graphData={args.graphData} {...args} />
