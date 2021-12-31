import Vue from 'vue';
import Tabs from '../../packages/tabs';
import TabPane from '../../packages/tab-pane';

Vue.use(Tabs);
Vue.use(TabPane);

import { mount } from '@vue/test-utils';
import Component from './demo.vue';

describe('tabs', () => {
  it('renders dom when mounted', () => {
    const wrapper = mount(Component);
    expect(wrapper.classes()).toContain('cb-tabs');
  });
});
