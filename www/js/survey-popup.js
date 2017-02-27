

angular.module('bayer.controllers')

.controller('SurveyCtrl', function($scope, $rootScope, $state, $stateParams, $ionicScrollDelegate, $ionicSlideBoxDelegate, $ionicSlideBoxDelegate, $ionicPopover, $timeout, $utils, $window, $localStorage, $cordovaGoogleAnalytics) {

	$scope.onTapPharItem = function(index){
		if ($scope.curPharIndex > -1) return;

		$scope.curPharIndex = index;

		$timeout(function(){
			$scope.isPharSelected = true;
		}, 500);
	}

	$scope.onBack = function(){
		$scope.curPharIndex = -1;
		$scope.isPharSelected = false;
	}

	$scope.onSubmit = function(){
		console.log($scope.curPharIndex);

            $localStorage.set("SURVEY-PHAR-INDEX", $scope.curPharIndex);

		$rootScope.surveyPopup.remove();

            if (!window.analytics) return;
            
            $cordovaGoogleAnalytics.addCustomDimension("1", $rootScope.CONFIG.pharmacies[$scope.curPharIndex]);
            // $cordovaGoogleAnalytics.addCustomDimension("2", $scope.curPharIndex);
      
      	// $utils.openAlert($rootScope.CONFIG.pharmacies[$scope.curPharIndex]);
	}

	$scope.onBack();
})