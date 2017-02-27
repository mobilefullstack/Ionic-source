

angular.module('bayer.controllers')

.controller('PMCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $ionicHistory, $ionicScrollDelegate, $timeout) {

	$scope.onKYNum = function(){
		$utils.openPDF(0);
	}

	$scope.onKYNut = function(){
		$utils.openPDF(1);
	}

	$scope.onKYHS = function(){
		$utils.openPDF(2);
	}

	$scope.onKYDHD = function(){
		$utils.openPDF(3);
	}

	$scope.onKYGD = function(){
		$utils.openPDF(4);
	}

	$scope.onKYFS = function(){
		$utils.openPDF(5);
	}

	$scope.onPSJ = function(){
		$utils.openPDF(6);
	}

	$scope.onCNESTP = function(){
		$utils.openPDF(7);
	}

	$scope.onDTP = function(){
		$utils.openPDF(8);
	}

	$scope.onCNEESTP = function(){
		$utils.openPDF(9);
	}

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};
})