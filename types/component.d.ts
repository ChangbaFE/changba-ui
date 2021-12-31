import Vue from 'vue';

export class Component extends Vue {
  static name: string;

  static install(vue: typeof Vue): void;
}
