import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/form/src/form.vue';

describe('form', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-form');
  });
});
