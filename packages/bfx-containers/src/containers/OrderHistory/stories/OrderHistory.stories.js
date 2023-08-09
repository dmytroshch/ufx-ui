import { getDefaultMetadata, showTemplateStory } from '../../../../../storybook/.storybook/helper'
import Component from '../OrderHistory.container'

export default { ...getDefaultMetadata(Component), title: 'Containers/OrderHistory' }

export const basic = showTemplateStory(Component)
