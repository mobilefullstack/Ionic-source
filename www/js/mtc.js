

angular.module('bayer.controllers')

.controller('MTCCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $ionicHistory, $ionicScrollDelegate, $timeout) {

	$scope.userCred = {
		username: "",
		pwd: ""
	};
	
	$scope.trustAsHtml = function(string) {
		return $utils.trustAsHtml(string);
	};

	$scope.onSend = function(string) {
		$utils.goState("app.mtc-main", {});
	};

	$scope.onForgotPwd = function(string) {
		$utils.openPrompt("Please enter your email and we’ll send you a link to reset it.", "Forgot Password", ["Cancel", "Send"],
			function(result){
				if (result.buttonIndex == 2){
					$utils.openAlert("Please check your email and follow the steps to reset your password.", "Password Sent", "Close Window");
				}
			});
	};

	$scope.onRegister = function(string) {
		$utils.goState("app.mtc-register", {});
	};

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};
})