import Vue from 'vue'

export interface Tooltip {
  install(vue: typeof Vue): void
}
