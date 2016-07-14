var searchApp = angular.module('searchApp', ['elasticsearch']);

// controller
searchApp.controller('SearchResultList', ['$scope', function($scope){
	$scope.hello = "Hello world!";
}])