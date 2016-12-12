import './polyfills';
import './global.css';

import 'bootstrap-sass/assets/javascripts/bootstrap';
import './assets/_bootstrap.customized.scss';
import './assets/_font-awesome.customized.scss';

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
