angular.module('auth')
  .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>'
      })
      .state('resetPassword', {
        url: '/reset-password',
        template: '<reset-password></reset-password>'
      });

    $urlRouterProvider.otherwise("/");
  })
  .run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, error) {
      if ((Meteor.user() || $rootScope.loggingIn) && toState.name == 'login') {
        event.preventDefault();
        $state.go('home');
      }
    });
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, error) {
      if (!Meteor.user() && !$rootScope.loggingIn && toState.name != 'login') {
        event.preventDefault();
        $state.go('login');
      }
    });
  });
