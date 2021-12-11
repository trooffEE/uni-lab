import Vue from 'vue'

export declare class Bus {
  $on(action: string, fn: any): any;
  $emit(action: string, params?: any): any;
  $off(action: string, id: number): void;
  $subscribed(action: string): boolean;
}

declare module 'vue/types/vue' {
  export interface Vue {
    $bus: Bus,
  }
}
