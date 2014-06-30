'use strict';

/**
 * @ngdoc function
 * @name helloAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloAngularApp
 */
angular.module('helloAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
