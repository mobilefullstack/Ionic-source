

angular.module('bayer.controllers')

.controller('SCCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $ionicHistory, $ionicScrollDelegate, $timeout) {

	$scope.onFCNMC = function(){
		$utils.openInsiderModal(32, 32, 33);
	}

	$scope.onCPMFY = function(){
		$utils.openInsiderModal(33, 32, 33);
	}

	$scope.onPAI = function(){
		$utils.openPDF(10);
	}

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};
})