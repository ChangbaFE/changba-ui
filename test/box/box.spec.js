import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/box/src/box.vue';

const factory = (propsData) => {
  return shallowMount(Component, {
    propsData: {
      ...propsData
    }
  })
}

describe('box', () => {
  it('renders dom when mounted', () => {
    const wrapper = factory();
    expect(wrapper.classes()).toContain('cb-box');
  });

  it('renders props.theme when passed', () => {
    const theme = 'primary';
    const wrapper = factory({ theme });

    expect(wrapper.classes()).toContain(`box-${theme}`);
  });

  it('renders props.collapsed when passed', () => {
    const wrapper = factory({ collapsed: true });

    expect(wrapper.classes()).toContain('collapsed-box');
  });

  it('renders props.solid when passed', () => {
    const wrapper = factory({ solid: true });

    expect(wrapper.classes()).toContain('box-solid');
  });
});
