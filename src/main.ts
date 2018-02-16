import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {TestModule} from './app/test/test.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(TestModule)
  .catch(err => console.log(err));
