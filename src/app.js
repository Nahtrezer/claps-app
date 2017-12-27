import 'bootstrap/dist/css/bootstrap.css';

import angular from "angular";
import uirouter from "angular-ui-router";
import uibootsrap from "angular-ui-bootstrap";

import appRoutingConfig from "./app.config";

import home from './features/home';

export default angular.module("app", [
  uirouter,
  uibootsrap,
  home
])
  .config(appRoutingConfig);
