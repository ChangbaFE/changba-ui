<template>
  <nav class="cb-pagination" aria-label="Page navigation" v-if="typeof listing.pages === 'object' && listing.pages !== null">
    <ul class="pagination" @click.prevent="onPagerClick">
      <li v-if="listing.first >= 0"><a href="" rel="first" :data-page="listing.first">第一页</a></li>
      <li v-if="listing.previous >= 0"><a href="" rel="prev" :data-page="listing.previous">上一页</a></li>
      <template v-for="(item, index) in listing.pages">
        <li v-if="item.number !== ''" :key="index">
          <a href="" :data-page="item.number">{{ item.text }}</a>
        </li>
        <li class="active" :key="index" v-else>
          <span>{{ item.text }}</span>
        </li>
      </template>
      <li v-if="listing.next >= 0"><a href="" rel="next" :data-page="listing.next">下一页</a></li>
      <li v-if="listing.last >= 0"><a href="" rel="last" :data-page="listing.last">最后一页</a></li>
      <template v-if="!primaryKey">
        <li>
          <transition name="pagination-control" @after-enter="$refs.control.focus()">
            <span class="pagination-control" v-if="showGoto">
              <input type="text" class="form-control input-sm" placeholder="输入页码" v-model.trim="inputPageNumber" @keyup.enter="gotoPage" ref="control">
            </span>
          </transition>
        </li>
        <li>
          <a href="" rel="goto" title="跳转页码">
            <i class="cb-icon fa fa-fw fa-search" v-if="showGoto"></i>
            <i class="cb-icon fa fa-fw fa-pencil" v-else></i>
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'CbPagination',

  props: {
    pager: {
      type: null,
      default() {
        return {
          current: 1,
          total: 1,
          count: 0,
          key: ''
        };
      }
    },

    numLinks: {
      type: Number,
      default: 5
    },

    primaryKey: {
      type: Boolean,
      default: false
    },

    perPage: {
      type: Number,
      default: 20
    },

    maxLength: {
      type: Number,
      default: 5000
    }
  },

  data() {
    return {
      stack: [],
      listing: {},
      showGoto: false,
      inputPageNumber: ''
    }
  },

  watch: {
    pager: {
      handler() {
        this.refresh();
      },
      deep: true
    }
  },

  mounted() {
    this.refresh();
  },

  methods: {
    refresh() {
      const output = {};

      const pager = cloneDeep(this.pager)
      // 主键分页模式
      if (this.primaryKey) {
        if (pager.reset) {
          this.stack = [];
        }

        output.first = '';
        output.pages = [];
        output.next = pager.key;

        if (this.stack.length) {
          output.previous = this.stack[this.stack.length - 1];
        }

        this.listing = output;

        return;
      }

      pager.current = Number(pager.current || 1);
      pager.total = Number(pager.total || 1);
      pager.count = Number(pager.count || 0);

      if (pager.total == 0 || pager.current == 0) {
        this.listing = {};

        return;
      }

      if (this.numLinks < 1) {
        pager.total = Math.ceil(this.maxLength / this.perPage);

        if (pager.current != 1) {
          output.first = 1;
          output.previous = pager.current - 1;
        }

        if (pager.count >= this.perPage) {
          output.next = pager.current + 1;
        }

        if (pager.current != 1 || pager.count >= this.perPage) {
          output.pages = [];
        }

        this.listing = output;

        return;
      }

      if (pager.current > pager.total) {
        pager.current = pager.total;
      }

      if (pager.total == 1) {
        this.listing = {};

        return;
      }

      const start = ((pager.current - this.numLinks) > 0) ? pager.current - (this.numLinks - 1) : 1;
      const end = ((pager.current + this.numLinks) < pager.total) ? pager.current + this.numLinks : pager.total;

      // 首页
      if (pager.current > (this.numLinks + 1)) {
        output.first = 1;
      }

      // 上一页
      if (pager.current != 1) {
        output.previous = pager.current - 1;
      }

      output.pages = [];

      // 页码
      for (let loop = start - 1; loop <= end; loop++) {
        if (loop >= 1) {
          if (pager.current == loop) {
            // 当前页
            output.pages.push({ number: '', text: loop });
          }
          else {
            output.pages.push({ number: loop, text: loop });
          }
        }
      }

      // 下一页
      if (pager.current < pager.total) {
        output.next = pager.current + 1;
      }

      // 最后一页
      if ((pager.current + this.numLinks) < pager.total) {
        output.last = pager.total;
      }

      this.listing = output;
    },

    onPagerClick(event) {
      const target = event.target;

      if (target.tagName.toLowerCase() !== 'a') {
        return;
      }

      let pageNumber = target.getAttribute('data-page');
      const rel = target.getAttribute('rel');

      if (this.primaryKey) {
        if (rel === 'next') {
          this.stack.push(pageNumber);
        }
        else if (rel === 'first') {
          this.stack = [];

          pageNumber = '';
        }
        else if (rel === 'prev') {
          this.stack.pop();

          if (this.stack.length) {
            pageNumber = this.stack[this.stack.length - 1];
          }
          else {
            pageNumber = '';
          }
        }
      }
      else {
        if (rel === 'goto') {
          if (!this.showGoto) {
            this.showGoto = true;
          }
          else {
            if (this.inputPageNumber === '') {
              this.showGoto = false;
            }
            else {
              this.gotoPage();
            }
          }

          return;
        }
      }

      this.$emit('change', pageNumber);
    },

    gotoPage() {
      const pageNumber = Number(this.inputPageNumber);

      this.inputPageNumber = '';
      this.$refs.control.focus();

      if (isNaN(pageNumber) || pageNumber < 1) {
        return;
      }

      this.$emit('change', pageNumber);
    }
  }
};
</script>
