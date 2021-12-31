declare module 'changba-ui/lib/select-plus/i18n/*' {
  export interface SelectPlusI18n {
    inputTooLong(args: {
      input: string;
      max: number;
    }): string;
    inputTooShort(args: {
      min: number;
      input: string;
    }): string;
    loadingMore(): string;
    maximumSelected(args: {
      maximum: number;
    }): string;
    noResults(): string;
    searching(): string;
    removeAllItems(): string;
  }
}
