import moment from 'moment';
moment.locale('zh-cn');
import 'daterangepicker';
import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/datetime-picker/src/datetime-picker.vue';

describe('datetime-picker', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-datetime-picker');
  });
});
