import Vue from 'vue'

export interface Notify {
  install(vue: typeof Vue): void
}
