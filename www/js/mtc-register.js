

angular.module('bayer.controllers')

.controller('MTCRegisterCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $ionicHistory, $ionicScrollDelegate, $timeout) {

	$scope.userData = {

	};
	$scope.sendNotifications = false;

	$scope.onChkNotification = function(){
		$scope.sendNotifications = !$scope.sendNotifications;
	}
	
	$scope.trustAsHtml = function(string) {
		return $utils.trustAsHtml(string);
	};
	
	$scope.onSubmit = function() {
		if ($scope.sendNotifications){
			$utils.openAlert("onSubmit");
		}
	};

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};

	$scope.isPhone = function(){
		return $utils.isPhone();
	};
})