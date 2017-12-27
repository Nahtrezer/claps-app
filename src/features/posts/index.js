import angular from 'angular';

import { PostComponent } from './post.component';
import { ClapComponent } from './clap/clap.component';

import { ClapService } from './clap/clap.service';

export default angular.module('app.home.posts', [])
  .service('ClapService', ClapService)
  .component('post', PostComponent)
  .component('clap', ClapComponent);
