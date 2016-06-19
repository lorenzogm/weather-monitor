angular.module('app').config(['$mdIconProvider', ($mdIconProvider) => {
  $mdIconProvider
    .iconSet('social', '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg')
    .iconSet('action', '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg')
    .iconSet('communication', '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg')
    .iconSet('content', '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg')
    .iconSet('toggle', '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg')
    .iconSet('navigation', '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg')
    .iconSet('image', '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg');
}]);

angular.module('app').config(function($mdThemingProvider) {

  $mdThemingProvider.definePalette('dark-red', {
    '50': '#fca5be',
    '100': '#f95b88',
    '200': '#f82560',
    '300': '#ce073f',
    '400': '#b10636',
    '500': '#93052d',
    '600': '#750424',
    '700': '#58031b',
    '800': '#3a0212',
    '900': '#1d0109',
    'A100': '#fca5be',
    'A200': '#f95b88',
    'A400': '#b10636',
    'A700': '#58031b',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 A100 A200'
  });

  $mdThemingProvider.definePalette('accent', {
    '50': '#ffffff',
    '100': '#fcfcfc',
    '200': '#e0e0e0',
    '300': '#bdbdbd',
    '400': '#adadad',
    '500': '#9e9e9e',
    '600': '#8f8f8f',
    '700': '#7f7f7f',
    '800': '#707070',
    '900': '#616161',
    'A100': '#ffffff',
    'A200': '#fcfcfc',
    'A400': '#adadad',
    'A700': '#7f7f7f',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 400 500 600 A100 A200 A400'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('dark-red')
    .accentPalette('accent');
});
