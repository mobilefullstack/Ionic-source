

angular.module('bayer.controllers')

.controller('DRCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $ionicHistory, $ionicScrollDelegate, $timeout, $cordovaGoogleAnalytics) {

	$scope.onTapArticle = function(index){

		if (window.analytics){
			var title = $rootScope.CONFIG.dr.articles[index];
			var link = $rootScope.CONFIG.dr.links[index];
			$cordovaGoogleAnalytics.trackView("DR: " + title);
		}

		$utils.openURL($rootScope.CONFIG.dr.links[index]);
	}

	// $scope.onTapArticles = function(){
	// 	$utils.openURL($rootScope.CONFIG.dr.mainLink);
	// }

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};
})