import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/menu-item/src/menu-item.vue';

describe('menu-item', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-menu-item');
  });
});
