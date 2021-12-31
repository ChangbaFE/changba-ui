import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/col/src/col.vue';

describe('col', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-col');
  });
});
