// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.config', {
    url: '/config',
    views: {
      'menuContent': {
        templateUrl: 'templates/config.html',
        controller: 'Config'
      }
    }
  })

  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
          controller: 'Profile'
        }
      }
    })

  .state('app.memo', {
    url: '/memo',
    views: {
      'menuContent': {
        templateUrl: 'templates/memo.html',
        controller: 'Memo'
      }
    }
  })

  .state('app.school', {
    url: '/schoolperfil',
    views: {
      'menuContent': {
        templateUrl: 'templates/schoolperfil.html',
        controller: 'SchoolPerfil'
      }
    }
  })

  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'MapPageCtrl'
      }
    }
  })  

  .state('app.ranking', {
    url: '/ranking',
    views: {
      'menuContent': {
        templateUrl: 'templates/ranking.html',
        controller: 'Ranking'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/map');
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.backButton.text(false);
  $ionicConfigProvider.backButton.previousTitleText(false);
});

(function () {
   'use strict';
   angular.module('starter.services', [])
})();
