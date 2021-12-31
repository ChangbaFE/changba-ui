import Vue from 'vue';
import Icon from '../../packages/icon';

Vue.use(Icon);

import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/pagination/src/pagination.vue';

describe('pagination', () => {
  it('renders dom when mounted', async () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        pager: {
          current: 1,
          total: 10
        }
      }
    });
    await Vue.nextTick();
    expect(wrapper.classes()).toContain('cb-pagination');
  });
});
