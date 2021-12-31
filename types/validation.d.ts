import Vue from 'vue'

export interface Validation {
  install(vue: typeof Vue): void
}
