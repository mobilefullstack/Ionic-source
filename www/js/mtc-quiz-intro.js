

angular.module('bayer.controllers')

.controller('MTCQuizIntroCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $ionicHistory, $ionicScrollDelegate, $timeout) {

	$scope.trustAsHtml = function(string) {
		return $utils.trustAsHtml(string);
	};

	$scope.onQuiz = function() {
		$utils.goState("app.mtc-quiz", {});
	};

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};
})