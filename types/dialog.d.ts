import Vue from 'vue'

export interface Dialog {
  install(vue: typeof Vue): void
}
