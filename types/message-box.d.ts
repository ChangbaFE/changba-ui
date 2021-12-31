import Vue from 'vue'

export interface MessageBox {
  install(vue: typeof Vue): void
}
