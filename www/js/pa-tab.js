

angular.module('bayer.controllers')

.controller('PATabCtrl', function($scope, $rootScope, $state, $stateParams, $ionicScrollDelegate, $timeout, $utils) {
	
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
      	$utils.openInsiderModal(4, 0, 5);
	};

	$scope.onTPR = function(){
      	$utils.openInsiderModal(5, 0, 5);
	};

	$scope.onBIO = function(){
		$utils.openInsiderModal(20, 20, 28);
	};

	$scope.onBIGPA = function(){
		$utils.openInsiderModal(21, 20, 28);
	};

	$scope.onBIEBGC = function(){
		$utils.openInsiderModal(22, 20, 28);
	};

	$scope.onBIEIL = function(){
		$utils.openInsiderModal(23, 20, 28);
	};

	$scope.onBIMHR = function(){
		$utils.openInsiderModal(24, 20, 28);
	};

	$scope.onBIMHF = function(){
		$utils.openInsiderModal(25, 20, 28);
	};

	$scope.onBIBFP = function(){
		$utils.openInsiderModal(26, 20, 28);
	};

	$scope.onBIIE = function(){
		$utils.openInsiderModal(27, 20, 28);
	};

	$scope.onBIST = function(){
		$utils.openInsiderModal(28, 20, 28);
	};

	$scope.onPEMKYHS = function(){
		$utils.openPDF(2);
	};

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};

})