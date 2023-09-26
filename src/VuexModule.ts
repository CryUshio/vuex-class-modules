import { RegisterOptions } from "./module-factory";
import { WatchOptions } from "vue";

export class VuexModule {
  private __options: RegisterOptions;

  static __useHotUpdate: boolean = false;

  constructor(options: RegisterOptions) {
    this.__options = options;
  }

  /** lifecycle: Will be called after instantiation */
  created(): void { }

  $watch<T>(fn: (arg: this) => T, callback: (newValue: T, oldValue: T) => void, options?: WatchOptions): Function {
    return function () { };
  }
}
