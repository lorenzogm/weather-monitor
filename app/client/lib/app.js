angular.module('app', [
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'nvd3',
  'auth',
]);

function onReady() {
  angular.bootstrap(document, ['app'], {
    strictDi: true
  });
}

if (Meteor.isCordova)
  angular.element(document).on('deviceready', onReady);
else
  angular.element(document).ready(onReady);
