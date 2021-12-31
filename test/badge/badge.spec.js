import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/badge/src/badge.vue';

describe('badge', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-badge');
  });

  it('renders props.theme when passed', () => {
    const theme = 'primary';
    const wrapper = shallowMount(Component, {
      propsData: { theme }
    });

    expect(wrapper.classes()).toContain(`bg-${theme}`);
  });
});
