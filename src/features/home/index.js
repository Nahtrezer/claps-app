import angular from 'angular';

import routes from './home.routers';
import HomeController from './home.controller';
import posts from '../posts';


export default angular.module('app.home', ['app.home.posts'])
  .config(routes)
  .controller('HomeController', HomeController)
  .name;
