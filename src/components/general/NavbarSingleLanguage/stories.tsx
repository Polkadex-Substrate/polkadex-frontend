import { Meta,Story } from '@storybook/react/types-6-0'

import NavbarSingleLanguage, { SingleLanguageProps} from '.'

export default {
title: 'NavbarSingleLanguage',
component: NavbarSingleLanguage
} as Meta

export const Default: Story<SingleLanguageProps> = (args) =>
<NavbarSingleLanguage {...args} />
