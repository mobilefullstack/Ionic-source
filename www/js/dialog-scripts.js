

angular.module('bayer.controllers')

.controller('DSCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $ionicHistory, $ionicScrollDelegate, $timeout) {

	$scope.onBGMNF = function(){
		$utils.openInsiderModal(0, 0, 5);
	}

	$scope.onBGMR = function(){
		$utils.openInsiderModal(1, 0, 5);
	}

	$scope.onHENF = function(){
		$utils.openInsiderModal(2, 0, 5);
	}

	$scope.onHER = function(){
		$utils.openInsiderModal(3, 0, 5);
	}

	$scope.onPANF = function(){
		$utils.openInsiderModal(4, 0, 5);
	}

	$scope.onPAR = function(){
		$utils.openInsiderModal(5, 0, 5);
	}

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};
})