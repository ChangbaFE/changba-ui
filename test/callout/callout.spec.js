import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/callout/src/callout.vue';

describe('callout', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-callout');
  });
});
