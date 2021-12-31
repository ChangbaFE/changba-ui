import select2 from 'select2';
select2();

import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/select-plus/src/select-plus.vue';

describe('select-plus', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-select-plus');
  });
});
