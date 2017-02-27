

angular.module('bayer.controllers')

.controller('SplashCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $ionicScrollDelegate, $timeout) {
	
	// $scope.$on( "$ionicView.beforeEnter", function( scopes, states ) {
	// });

	$timeout(function(){
		$utils.goState("app.home", {});
	}, 500);
})