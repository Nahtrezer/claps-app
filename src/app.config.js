export default function appRoutingConfig($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

appRoutingConfig.$inject = ['$urlRouterProvider', '$locationProvider']
