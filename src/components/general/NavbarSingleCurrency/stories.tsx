import { Meta,Story } from '@storybook/react/types-6-0'

import NavbarSingleCurrency, { SingleCurrencyProps} from '.'

export default {
title: 'NavbarSingleCurrency',
component: NavbarSingleCurrency
} as Meta

export const Default: Story<SingleCurrencyProps> = (args) =>
<NavbarSingleCurrency {...args} />
