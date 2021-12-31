import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/row/src/row.vue';

describe('row', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-row');
  });
});
