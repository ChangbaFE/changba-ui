import 'bootstrap-colorpicker';
import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/color-picker/src/color-picker.vue';

describe('color-picker', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-color-picker');
  });
});
