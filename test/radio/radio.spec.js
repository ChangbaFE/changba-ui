import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/radio/src/radio.vue';

describe('radio', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-radio');
  });
});
