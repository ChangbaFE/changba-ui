import Vue from 'vue';
import Table from '../../packages/table';
import TableColumn from '../../packages/table-column';

Vue.use(Table);
Vue.use(TableColumn);

import { mount } from '@vue/test-utils';
import Component from './demo.vue';

describe('table', () => {
  it('renders dom when mounted', () => {
    const wrapper = mount(Component);
    expect(wrapper.classes()).toContain('cb-table');
  });
});
