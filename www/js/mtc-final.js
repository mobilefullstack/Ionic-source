

angular.module('bayer.controllers')

.controller('MTCFinalCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $ionicHistory, $ionicScrollDelegate, $timeout) {

	$scope.finalPhase = 1;
	$scope.curChoiceIndex = -1;
	$scope.claimData = {};
	$scope.choices = [
		{
			caption: "CONTOUR<sup>®</sup>NEXT Meter"
		},
		{
			caption: "CONTOUR<sup>®</sup>NEXT EZ Meter"
		},
		{
			caption: "Both CONTOUR<sup>®</sup>NEXT & CONTOUR<sup>®</sup>NEXT EZ Meters"
		}
	];

	$scope.trustAsHtml = function(string) {
		return $utils.trustAsHtml(string);
	}

	$scope.onTapChoice = function(index){
		$scope.curChoiceIndex = index;
	}

	$scope.onClaim = function(){
		$scope.finalPhase = 2;

		$ionicScrollDelegate.$getByHandle("id-scl-final").scrollTop(false);
	}

	$scope.onSubmit = function(){
		console.log(JSON.stringify($scope.claimData));
		console.log($scope.curChoiceIndex);

		$scope.finalPhase = 3;
		$ionicScrollDelegate.$getByHandle("id-scl-final").scrollTop(false);
	}

	$scope.onClose = function(){
		$ionicHistory.goBack(-3);
	}

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};

	$scope.isPhone = function(){
		return $utils.isPhone();
	};
})