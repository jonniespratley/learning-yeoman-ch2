'use strict';

/**
 * @ngdoc function
 * @name helloAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloAngularApp
 */
angular.module('helloAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
