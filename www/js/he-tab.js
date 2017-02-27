

angular.module('bayer.controllers')

.controller('HETabCtrl', function($scope, $rootScope, $state, $stateParams, $ionicScrollDelegate, $timeout, $utils) {
	
	$scope.$on( "$ionicView.beforeEnter", function( scopes, states ) {

		$scope.tabIndex = $rootScope.dcpChildTabId;
		
		if (!$rootScope.dcpChildTabId)
			$scope.tabIndex = 0;
	});

	$scope.goTab = function(index){
		// var tcss = $(".tab-card-section");

		// tcss.css("padding-bottom", "100%");
		// $timeout(function(){
			$scope.tabIndex = index;
			$rootScope.dcpChildTabId = index;
			$timeout(function(){
				// tcss.css("padding-bottom", "5%");
				$utils.resizeScroll();
			}, 100);
		// }, 0);
	}

	$scope.onTP = function(){
		$scope.goTab(0);
	};

	$scope.onBI = function(){
		$scope.goTab(1);
	};

	$scope.onPEM = function(){
		$scope.goTab(2);
	};

	$scope.onSC = function(){
		$utils.goState("app.solution-center", {});
	};

	$scope.onTPNF = function(){
      	$utils.openInsiderModal(2, 0, 5);
	};

	$scope.onTPR = function(){
      	$utils.openInsiderModal(3, 0, 5);
	};

	$scope.onBIO = function(){
		$utils.openInsiderModal(11, 11, 19);
	};

	$scope.onBIC = function(){
		$utils.openInsiderModal(12, 11, 19);
	};

	$scope.onBIF = function(){
		$utils.openInsiderModal(13, 11, 19);
	};

	$scope.onBIHRFL = function(){
		$utils.openInsiderModal(14, 11, 19);
	};

	$scope.onBIGI = function(){
		$utils.openInsiderModal(15, 11, 19);
	};

	$scope.onBIMPT = function(){
		$utils.openInsiderModal(16, 11, 19);
	};

	$scope.onBIOC = function(){
		$utils.openInsiderModal(17, 11, 19);
	};

	$scope.onBIP = function(){
		$utils.openInsiderModal(18, 11, 19);
	};

	$scope.onBIS = function(){
		$utils.openInsiderModal(19, 11, 19);
	};

	$scope.onPEMKYN = function(){
		$utils.openPDF(1);
	};

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};

})