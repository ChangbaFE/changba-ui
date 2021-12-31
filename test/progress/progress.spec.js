import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/progress/src/progress.vue';

describe('progress', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-progress');
  });
});
