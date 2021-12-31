import { Component } from './component'

export type ButtonTheme = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export declare class Button extends Component {
  theme: ButtonTheme;
}
