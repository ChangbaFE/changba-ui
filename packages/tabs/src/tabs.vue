<template>
  <div class="cb-tabs nav-tabs-custom">
    <ul class="nav" :class="classList">
      <li role="presentation" v-for="(item, index) in panes" :class="{ disabled: item.disabled, active: currentTab === item.index }" :key="index">
        <a href="" @click.prevent="handleClick(item)">
          <template v-if="item.$slots.label">
            <cb-vnode :vnodes="item.$slots.label" />
          </template>
          <template v-else>
            {{ item.label }}
          </template>
        </a>
      </li>
    </ul>

    <div class="tab-content no-padding">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CbVnode from '../../vnode/src/vnode.vue';

export default {
  name: 'CbTabs',

  components: {
    CbVnode
  },

  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    pills: {
      type: Boolean,
      default: false
    },
    stacked: {
      type: Boolean,
      default: false
    },
    justified: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentTab: this.value,
      panes: []
    }
  },

  computed: {
    classList() {
      return {
        'nav-tabs': !this.pills,
        'nav-pills': this.pills,
        'nav-stacked': this.stacked,
        'nav-justified': this.justified
      };
    }
  },

  watch: {
    value(value) {
      this.currentTab = value;
    },

    currentTab(value) {
      this.$emit('change', value);
    }
  },

  mounted() {
    this.getPanes();
    this.$emit('change', this.currentTab);
  },

  updated() {
    this.getPanes();

    if (this.currentTab > this.panes.length - 1) {
      this.currentTab = 0;
    }
  },

  methods: {
    handleClick(item) {
      if (item.disabled) {
        return;
      }

      this.setCurrentTab(item.index);
    },

    setCurrentTab(index) {
      this.currentTab = index;
      this.$emit('input', index);
    },

    getPanes() {
      if (this.$slots.default) {
        const paneSlots = this.$slots.default.filter(vnode => vnode.tag &&
          vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'CbTabPane');

        // update indeed
        const panes = paneSlots.map(({ componentInstance }, index) => {
          componentInstance.index = index;
          return componentInstance;
        });
        if (!(panes.length === this.panes.length && panes.every((pane, index) => pane === this.panes[index]))) {
          this.panes = panes;
        }
      }
      else if (this.panes.length !== 0) {
        this.panes = [];
      }
    }
  }
}
</script>
