

angular.module('bayer.controllers')

.controller('BGMTabCtrl', function($scope, $rootScope, $state, $stateParams, $ionicScrollDelegate, $timeout, $utils) {
	
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
      	$utils.openInsiderModal(0, 0, 5);
	};

	$scope.onTPR = function(){
      	$utils.openInsiderModal(1, 0, 5);
	};

	$scope.onBIO = function(){
      	$utils.openInsiderModal(6, 6, 10);
	};

	$scope.onBIIM = function(){
      	$utils.openInsiderModal(7, 6, 10);
	};

	$scope.onBICGT = function(){
      	$utils.openInsiderModal(8, 6, 10);
	};

	$scope.onBIBGPG = function(){
      	$utils.openInsiderModal(9, 6, 10);
	};

	$scope.onBIPT = function(){
      	$utils.openInsiderModal(10, 6, 10);
	};

	$scope.onPEMKYN = function(){
		$utils.openPDF(0);
	};

	$scope.onTapImgTitle = function(){
		$utils.goState("app.home", {});
	};

})