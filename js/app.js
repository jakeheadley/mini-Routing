angular.module('miniRoutingApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<h1>{{message1}}</h1>',
      controller: 'mainCtrl'
    })
    .state('about', {
      url: '/about',
      template: '<h1>{{message2}}</h1>',
      controller: 'mainCtrl'
    })
    .state('content', {
      url: '/content',
      template: '<h1>{{message3}}</h1>',
      controller: 'mainCtrl'
    })
    .state('scrapbook', {
      url: '/scrapbook',
      template: '<h1>{{message4}}</h1>',
      controller: 'mainCtrl'
    })
    // Start: Players ==================
    .state('roster', {
      url: '/roster',
      templateUrl: './views/roster.html',
      controller: 'rosterCtrl'
    })
    .state('player', {
      url: '/player/:id',
      templateUrl: './views/player.html',
      controller: 'playerCtrl'
    })
    // End: Players =====================
    .state('contact', {
      url: '/contact',
      template: '<h1>{{message5}}</h1>',
      controller: 'mainCtrl'
    })
})
