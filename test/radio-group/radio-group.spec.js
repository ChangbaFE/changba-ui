import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/radio-group/src/radio-group.vue';

describe('radio-group', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-radio-group');
  });
});
