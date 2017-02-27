

angular.module('bayer.controllers')

.controller('DCPCtrl', function($scope, $rootScope, $state, $stateParams, $utils, $ionicHistory, $ionicScrollDelegate, $timeout) {

	$scope.onBGM = function(){
        $rootScope.dcpTabId = 0;
        $utils.goState("app.dcp-tab", {});
	}

	$scope.onHE = function(){
        $rootScope.dcpTabId = 1;
        $utils.goState("app.dcp-tab", {});
	}

	$scope.onPA = function(){
        $rootScope.dcpTabId = 2;
        $utils.goState("app.dcp-tab", {});
	}

	$scope.onBB = function(){
        $rootScope.dcpTabId = 3;
        $utils.goState("app.dcp-tab", {});
	}

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};
})