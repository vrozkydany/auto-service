'use strict';

angular.
  module('autoApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<main></main>'
        }).
        when('/about', {
          template: '<about></about>'
        }).
        when('/price', {
          template: '<price></price>'
        }).
        when('/contact', {
          template: '<contact></contact>'
        }).
        when('/case-repair', {
          template: '<case-repair></case-repair>'
        }).
        when('/mechanics-repair', {
          template: '<mechanics-repair></mechanics-repair>'
        }).
        when('/express-service', {
          template: '<express-service></express-service>'
        }).
        when('/diagnostic', {
          template: '<diagnostic></diagnostic>'
        }).
        when('/multy-working', {
          template: '<multy-working></multy-working>'
        }).
        when('/plastic-repair', {
          template: '<plastic-repair></plastic-repair>'
        }).

        otherwise('/');
    }
  ]);