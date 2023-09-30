import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BlockComponent from '@/components/storyblok/Components/BlockComponent.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(BlockComponent, { props: { blok: {} } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
