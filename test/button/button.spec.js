import { shallowMount } from '@vue/test-utils'
import Button from '../../packages/button/src/button.vue'

describe('button', () => {
  it('renders props.theme when passed', () => {
    const theme = 'primary'
    const wrapper = shallowMount(Button, {
      propsData: { theme }
    })

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.classes()).toContain('btn-primary')
  })
})
