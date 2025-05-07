// turndown.d.ts
declare module 'turndown' {
  export default class TurndownService {
    constructor();
    turndown(html: string): string;
  }
}
